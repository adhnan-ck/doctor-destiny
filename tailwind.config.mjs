/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            'primary': '#0E0C4F', // Deep Midnight Blue
            'secondary': '#FFFFFF', // Clinical White
            'accent': '#D5AD36', // Shimmering Metallic Gold
            'highlight': '#00BFFF', // Electric Cyan-Blue
            'clinical-white': '#ffffff',
            'deep-slate': '#0E0C4F', // Mapping old to new primary for consistency
            'trust-blue': '#00BFFF', // Mapping old blue to new highlight
            'shimmering-gold': '#D5AD36',
            'medical-green': '#10b981', // Success
            'soft-gray': '#f8fafc',
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'float': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
}
