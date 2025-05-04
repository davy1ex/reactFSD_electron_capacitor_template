export type Platform = 'web' | 'android' | 'desktop';

export const getPlatform = (): Platform => {
  if (window.electron) {
    return 'desktop';
  }
  
  if (window.capacitor) {
    return 'android';
  }
  
  return 'web';
}; 