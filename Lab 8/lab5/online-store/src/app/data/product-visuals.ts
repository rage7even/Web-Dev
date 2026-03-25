const visualThemes = {
  phone: {
    primary: '#eff5ff',
    secondary: '#d4e2ff',
    accent: '#3b82f6',
    glow: '#9bb7ff'
  },
  laptop: {
    primary: '#f7f2eb',
    secondary: '#e6ddd1',
    accent: '#8d6a4e',
    glow: '#dcc4ad'
  },
  audio: {
    primary: '#eef8f2',
    secondary: '#d2eadc',
    accent: '#2e8b57',
    glow: '#93d3b0'
  },
  tablet: {
    primary: '#f7eff8',
    secondary: '#e8d7ea',
    accent: '#7a4d87',
    glow: '#cfb2d6'
  }
} as const;

type ThemeName = keyof typeof visualThemes;

function createVisual(title: string, subtitle: string, themeName: ThemeName, angle: number): string {
  const theme = visualThemes[themeName];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.primary}" />
          <stop offset="100%" stop-color="${theme.secondary}" />
        </linearGradient>
        <linearGradient id="device" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="${theme.glow}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="56" fill="url(#bg)" />
      <circle cx="1030" cy="170" r="140" fill="${theme.glow}" opacity="0.36" />
      <circle cx="220" cy="720" r="180" fill="${theme.accent}" opacity="0.12" />
      <g transform="translate(600 440) rotate(${angle})">
        <rect x="-235" y="-170" width="470" height="340" rx="36" fill="#20242a" opacity="0.12" />
        <rect x="-250" y="-185" width="500" height="370" rx="44" fill="url(#device)" stroke="#ffffff" stroke-opacity="0.75" stroke-width="5" />
        <rect x="-205" y="-140" width="410" height="280" rx="28" fill="#ffffff" opacity="0.86" />
        <rect x="-165" y="-86" width="330" height="14" rx="7" fill="${theme.accent}" opacity="0.18" />
        <rect x="-165" y="-52" width="210" height="14" rx="7" fill="${theme.accent}" opacity="0.18" />
      </g>
      <text x="88" y="122" font-size="42" font-family="Segoe UI, sans-serif" fill="${theme.accent}" opacity="0.8">${subtitle}</text>
      <text x="88" y="820" font-size="72" font-weight="700" font-family="Segoe UI, sans-serif" fill="#111827">${title}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createGallery(name: string, subtitle: string, theme: ThemeName): string[] {
  return [12, -10, 5].map((angle, index) => createVisual(name, `${subtitle} / Shot ${index + 1}`, theme, angle));
}
