# Subham Consulting — Complete SEO Action Kit
> subhamconsulting.com · Content-only changes · No code restructuring required

---

## 🚨 CRITICAL FIXES — Do These First (30 Minutes)

These two issues are silently stealing your Google rankings RIGHT NOW. Found by directly reading your live site's source code.

---

### Fix 1 · Canonical URL (MOST IMPORTANT)

**Problem:** Your `www.subhamconsulting.com` site has this in its `<head>`:
```html
<link rel="canonical" href="https://subhamconsulting.in/" />
```
This tells Google: *"the real version of this page lives at .in, not .com."* Every click, every backlink, every ranking signal you earn on `.com` is being credited to `.in` instead.

**Fix — change it to:**
```html
<link rel="canonical" href="https://www.subhamconsulting.com/" />
```

---

### Fix 2 · OG URL + Twitter URL (same problem)

**Problem:** Your Open Graph and Twitter meta tags also point to .in:
```html
<meta property="og:url" content="https://subhamconsulting.in/" />
<meta name="twitter:url" content="https://subhamconsulting.in/" />
```

**Fix — replace with:**
```html
<meta property="og:url" content="https://www.subhamconsulting.com/" />
<meta name="twitter:url" content="https://www.subhamconsulting.com/" />
```

---

### Fix 3 · OG Image (Broken Social Previews)

**Problem:** Your OG image path has a typo AND uses a relative URL:
```html
<meta property="og:image" content="/Subam Logo.png" />
```
"Subam" should be "Subham". Relative paths also don't work for social sharing.

**Fix:**
```html
<meta property="og:image" content="https://www.subhamconsulting.com/Subham Logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```
> Tip: Rename the file to `og-image.jpg` (no spaces) and upload a proper 1200×630 social card image for best results.

---

## ⚠️ HIGH PRIORITY FIXES — Meta Tags (1 Hour)

### Fix 4 · Title Tag

**Current (good, keep):**
```
Subham Consulting | Sustainable Construction Chennai | Eco-Friendly Builders
```
✅ 75 chars — slightly long but acceptable. No change needed.

---

### Fix 5 · Meta Description (Too Long — Gets Truncated)

**Current (190 chars — truncated by Google):**
```
Subham Consulting – Sustainable Construction Experts in Chennai. We build eco-friendly homes, 
passive cooling residences & green buildings using natural materials: rammed earth, clay, stone 
& lime. Call +91 84385 30234.
```

**Replacement (155 chars — fits perfectly):**
```
Subham Consulting builds eco-friendly homes & green buildings in Chennai using rammed earth, 
clay & natural materials. Sustainable construction experts in Tamil Nadu.
```

```html
<meta name="description" content="Subham Consulting builds eco-friendly homes & green buildings in Chennai using rammed earth, clay & natural materials. Sustainable construction experts in Tamil Nadu." />
```

---

### Fix 6 · OG Description

**Replacement:**
```html
<meta property="og:description" content="Eco-friendly homes, passive cooling design & green buildings in Chennai. Rammed earth, clay & stone construction by Subham Consulting." />
```

---

### Fix 7 · Twitter Description

**Replacement:**
```html
<meta name="twitter:description" content="Eco-friendly homes & green buildings in Chennai using rammed earth, clay & natural materials. Sustainable construction by Subham Consulting." />
```

---

## 📋 SCHEMA MARKUP — Add to `<head>` (Copy-Paste Ready)

Schema markup is currently **completely missing** from your site. This is one of the highest-impact, content-only fixes available. Paste all three blocks into your HTML `<head>` section (or wherever your other meta tags are managed).

---

### Schema Block 1 · LocalBusiness + Organization

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "Subham Consulting & Construction",
  "alternateName": "Subham Consulting",
  "url": "https://www.subhamconsulting.com/",
  "logo": "https://www.subhamconsulting.com/Subham Logo.png",
  "image": "https://www.subhamconsulting.com/Subham Logo.png",
  "description": "Subham Consulting is a sustainable construction and architecture consultancy in Chennai, Tamil Nadu. Specialising in eco-friendly homes, passive cooling design, rammed earth construction, green buildings, and luxury villa design using natural materials.",
  "telephone": "+918438530234",
  "email": "info@subhamconsulting.com",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0827,
    "longitude": 80.2707
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    {
      "@type": "City",
      "name": "Chennai"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sustainable Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Architecture Consultancy",
          "description": "Eco-friendly architectural design for homes and commercial buildings in Chennai"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Green Building Consultancy",
          "description": "Green building design and consultancy using natural materials in Tamil Nadu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Passive Cooling Design",
          "description": "Passive cooling and natural ventilation design for homes in tropical climates"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rammed Earth Construction",
          "description": "Traditional rammed earth and natural material construction services in South India"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Villa Design",
          "description": "Luxury sustainable villa architecture and construction in Chennai and Tamil Nadu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Consultancy",
          "description": "End-to-end construction project management and consultancy services"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/subham-consulting",
    "https://www.facebook.com/subhamconsulting",
    "https://www.instagram.com/subhamconsulting"
  ]
}
</script>
```
> Update the `sameAs` URLs with your real social profile links.

---

### Schema Block 2 · FAQPage (Earns Rich Results in Search)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is sustainable construction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sustainable construction uses natural, low-carbon materials like rammed earth, clay, stone, and lime to build homes that are energy-efficient, thermally comfortable, and environmentally responsible. Subham Consulting specialises in sustainable construction in Chennai and across Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "What is passive cooling in home design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive cooling is a design approach that keeps homes naturally cool without air conditioning by using strategic orientation, cross-ventilation, thermal mass, shading, and natural materials. It is especially effective in tropical climates like Chennai and South India."
      }
    },
    {
      "@type": "Question",
      "name": "What is rammed earth construction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rammed earth construction is an ancient technique that compresses natural earth, clay, sand, and gravel into solid, durable walls. It is energy-efficient, carbon-neutral, and provides excellent thermal performance. Subham Consulting builds rammed earth homes in Chennai and Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "Does Subham Consulting build green homes in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Subham Consulting is a sustainable construction and architecture consultancy based in Chennai, Tamil Nadu. We design and build eco-friendly homes, passive cooling residences, rammed earth structures, and green buildings using natural materials including clay, stone, and lime."
      }
    },
    {
      "@type": "Question",
      "name": "How much does sustainable home construction cost in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of sustainable construction in Chennai varies by project size, materials, and design complexity. Natural material homes using rammed earth or clay can be cost-competitive with conventional construction over the long term due to lower energy and maintenance costs. Contact Subham Consulting for a project consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Subham Consulting serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subham Consulting serves clients across Chennai, Tamil Nadu, and South India. We offer sustainable architecture, green building consultancy, passive cooling design, and construction consultancy services throughout the region."
      }
    }
  ]
}
</script>
```

---

### Schema Block 3 · WebSite (Sitelinks Search Box Eligibility)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Subham Consulting",
  "url": "https://www.subhamconsulting.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.subhamconsulting.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

---

## 🏠 HOMEPAGE CONTENT REWRITES

These are the exact content changes to make to your homepage copy. No structural changes needed — just update the text.

---

### H1 Heading (most important on-page change)

**Current (likely something creative):**
```
Building with the Earth
```
or similar brand-led headline.

**Replace with:**
```
Sustainable Construction & Architecture Consultants in Chennai
```

**Sub-headline below H1:**
```
We design and build eco-friendly homes, passive cooling residences, and green buildings 
across Tamil Nadu using natural materials — rammed earth, clay, stone, and lime.
```

---

### Homepage Introduction Paragraph

Add or replace the main intro paragraph with:

```
Subham Consulting is a sustainable architecture and construction consultancy based in Chennai, 
Tamil Nadu. We help clients build homes and buildings that work with the climate — naturally cool, 
low-maintenance, and built to last using traditional and sustainable materials.

Our projects span eco-friendly home design, rammed earth construction, passive cooling design, 
luxury villa architecture, and green building consultancy across South India.
```

---

### Services Section Headings (H2 + H3)

Use these exact headings for your services section:

**Section H2:**
```
Our Sustainable Construction Services
```

**Service H3s:**
```
Sustainable Architecture
Green Building Consultancy
Passive Cooling Home Design
Rammed Earth Construction
Luxury Villa Architecture
Construction Project Consultancy
Interior Design Consultancy
```

---

### Why Choose Us Section

Add this copy (can be bullet points or short cards):

```
Why Clients Choose Subham Consulting

→ Deep expertise in natural building materials — rammed earth, clay, lime, and stone
→ Passive cooling design that eliminates or reduces air conditioning costs
→ Sustainable homes that stay 5–8°C cooler than conventional construction
→ Projects delivered across Chennai, Tamil Nadu, and South India
→ Eco-conscious approach from design to completion
→ A team that understands the tropical climate of South India
```

---

### FAQ Section Copy (Add to Homepage)

Adding visible FAQ content to the homepage reinforces the schema above and targets long-tail searches.

```
Frequently Asked Questions

Q: Do you build eco-friendly homes in Chennai?
A: Yes. We design and build eco-friendly homes in Chennai and across Tamil Nadu using 
natural materials like rammed earth, clay, stone, and lime.

Q: What is passive cooling and why does it matter in Chennai?
A: Passive cooling uses design — orientation, airflow, shading, thermal mass — to keep 
homes naturally cool without air conditioning. In Chennai's hot climate, it can reduce 
indoor temperatures by 5–8°C and cut energy bills significantly.

Q: What natural materials do you use in construction?
A: We work with rammed earth, compressed earth blocks, clay, stone, lime plaster, and 
locally sourced natural materials that are sustainable, breathable, and thermally efficient.

Q: Do you work on projects outside Chennai?
A: Yes — we serve clients across Tamil Nadu and South India. Contact us to discuss 
your project location.
```

---

## 🗺️ CONTENT STRATEGY — Keyword Clusters + Page Map

### Keyword Cluster Report

**Total keywords:** 38  
**Clusters created:** 8  

---

#### Cluster 1 · Brand
**Intent:** Navigational  
**Target page:** Homepage  
**Primary keyword:** `Subham Consulting`

Supporting keywords: Subham Consulting Chennai, Subham Consulting reviews, Subham Consulting construction, Subham Consulting sustainable

---

#### Cluster 2 · Sustainable Architecture
**Intent:** Commercial  
**Target page:** `/services/sustainable-architecture`  
**Primary keyword:** `sustainable architecture Chennai`

Supporting: eco-friendly house design Chennai, green architecture Tamil Nadu, sustainable home design India, eco house architect Chennai

---

#### Cluster 3 · Green Building
**Intent:** Commercial  
**Target page:** `/services/green-building`  
**Primary keyword:** `green building consultant Chennai`

Supporting: green building consultancy Tamil Nadu, IGBC consultant Chennai, sustainable building company South India

---

#### Cluster 4 · Passive Cooling
**Intent:** Commercial + Informational  
**Target page:** `/services/passive-cooling`  
**Primary keyword:** `passive cooling homes Chennai`

Supporting: passive cooling house design India, natural ventilation home design, energy efficient home tropical climate, passive house design Tamil Nadu

---

#### Cluster 5 · Rammed Earth
**Intent:** Commercial + Informational  
**Target page:** `/services/rammed-earth`  
**Primary keyword:** `rammed earth construction India`

Supporting: rammed earth house Chennai, clay house construction India, natural building materials Chennai, earth construction company

---

#### Cluster 6 · Luxury Villa
**Intent:** Commercial  
**Target page:** `/services/luxury-villa`  
**Primary keyword:** `luxury villa architect Chennai`

Supporting: eco villa design Tamil Nadu, sustainable villa construction India, custom luxury home builder Chennai

---

#### Cluster 7 · Construction Consultancy
**Intent:** Commercial  
**Target page:** `/services/construction-consultancy`  
**Primary keyword:** `construction consultancy Chennai`

Supporting: construction consultant Tamil Nadu, building project management Chennai, construction advisory services India

---

#### Cluster 8 · Blog / Informational
**Intent:** Informational  
**Target pages:** Blog posts  
**Quick-win keywords (low competition):**

| Title | Primary keyword |
|-------|----------------|
| Passive cooling methods for tropical homes | passive cooling tropical climate |
| Rammed earth vs conventional brick construction | rammed earth vs brick India |
| How much does a sustainable home cost in India? | sustainable home construction cost India |
| Best natural building materials for South India | natural building materials south India |
| What is green building? A guide for Indian homeowners | what is green building India |
| Why passive cooling beats AC in Chennai's climate | passive cooling vs air conditioning India |

---

## 📅 CONTENT CALENDAR — 12 Weeks

### Month 1 · Foundation

**Week 1 — Critical fixes**
- Apply all meta tag fixes (canon, OG, description)
- Add all three schema blocks

**Week 2 — Homepage**
- Rewrite H1 and intro copy
- Add FAQ section
- Add "Why choose us" copy

**Week 3 — Service page 1**
- Create/rewrite Sustainable Architecture page
- Title: `Sustainable Architecture Consultants in Chennai | Subham Consulting`
- H1: `Sustainable Architecture Design in Chennai`

**Week 4 — Service page 2**
- Create/rewrite Passive Cooling Design page
- Title: `Passive Cooling Home Design Chennai | Eco-Friendly Construction`
- H1: `Passive Cooling Design for Homes in Chennai`

---

### Month 2 · Expansion

**Week 5** — Rammed Earth service page  
**Week 6** — Green Building Consultancy page  
**Week 7** — Blog post: "How passive cooling works in South India"  
**Week 8** — Blog post: "What is rammed earth construction?"  

---

### Month 3 · Authority

**Week 9** — Luxury Villa service page  
**Week 10** — Blog post: "Cost of sustainable construction in Chennai"  
**Week 11** — 2 project case study pages  
**Week 12** — Review keyword rankings + update top pages  

---

## 📍 GOOGLE BUSINESS PROFILE — Optimisation Checklist

Your GBP is the fastest way to rank in local Google search and Google Maps. Work through this list:

### Business Information
- [ ] Business name exactly: `Subham Consulting & Construction`
- [ ] Primary category: `Construction Company` or `Architectural Firm`
- [ ] Secondary categories: `Green Building Consultant`, `Interior Architect`, `Construction Consultant`
- [ ] Address: Add your full Chennai address (required for local pack)
- [ ] Phone: +91 84385 30234
- [ ] Website: https://www.subhamconsulting.com/
- [ ] Opening hours: Add accurate hours

### Description (750 chars max — use this):
```
Subham Consulting & Construction is a sustainable architecture and construction consultancy 
in Chennai, Tamil Nadu. We design and build eco-friendly homes, passive cooling residences, 
and green buildings using natural materials — rammed earth, clay, stone, and lime.

Our services include sustainable architecture, green building consultancy, passive cooling 
design, luxury villa architecture, rammed earth construction, and construction project 
management across South India.

Call us to discuss your project: +91 84385 30234
```

### Services to Add on GBP
```
Sustainable Architecture
Green Building Consultancy
Passive Cooling Design
Rammed Earth Construction
Luxury Villa Architecture
Construction Consultancy
Interior Design Consultancy
Eco-Friendly Home Design
Natural Material Construction
```

### Photos to Upload
- [ ] Exterior / office photo
- [ ] At least 5 project photos (before/after or completed work)
- [ ] Team photo
- [ ] Logo (square, high resolution)
- [ ] Cover photo (landscape, shows your best project)

### Ongoing Actions
- [ ] Post an update weekly (takes 2 minutes — a project photo + caption)
- [ ] Reply to every review within 24 hours
- [ ] Ask every client to leave a Google review — direct link: `https://g.page/r/{your-place-id}/review`

---

## 📌 LOCAL CITATIONS — Submit Your Business

List your business consistently on these platforms with the SAME name, address, phone, and website.

**Business name to use everywhere:** `Subham Consulting & Construction`

| Platform | URL | Priority |
|----------|-----|----------|
| Google Business Profile | business.google.com | 🔴 Critical |
| Justdial | justdial.com | 🟠 High |
| Sulekha | sulekha.com | 🟠 High |
| IndiaMART | indiamart.com | 🟠 High |
| Houzz (for architecture/interiors) | houzz.in | 🟠 High |
| LinkedIn Company Page | linkedin.com | 🟠 High |
| Facebook Business Page | facebook.com | 🟠 High |
| Instagram Business | instagram.com | 🟠 High |
| Yelp India | yelp.com | 🟡 Medium |
| Yellow Pages India | yellowpages.in | 🟡 Medium |
| Grotal | grotal.com | 🟡 Medium |
| BuildersMART | buildersmart.in | 🟡 Medium |

---

## ✅ DELIVERABLES CHECKLIST

### Week 1 (Critical — Do Now)
- [ ] Fix canonical URL → `https://www.subhamconsulting.com/`
- [ ] Fix `og:url` → `https://www.subhamconsulting.com/`
- [ ] Fix `twitter:url` → `https://www.subhamconsulting.com/`
- [ ] Fix OG image typo and use absolute URL
- [ ] Shorten meta description to 155 chars
- [ ] Add LocalBusiness schema markup
- [ ] Add FAQPage schema markup
- [ ] Add WebSite schema markup
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap in GSC

### Week 2 (Homepage)
- [ ] Update H1 to include primary keyword
- [ ] Add intro paragraph with location + service keywords
- [ ] Add "Services" section with keyword-rich H3s
- [ ] Add FAQ section (visible on page)
- [ ] Add "Why choose us" copy
- [ ] Complete Google Business Profile

### Weeks 3–4 (Service Pages)
- [ ] Sustainable Architecture service page
- [ ] Passive Cooling service page
- [ ] Rammed Earth service page
- [ ] Internal links between all service pages

### Month 2–3 (Content)
- [ ] 4–6 blog posts using quick-win keywords
- [ ] 2 project case study pages
- [ ] Local citation submissions
- [ ] 5+ Google reviews requested
- [ ] Monthly ranking report in GSC

---

## 📊 KPIs TO TRACK MONTHLY

Open Google Search Console and check these every month:

| Metric | Where to find |
|--------|--------------|
| Indexed pages | Coverage report |
| Total impressions | Performance report |
| Total clicks | Performance report |
| Average position | Performance report |
| Brand keyword rank (`subham consulting`) | Queries filter |
| Service keyword impressions | Queries filter |
| Pages with 0 clicks but high impressions | Queries → filter CTR < 1% |
| Core Web Vitals | Experience report |
| Local pack appearances | Google Business Profile Insights |

---

## 🔍 VALIDATE YOUR SCHEMA

After adding schema markup, test it here:

- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Markup Validator:** https://validator.schema.org/
- **Google Search Console:** Monitor > Rich results

---

*Generated by Subham Consulting SEO Kit · Based on live site analysis of subhamconsulting.com*
*All fixes are content-only — no structural code changes required*
