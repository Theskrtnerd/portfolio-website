/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['InterVariable', 'Inter', defaultTheme.fontFamily.sans],
				'body': ['Poppins', defaultTheme.fontFamily.sans],
				'font': ['Poppins', defaultTheme.fontFamily.sans],
      },
			backgroundImage: {
				'home': "url('/src/images/homeBackground.svg')"
			},
			colors: {
				'text': '#FFFFFF',
				'background': '#111111',
				'primary': '#83DCFF',
				'secondary': '#E7E7E7',
				'accent': '#0075FF',
				'azure-radiance': {
					'50': '#edfaff',
					'100': '#d6f1ff',
					'200': '#b5e9ff',
					'300': '#83dcff',
					'400': '#48c7ff',
					'500': '#1ea7ff',
					'600': '#0689ff',
					'700': '#0075ff',
					'800': '#0859c5',
					'900': '#0d4e9b',
					'950': '#0e305d',
				},
				'cod-gray': {
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
					'950': '#111111',
				},
			}
		},
	},
	plugins: [],
}
