/**
 * Preloads images to improve loading performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preloads multiple images
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  try {
    await Promise.all(sources.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

/**
 * Preloads critical images for better UX
 */
export const preloadCriticalImages = (images: string[]) => {
  // Use requestIdleCallback if available, otherwise use setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => preloadImages(images));
  } else {
    setTimeout(() => preloadImages(images), 100);
  }
};