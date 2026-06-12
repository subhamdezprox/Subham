import { useEffect } from 'react';

const BASE_URL = 'https://www.subhamconsulting.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/Subam Logo.png`;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object | object[];
}

export default function PageSEO({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
}: PageSEOProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDesc = ogDescription ?? description;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string, attr = 'content') => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace(/\[|\]/g, '').split('=').map(s => s.replace(/"/g, '').trim());
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="title"]', title);
    setLink('canonical', canonicalUrl);

    setMeta('meta[property="og:title"]', resolvedOgTitle);
    setMeta('meta[property="og:description"]', resolvedOgDesc);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImage);

    setMeta('meta[name="twitter:title"]', resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', resolvedOgDesc);
    setMeta('meta[name="twitter:url"]', canonicalUrl);
    setMeta('meta[name="twitter:image"]', ogImage);

    const SCRIPT_ID = '__page-structured-data__';
    let existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) existingScript.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCRIPT_ID;
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      script.textContent = JSON.stringify(dataArray.length === 1 ? dataArray[0] : dataArray);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, resolvedOgTitle, resolvedOgDesc, ogImage, structuredData]);

  return null;
}
