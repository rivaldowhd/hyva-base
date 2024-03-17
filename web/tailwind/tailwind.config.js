const {
  spacing
} = require('tailwindcss/defaultTheme');

const defaultColors = require('tailwindcss/colors');
const myCustomColors = {
    blue: {
        '50': '#f0f7ff',
        '100': '#dfedff',
        '200': '#b9dcfe',
        '300': '#7bc1fe',
        '400': '#34a1fc',
        '500': '#0a86ed',
        '600': '#0067cb',
        '700': '#0055aa', /* Main Btn Blue */
        '800': '#054787',
        '900': '#0a3b70',
        '950': '#07254a',
    },
    logo_blue: {
        '50': '#f0f6fe',
        '100': '#deebfb',
        '200': '#c4def9',
        '300': '#94c4f4', /* CC Logo Blue */
        '400': '#6caaee',
        '500': '#4a8ae7',
        '600': '#346edc',
        '700': '#2c59c9',
        '800': '#2949a4',
        '900': '#264182',
        '950': '#1c294f',
    },
    red: {
        '50': '#ffefef',
        '100': '#ffdcdc',
        '200': '#ffbfbf',
        '300': '#ff9292',
        '400': '#ff5454',
        '500': '#ff1f1f',
        '600': '#ff0000',
        '700': '#db0000',
        '800': '#c20000', /* CTA Btn Red */
        '900': '#940808',
        '950': '#520000',
    },
}
const colors = {
    ...defaultColors,
    ...myCustomColors
};

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px' // => @media (min-width: 1536px) { ... }

      },
      fontFamily: {
        sans: ["system-ui","-apple-system","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","Liberation Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"]
      },
      colors: {
        ...myCustomColors,
        primary: {
          lighter: colors.logo_blue['200'],
          "DEFAULT": colors.logo_blue['300'],
          darker: colors.logo_blue['500']
        },
        secondary: {
          lighter: colors.blue['300'],
          "DEFAULT": colors.blue['700'],
          darker: colors.blue['800']
        },
        background: {
          lighter: colors.logo_blue['100'],
          "DEFAULT": colors.logo_blue['300'],
          darker: colors.logo_blue['500']
        },

      },
      textColor: {
        orange: colors.orange,
        red: { ...colors.red,
          "DEFAULT": colors.red['800']
        },
        primary: {
          lighter: colors.gray['700'],
          "DEFAULT": colors.gray['800'],
          darker: colors.gray['900']
        },
        secondary: {
          lighter: colors.gray['400'],
          "DEFAULT": colors.gray['600'],
          darker: colors.gray['800']
        }
      },
      backgroundColor: {
        primary: {
          lighter: colors.logo_blue['200'],
          "DEFAULT": colors.logo_blue['300'],
          darker: colors.logo_blue['500']
        },
        secondary: {
          lighter: colors.blue['300'],
          "DEFAULT": colors.blue['700'],
          darker: colors.blue['900']
        },
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#fafafa',
          darker: '#f5f5f5'
        }
      },
      borderColor: {
        primary: {
          lighter: colors.logo_blue['200'],
          "DEFAULT": colors.logo_blue['300'],
          darker: colors.logo_blue['500']
        },
        secondary: {
          lighter: colors.blue['300'],
          "DEFAULT": colors.blue['700'],
          darker: colors.blue['900']
        },
        container: {
          lighter: '#f5f5f5',
          "DEFAULT": '#e7e7e7',
          darker: '#b6b6b6'
        }
      },
      minWidth: {
        8: spacing["8"],
        20: spacing["20"],
        40: spacing["40"],
        48: spacing["48"]
      },
      minHeight: {
        14: spacing["14"],
        a11y: '44px',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        '0': '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
          sm: '0.75rem',
          md: '0.75rem',
          lg: '0.75rem', /* padding takes effects ONLY container.screens.lg is NOT 100% */
          xl: '1.5rem',
          '2xl': '1.5rem',
        },
        screens: {
          DEFAULT: '100%',
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1280px',
          '2xl': '1536px',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    //'../../../../../../../app/code/**/*.phtml',
  ]
});
