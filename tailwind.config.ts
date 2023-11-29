import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "header-image": "url('/Top%20Picture.jpg')",
        "cost-transparency": "url('/Cost%20Transparency.png')",
        "efficient-offer-process": "url('/Efficient%20Offer%20Process.png')",
        "financial-flexibility": "url('/Financial%20Flexibility.png')",
        "speedy-closings": "url('/Speedy%20Closings.png')",
        "middle": "url('/Middel%20image.jpg')",
        "footer-image": "url('/Footer%20image.jpg'), -webkit-linear-gradient(top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.9) 100% )"
      },
    },
  },
  plugins: [],
}
export default config
