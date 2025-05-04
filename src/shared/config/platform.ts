declare global {
  interface Window {
    electron?: {
      // Add specific electron properties here if needed
    };
    capacitor?: {
      // Add specific capacitor properties here if needed
    };
  }
}

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