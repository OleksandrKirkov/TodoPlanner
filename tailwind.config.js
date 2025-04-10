/** @type {import('tailwindcss').Config} */
/** @type {DefaultColors} */

import colors from './src/constants/color.constants'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors,
        }
    },
    plugins: []
}
