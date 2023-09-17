/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter var', defaultTheme.fontFamily.sans],
      },
			backgroundImage: {
				'home': "url('/src/images/homeBackground.svg')"
			},
			colors: {
				'acc' : { 200: '#b8c5ff', 600: '#4d48f8', 900: '#232670', 950: '#191e4b' },
				'gra' : { 100: '#f6f5fb', 200: '#eeecf8', 300: '#c2c0ce', 400: '#8b88a2', 500: '#58546c', 700: '#38354b', 800: '#272338', 900: '#181720' },
			}
		},
	},
	plugins: [],
}
