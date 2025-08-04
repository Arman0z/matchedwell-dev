import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  threshold?: number;
  rootMargin?: string;
  wrapperClassName?: string;
}

const LazyImage = React.memo<LazyImageProps>(({
  src,
  alt,
  placeholderSrc,
  threshold = 0.1,
  rootMargin = '50px',
  className,
  wrapperClassName,
  loading = 'lazy',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            if (imgElement) {
              observer.unobserve(imgElement);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [src, threshold, rootMargin]);

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        className={cn(
          'transition-opacity duration-500',
          imageLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setImageLoaded(true)}
        {...props}
      />
      {!imageLoaded && placeholderSrc && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;