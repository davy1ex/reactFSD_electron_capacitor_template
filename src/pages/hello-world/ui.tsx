import { getPlatform } from '@/shared/config/platform';

export const HelloWorld = () => {
  const platform = getPlatform();
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '1rem',
      }}>
        Hello, World!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
      }}>
        Running on {platform} platform
      </p>
    </div>
  );
}; 