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
				'accent': {
					'50': '#e9f4ff',
					'100': '#d7ecff',
					'200': '#b6d9ff',
					'300': '#8bbfff',
					'400': '#5d95ff',
					'500': '#386cff',
					'600': '#163fff',
					'700': '#0c33f6',
					'800': '#0e31d4',
					'900': '#15309a',
					'950': '#0c1a5a',
				},
			}
		},
	},
	plugins: [],
}
