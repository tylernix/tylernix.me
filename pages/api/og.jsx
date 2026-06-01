import { ImageResponse } from 'next/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const { searchParams, origin } = new URL(req.url)
  const title = searchParams.get('title')
  const excerpt = searchParams.get('excerpt')

  const [electronixFont, profileImageData] = await Promise.all([
    fetch(new URL('/fonts/Electronix-Regular.woff', origin)).then((r) => r.arrayBuffer()),
    fetch(new URL('/assets/profile-circle-2025.png', origin)).then((r) => r.arrayBuffer()),
  ])

  const profileImageSrc = `data:image/png;base64,${Buffer.from(profileImageData).toString('base64')}`

  const fontOpts = [{ name: 'Electronix', data: electronixFont, style: 'normal' }]
  const size = { width: 1200, height: 630 }

  if (title) {
    return new ImageResponse(
      (
        <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#F7F8FD', padding: '60px', fontFamily: 'Electronix' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '12px', height: '100%', backgroundColor: '#E63946' }} />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', fontSize: title.length > 50 ? 52 : 64, color: '#1D3557', lineHeight: 1.15, maxWidth: '900px' }}>
                {title}
              </div>
              {excerpt && (
                <div style={{ display: 'flex', fontSize: 26, color: '#457B9D', lineHeight: 1.4, maxWidth: '860px' }}>
                  {excerpt}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profileImageSrc} width={72} height={72} style={{ borderRadius: '50%', border: '2px solid #B0C1E8' }} alt="Tyler Nix" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: 28, color: '#1D3557' }}>Tyler Nix</span>
                <span style={{ fontSize: 20, color: '#B0C1E8' }}>tylernix.me</span>
              </div>
            </div>
          </div>
        </div>
      ),
      { ...size, fonts: fontOpts }
    )
  }

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#F7F8FD', alignItems: 'center', justifyContent: 'center', fontFamily: 'Electronix' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '12px', height: '100%', backgroundColor: '#E63946' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', padding: '0 80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profileImageSrc} width={220} height={220} style={{ borderRadius: '50%', border: '4px solid #B0C1E8' }} alt="Tyler Nix" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 80, color: '#1D3557', lineHeight: 1 }}>
              <span>Tyler Nix</span>
              <span style={{ color: '#E63946' }}>.</span>
            </div>
            <div style={{ display: 'flex', fontSize: 30, color: '#457B9D', maxWidth: '600px', lineHeight: 1.4 }}>
              My growing digital garden on identity, security, and the general web.
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#B0C1E8', marginTop: '8px' }}>
              tylernix.me
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fontOpts }
  )
}
