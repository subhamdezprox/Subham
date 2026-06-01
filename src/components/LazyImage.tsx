import React, { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';

const SHIMMER_STYLE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  background: 'linear-gradient(90deg, #f0e4c4 0%, #fdf8ed 45%, #f0e4c4 100%)',
  backgroundSize: '200% 100%',
  animation: 'img-shimmer 1.6s ease-in-out infinite',
};

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Hero / above-fold images: skips lazy deferral, sets fetchpriority=high */
  priority?: boolean;
  /**
   * Optional wrapper <div> classes. When provided, the component renders a
   * wrapper div that shows the shimmer placeholder and hides overflow. Use
   * when the parent does not already establish the image dimensions.
   */
  wrapperClassName?: string;
}

export default function LazyImage({
  priority = false,
  wrapperClassName,
  className = '',
  style,
  onLoad,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Already-cached images may never fire onLoad — check synchronously after mount.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    (onLoad as ((e: React.SyntheticEvent<HTMLImageElement>) => void) | undefined)?.(e);
  };

  const img = (
    <img
      ref={imgRef}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? ({ fetchpriority: 'high' } as any) : {})}
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1)',
        ...style,
      }}
      onLoad={handleLoad}
      {...rest}
    />
  );

  if (!wrapperClassName) return img;

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <div aria-hidden="true" style={SHIMMER_STYLE} />}
      {img}
    </div>
  );
}
