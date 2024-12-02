import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			current: 'currentColor',
  			transparent: 'transparent',
  			white: '#FFFFFF',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			stroke: '#E6EBF1',
  			'stroke-dark': '#27303E',
  			dark: {
  				'2': '#1F2A37',
  				'3': '#374151',
  				'4': '#4B5563',
  				'5': '#6B7280',
  				'6': '#9CA3AF',
  				'7': '#D1D5DB',
  				'8': '#E5E7EB',
  				DEFAULT: '#111928'
  			},
  			gray: {
  				'1': '#F9FAFB',
  				'2': '#F3F4F6',
  				'3': '#E5E7EB',
  				'4': '#D1D5DB',
  				'5': '#9CA3AF',
  				'6': '#6B7280',
  				'7': '#374151',
  				DEFAULT: '#EFF4FB',
  				dark: '#122031'
  			},
  			green: {
  				DEFAULT: '#22AD5C',
  				dark: '#1A8245',
  				light: {
  					'1': '#10B981',
  					'2': '#57DE8F',
  					'3': '#82E6AC',
  					'4': '#ACEFC8',
  					'5': '#C2F3D6',
  					'6': '#DAF8E6',
  					'7': '#E9FBF0',
  					DEFAULT: '#2CD673'
  				}
  			},
  			red: {
  				DEFAULT: '#F23030',
  				dark: '#E10E0E',
  				light: {
  					'2': '#F89090',
  					'3': '#FBC0C0',
  					'4': '#FDD8D8',
  					'5': '#FEEBEB',
  					'6': '#FEF3F3',
  					DEFAULT: '#F56060'
  				}
  			},
  			blue: {
  				DEFAULT: '#3C50E0',
  				dark: '#1C3FB7',
  				light: {
  					'2': '#8099EC',
  					'3': '#ADBCF2',
  					'4': '#C3CEF6',
  					'5': '#E1E8FF',
  					DEFAULT: '#5475E5'
  				}
  			},
  			orange: {
  				light: {
  					DEFAULT: '#F59460'
  				}
  			},
  			yellow: {
  				dark: {
  					'2': '#D97706',
  					DEFAULT: '#F59E0B'
  				},
  				light: {
  					'4': '#FFFBEB',
  					DEFAULT: '#FCD34D'
  				}
  			},
  			'teal-blue': {
  				'50': '#E4F6FA',
  				'100': '#C9EDF5',
  				'200': '#95DAEB',
  				'300': '#61C8E1',
  				'400': '#3AB0D4',
  				'500': '#319FBE',
  				'600': '#2B8EA9',
  				'700': '#257C91',
  				'800': '#1F6979',
  				'900': '#144951'
  			},
  			'greenish-teal': {
  				'50': '#E3F8FA',
  				'100': '#C7F1F5',
  				'200': '#8FE3EA',
  				'300': '#56D6E0',
  				'400': '#2DC1CC',
  				'500': '#0D95A1',
  				'600': '#0B838F',
  				'700': '#096F79',
  				'800': '#075A62',
  				'900': '#053F45'
  			},
  			'deep-blue': {
  				'50': '#E8F2F8',
  				'100': '#D1E4F2',
  				'200': '#A4C9E5',
  				'300': '#76ADD9',
  				'400': '#4B93CF',
  				'500': '#1C5E86',
  				'600': '#194D6C',
  				'700': '#153E55',
  				'800': '#112F40',
  				'900': '#0D2130'
  			},
  			'red-accent': {
  				'50': '#FCE6EB',
  				'100': '#F9CED7',
  				'200': '#F199AD',
  				'300': '#EA6583',
  				'400': '#E33B5F',
  				'500': '#BB0E3D',
  				'600': '#9E0C34',
  				'700': '#7E092A',
  				'800': '#5F0620',
  				'900': '#3F0415'
  			},
  			'gold-yellow': {
  				'50': '#FFF9E5',
  				'100': '#FFF2CC',
  				'200': '#FFE599',
  				'300': '#FFD766',
  				'400': '#FFCB33',
  				'500': '#FFBF17',
  				'600': '#E6AC15',
  				'700': '#B38910',
  				'800': '#80660C',
  				'900': '#4D4207'
  			},
  			'mint-green': {
  				'50': '#E9F8F4',
  				'100': '#D3F1E9',
  				'200': '#A7E4D2',
  				'300': '#7AD6BB',
  				'400': '#4FC8A3',
  				'500': '#2DC799',
  				'600': '#27AF86',
  				'700': '#209272',
  				'800': '#19745D',
  				'900': '#105041'
  			},
  			'vibrant-orange': {
  				'50': '#FFECE5',
  				'100': '#FFD9CC',
  				'200': '#FFB399',
  				'300': '#FF8C66',
  				'400': '#FF6633',
  				'500': '#FF5F00',
  				'600': '#E65500',
  				'700': '#B34300',
  				'800': '#802F00',
  				'900': '#4D1C00'
  			},
  			'neutral-gray': {
  				'50': '#FAFAFA',
  				'100': '#F5F5F5',
  				'200': '#EAEAEA',
  				'300': '#D6D6D6',
  				'400': '#BFBFBF',
  				'500': '#A5A5A5',
  				'600': '#8A8A8A',
  				'700': '#6B6B6B',
  				'800': '#4A4A4A',
  				'900': '#292929'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
