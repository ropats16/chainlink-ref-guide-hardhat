import { color, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  config: {},
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
    }),
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2rem', md: '3.5rem' },
    },
    'heading-2': {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '1.75rem', md: '2.75rem' },
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold',
    },
  },
  mdx: {
    h1: {
      mt: '2rem',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: '1.875rem',
      letterSpacing: '-.025em',
    },
    h2: {
      mt: "1.5rem",
      lineHeight: 1.3,
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: "#1e40af", 
      py:"0.25em",
      letterSpacing: '-.025em',
      '& + h3': {
        mt: '1.5rem',
      }
    },
    h3: {
      mt: "1.25rem",
      lineHeight: 1.25,
      fontWeight: 'semibold',
      fontSize: '1.5rem',
      color: "#1d4ed8",
      py:"0.1em",
      letterSpacing: '-.025em',
    },
    h4: {
      mt: "0.75em",
      lineHeight: 1.375,
      fontWeight: 'semibold',
      fontSize: '1.125rem',
      color: "#2563eb",
      py:"0.05em",
    },
    a: {
      color: 'steelblue',
      textDecoration: "underline",
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'slategray',
      },
    },
    p: {
      mt: "0.75em",
      lineHeight: 1.7,
      'blockquote &': {
        mt: 0,
      },
    },
    hr: {
      my: '4rem',
    },
    blockquote: {
      bg: 'orange.100',
      borderWidth: '1px',
      borderColor: 'orange.200',
      rounded: 'lg',
      px: '1.25rem',
      py: '1rem',
      my: '1.5rem',
    },
    ul: {
      mt: '0.5rem',
      ml: '1.25rem',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '0.25rem',
      },
    },
    code: {
      bg: "gray:300",
      rounded: 'sm',
      px: "2em",
      fontSize: '0.875em',
      py: '2px',
      lineHeight: 'normal',
    },
  },
})

export default customTheme