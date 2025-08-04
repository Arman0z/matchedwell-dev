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
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    
    // Set the image source immediately if no placeholder, otherwise use intersection observer
    if (!placeholderSrc) {
      setImageSrc(src);
      return;
    }
    
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
  }, [src, threshold, rootMargin, placeholderSrc]);

  return (
    <div className={cn('image-container', wrapperClassName)}>
      {/* Placeholder background */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        className={cn(
          'image-loading-optimized transition-all duration-700 ease-out',
          imageLoaded && !imageError ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
          className
        )}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        {...props}
      />
      
      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;