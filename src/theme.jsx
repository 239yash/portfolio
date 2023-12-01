import {extendTheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      // bg: mode('#f0e7db', '#202023')(props),
      bg: mode('#000', '#000')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      // color: mode('#6fcb9f', '#6fcb9f')(props),
      color: mode('#fff', '#fff')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  grassTeal: '#3d3d3d',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({config, styles, components, colors});
export default theme;
