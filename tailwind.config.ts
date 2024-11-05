import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	},
    	opacities: {
    		'5': '.05',
    		'10': '.10',
    		'20': '.20',
    		'40': '.40',
    		'60': '.60',
    		'80': '.80',
    		'100': '1'
    	},
    	sizes: {
    		'1': '0.25rem',
    		'2': '0.5rem',
    		'4': '1rem',
    		'6': '1.5rem',
    		'8': '2rem',
    		'16': '4rem',
    		'20': '5rem',
    		'24': '6rem',
    		'32': '8rem'
    	}
    },
    plugins: [require("tailwindcss-bg-patterns"), require("tailwindcss-animate")],
};
export default config;
