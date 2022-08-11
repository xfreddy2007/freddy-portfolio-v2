/** @type {import('tailwindcss').Config} */

/* eslint-disable no-param-reassign */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require('@tailwindcss/aspect-ratio'),
    // https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin
    plugin(({ addUtilities, matchUtilities, addComponents, addVariant, e }) => {
      addComponents({
        // fonts
        '.font-robot': { 'font-family': "'Roboto', 'Helvetica Neue', Arial, sans-serif" },
        '.font-arial': { 'font-family': 'Arial, Helvetica, sans-serif' },
        '.font-raleway': { 'font-family': "'Raleway', 'Helvetica Neue', Arial, sans-serif" },
        '.font-source-code': { 'font-family': "'Source Code Pro', monospace, sans-serif" },

        // dark mode transition
        '.dark-transition': {
          'transition-property': 'all',
          'transition-duration': '0.2s',
        },

        // fonts size
        '.h1': {
          'font-size': '1.875rem',
          'line-height': '2.25rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '3rem',
            'line-height': '1',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '4.5rem',
          },
        },
        '.h2': {
          'font-size': '1.5rem',
          'line-height': '2rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '2.25rem',
            'line-height': '2.5rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '3.75rem',
            'line-height': '1',
          },
        },
        '.h3': {
          'font-size': '1.25rem',
          'line-height': '1.75rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '1.875rem',
            'line-height': '2.25rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '3rem',
            'line-height': '1',
          },
        },
        '.h4': {
          'font-size': '1.125rem',
          'line-height': '1.75rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '1.5rem',
            'line-height': '2rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '2.25rem',
            'line-height': '2.5rem',
          },
        },
        '.h5': {
          'font-size': '1rem',
          'line-height': '1.5rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '1.25rem',
            'line-height': '1.75rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '1.875rem',
            'line-height': '2.25rem',
          },
        },
        '.p': {
          'font-size': '0.75rem',
          'line-height': '1rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '0.875rem',
            'line-height': '1.25rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '1rem',
            'line-height': '1.5rem',
          },
        },
        '.ul': {
          'font-size': '0.75rem',
          'line-height': '1rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '0.875rem',
            'line-height': '1.25rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '1rem',
            'line-height': '1.5rem',
          },
        },
        '.ol': {
          'font-size': '0.75rem',
          'line-height': '1rem',
          '@media screen and (min-width: 768px)': {
            'font-size': '0.875rem',
            'line-height': '1.25rem',
          },
          '@media screen and (min-width: 1280px)': {
            'font-size': '1rem',
            'line-height': '1.5rem',
          },
        },
      });

      // add data-active attribute css style
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`data-active${separator}${className}`)}[data-active="true"]`);
      });
    }),
  ],
};
