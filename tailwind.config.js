/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": withOpacity("--color-primary"),
        "on-primary": withOpacity("--color-on-primary"),
        "secondary": withOpacity("--color-secondary"),
        "background": withOpacity("--color-background"),
        "on-background": withOpacity("--color-on-background"),
        "surface": withOpacity("--color-surface"),
        "on-surface": withOpacity("--color-on-surface"),
        "surface-variant": withOpacity("--color-surface-variant"),
        "surface-container": withOpacity("--color-surface-container"),
        "surface-container-low": withOpacity("--color-surface-container-low"),
        "surface-container-high": withOpacity("--color-surface-container-high"),
        "outline": withOpacity("--color-outline"),
        "accent": withOpacity("--color-accent")
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "80px",
        "safe-margin": "24px",
        "meta-gap": "8px",
        "stack-gap": "24px",
        "container-max-width": "680px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      fontSize: {
        "display": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "display-mobile": ["36px", {"lineHeight": "1.15", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-lg": ["19px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "meta": ["14px", {"lineHeight": "1.4", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "600"}]
      },
      animation: {
        'marquee': 'marquee 50s linear 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
