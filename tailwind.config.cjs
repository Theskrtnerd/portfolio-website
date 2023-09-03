/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['Poppins', 'sans-serif' ,defaultTheme.fontFamily.sans],
      },
			backgroundImage: {
				'home': "url('/src/images/homeBackground.svg')"
			},
			colors: {
				'text': '#f8fafc',
				'background': '#131526',
				'primary': '#74f8ff',
				'secondary': '#ebf1ff',
				'accent': '#0e82f6',
			}
		},
	},
	plugins: [],
}
