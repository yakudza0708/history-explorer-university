
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Добавление новых футуристичных цветов
				neon: {
					blue: '#4CFFEC',
					purple: '#B026FF',
					pink: '#FF26B0',
					yellow: '#FFEC4C',
					green: '#26FF91',
				},
				futuristic: {
					dark: '#0A0A1B',
					'dark-blue': '#0D1130',
					'light-blue': '#E6FFFA',
					'cyber-purple': '#6B46C1',
					'cyber-pink': '#D53F8C',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				'blob': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				'gradient-x': {
					'0%, 100%': { 
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'shimmer': {
					'0%': { 'background-position': '-1000px 0' },
					'100%': { 'background-position': '1000px 0' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'scroll-down': {
					'0%, 100%': { transform: 'translateY(-20%)' },
					'50%': { transform: 'translateY(20%)' }
				},
				'glow': {
					'0%, 100%': { 
						'box-shadow': '0 0 5px rgba(80, 200, 255, 0.3), 0 0 15px rgba(80, 200, 255, 0.3), 0 0 25px rgba(80, 200, 255, 0.3)'
					},
					'50%': { 
						'box-shadow': '0 0 10px rgba(80, 200, 255, 0.5), 0 0 25px rgba(80, 200, 255, 0.5), 0 0 40px rgba(80, 200, 255, 0.5)'
					}
				},
				'neon-pulse': {
					'0%, 100%': { 
						'box-shadow': '0 0 5px rgba(76, 255, 236, 0.7), 0 0 10px rgba(76, 255, 236, 0.5), 0 0 15px rgba(76, 255, 236, 0.3)'
					},
					'50%': { 
						'box-shadow': '0 0 10px rgba(76, 255, 236, 0.9), 0 0 20px rgba(76, 255, 236, 0.7), 0 0 30px rgba(76, 255, 236, 0.5)'
					}
				},
				'text-shimmer': {
					'0%': { 
						'background-position': '-100% 0'
					},
					'100%': { 
						'background-position': '200% 0'
					}
				},
				'cyberpunk-glitch': {
					'0%, 100%': { 
						'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
					},
					'5%, 95%': { 
						'clip-path': 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
					},
					'10%, 90%': { 
						'clip-path': 'polygon(5% 0, 95% 5%, 100% 95%, 5% 95%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'blob': 'blob 7s infinite',
				'gradient-x': 'gradient-x 10s ease infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'marquee': 'marquee 25s linear infinite',
				'scroll-down': 'scroll-down 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
				'cyberpunk-glitch': 'cyberpunk-glitch 5s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
				'hero-pattern': 'url("/hero-pattern.svg")',
				'grid-white': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.05)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
				'grid-black': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.05)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
				'futuristic-grid': 'linear-gradient(to right, rgba(76, 255, 236, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(76, 255, 236, 0.15) 1px, transparent 1px)',
				'cyber-overlay': 'linear-gradient(120deg, rgba(10, 10, 27, 0.8) 0%, rgba(13, 17, 48, 0.7) 100%)',
				'neon-lines': 'repeating-linear-gradient(90deg, rgba(76, 255, 236, 0.15) 0px, rgba(76, 255, 236, 0.15) 1px, transparent 1px, transparent 30px)',
				'tech-dots': 'radial-gradient(circle, rgba(76, 255, 236, 0.2) 1px, transparent 1px)',
				'tech-circuit': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M10 10L90 10M10 10L10 90\' stroke=\'rgba(76, 255, 236, 0.15)\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")'
			},
			boxShadow: {
				'neon-blue': '0 0 5px #4CFFEC, 0 0 10px #4CFFEC, 0 0 15px #4CFFEC',
				'neon-purple': '0 0 5px #B026FF, 0 0 10px #B026FF, 0 0 15px #B026FF',
				'neon-pink': '0 0 5px #FF26B0, 0 0 10px #FF26B0, 0 0 15px #FF26B0',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
