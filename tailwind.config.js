const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
          200: '#fde68a',
        },
        brand: {
          primary: {
            DEFAULT: 'var(--color-brand-primary)',
            hover: 'var(--color-brand-primary-hover)',
          },
          secondary: 'var(--color-brand-secondary)',
        },
        surface: {
          default: 'var(--color-surface-default)',
          subdued: 'var(--color-surface-subdued)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        feedback: {
          success: 'var(--color-feedback-success)',
          error: 'var(--color-feedback-error)',
        },
        border: {
          default: 'var(--color-border-default)',
          subdued: 'var(--color-border-subdued)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
        },
        "brand-1": "hsl(var(--color-1))",
        "brand-2": "hsl(var(--color-2))",
        "brand-3": "hsl(var(--color-3))",
        "brand-4": "hsl(var(--color-4))",
        "brand-5": "hsl(var(--color-5))",
      },
      borderRadius: {
        input: 'var(--radius-input)',
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        badge: 'var(--radius-badge)',
      },
      boxShadow: {
        'card-resting': 'var(--shadow-card-resting)',
        'card-hover': 'var(--shadow-card-hover)',
        'btn-primary': 'var(--shadow-btn-primary)',
        'btn-primary-hover': 'var(--shadow-btn-primary-hover)',
      },
      fontSize: {
        'display-hero': ['var(--font-size-display-hero)', { 
          lineHeight: 'var(--line-height-display-hero)', 
          letterSpacing: 'var(--letter-spacing-display-hero)', 
          fontWeight: 'var(--font-weight-display-hero)' 
        }],
        'heading-section': ['var(--font-size-heading-section)', { 
          lineHeight: 'var(--line-height-heading-section)', 
          fontWeight: 'var(--font-weight-heading-section)' 
        }],
        'heading-subtitle': ['var(--font-size-heading-subtitle)', { 
          lineHeight: 'var(--line-height-heading-subtitle)', 
          fontWeight: 'var(--font-weight-heading-subtitle)' 
        }],
        'body-description': ['var(--font-size-body-description)', { 
          lineHeight: 'var(--line-height-body-description)', 
          fontWeight: 'var(--font-weight-body-description)' 
        }],
        'body-base': ['var(--font-size-body-base)', { 
          lineHeight: 'var(--line-height-body-base)', 
          fontWeight: 'var(--font-weight-body-base)' 
        }],
        'body-label': ['var(--font-size-body-label)', { 
          lineHeight: 'var(--line-height-body-label)', 
          fontWeight: 'var(--font-weight-body-label)' 
        }],
        'body-badge': ['var(--font-size-body-badge)', { 
          lineHeight: 'var(--line-height-body-badge)', 
          fontWeight: 'var(--font-weight-body-badge)' 
        }],
      },
      keyframes: {
        "gradient-border": {
          "0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
          "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
          "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
          "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
        },
        "gradient-1": {
          "0%, 100%": { top: "0", right: "0" },
          "50%": { top: "50%", right: "25%" },
          "75%": { top: "25%", right: "50%" },
        },
        "gradient-2": {
          "0%, 100%": { top: "0", left: "0" },
          "60%": { top: "75%", left: "25%" },
          "85%": { top: "50%", left: "50%" },
        },
        "gradient-3": {
          "0%, 100%": { bottom: "0", left: "0" },
          "40%": { bottom: "50%", left: "25%" },
          "65%": { bottom: "25%", left: "50%" },
        },
        "gradient-4": {
          "0%, 100%": { bottom: "0", right: "0" },
          "50%": { bottom: "25%", right: "40%" },
          "90%": { bottom: "50%", right: "25%" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "gradient-border": "gradient-border 6s ease-in-out infinite",
        "gradient-1": "gradient-1 12s ease-in-out infinite alternate",
        "gradient-2": "gradient-2 12s ease-in-out infinite alternate",
        "gradient-3": "gradient-3 12s ease-in-out infinite alternate",
        "gradient-4": "gradient-4 12s ease-in-out infinite alternate",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
