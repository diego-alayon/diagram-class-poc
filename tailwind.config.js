/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        gray: {
          0: '#ffffff',
          50: '#f4f4f5',
          100: '#dbdce1',
          200: '#b8bcc6',
          300: '#999ead',
          400: '#5b637b',
          500: '#484e61',
          600: '#2c313f',
          700: '#21232c',
          800: '#181a20',
          900: '#0F1114',
        },
        yellow: {
          50: '#fcf4d6',
          100: '#fddc69',
          200: '#f1c21b',
          300: '#d2a106',
          400: '#b28600',
          500: '#8e6a00',
          600: '#684e00',
          700: '#483700',
          800: '#302400',
          900: '#0f1114',
        },
        blue: {
          50: '#edf5ff',
          100: '#d0e2ff',
          200: '#a6c8ff',
          300: '#78a9ff',
          400: '#4589ff',
          500: '#0f62fe',
          600: '#0043ce',
          700: '#002d9c',
          800: '#001d6c',
          900: '#001141',
        },
        green: {
          50: '#defbe6',
          100: '#a7f0ba',
          200: '#6fdc8c',
          300: '#42be65',
          400: '#24a148',
          500: '#198038',
          600: '#0e6027',
          700: '#044317',
          800: '#022d0d',
          900: '#071908',
        },
        orange: {
          50: '#fff2e8',
          100: '#ffd9be',
          200: '#ffb784',
          300: '#ff832b',
          400: '#eb6200',
          500: '#ba4e00',
          600: '#8a3800',
          700: '#5e2900',
          800: '#3e1a00',
          900: '#231000',
        },
        red: {
          50: '#fff1f1',
          100: '#ffd7d9',
          200: '#ffb3b8',
          300: '#ff8389',
          400: '#fa4d56',
          500: '#da1e28',
          600: '#a2191f',
          700: '#750e13',
          800: '#520408',
          900: '#2d0709',
        },
        purple: {
          50: '#f6f2ff',
          100: '#e8daff',
          200: '#d4bbff',
          300: '#be95ff',
          400: '#a56eff',
          500: '#8a3ffc',
          600: '#6929c4',
          700: '#491d8b',
          800: '#31135e',
          900: '#1c0f30',
        },
        magenta: {
          50: '#fff0f7',
          100: '#ffd6e8',
          200: '#ffafd2',
          300: '#ff7eb6',
          400: '#ee5396',
          500: '#d02670',
          600: '#9f1853',
          700: '#740937',
          800: '#510224',
          900: '#2a0a18',
        },
        teal: {
          50: '#d9fbfb',
          100: '#9ef0f0',
          200: '#3ddbd9',
          300: '#08bdba',
          400: '#009d9a',
          500: '#007d79',
          600: '#005d5d',
          700: '#004144',
          800: '#022b30',
          900: '#081a1c',
        },
      },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '400',
        },
        '.btn-blue': {
          backgroundColor: theme('colors.blue.500'),
          color: theme('colors.gray.0'),
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ],
};
