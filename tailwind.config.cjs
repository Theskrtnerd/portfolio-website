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
				'acc': {
					'50': '#eef2ff',
					'100': '#e0e7ff',
					'200': '#c7d2fe',
					'300': '#a5b3fc',
					'400': '#818bf8',
					'500': '#6466f1',
					'600': '#5046e5',
					'700': '#4438ca',
					'800': '#3830a3',
					'900': '#322e81',
					'950': '#1e1b4b',
				},			
				'reg': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#171717',
				},			
			}
		},
	},
	plugins: [],
}
