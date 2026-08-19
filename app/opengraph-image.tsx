import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SIDERO — ERP Industrial';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a3a5c',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 140,
          height: 140,
          borderRadius: 28,
          backgroundColor: '#ffffff',
          color: '#1a3a5c',
          fontSize: 90,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        S
      </div>
      <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: 2 }}>SIDERO</div>
      <div style={{ display: 'flex', fontSize: 32, color: '#b7cde6', marginTop: 12 }}>
        ERP Industrial
      </div>
    </div>,
    { ...size }
  );
}
