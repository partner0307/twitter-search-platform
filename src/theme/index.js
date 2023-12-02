import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      spacing: 16,
      typography: {
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
        h1: {
          fontWeight: 700,
          fontSize: '3.375rem',
        },
        h2: {
          fontWeight: 700,
          fontSize: '3rem',
        },
        h3: {
          fontWeight: 700,
          fontSize: '2.25rem',
        },
        h4: {
          fontWeight: 700,
          fontSize: '2rem',
        },
        h5: {
          fontWeight: 700,
          fontSize: '1.5rem',
        },
        h6: {
          fontWeight: 700,
          fontSize: '1.25rem'
        },
        subtitle1: {
          fontSize: '1.125rem'
        },
        subtitle2: {
          fontSize: '1rem'
        },
        body1: {
          fontSize: '0.875rem'
        },
        caption: {
          fontSize: '0.75rem'
        }
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '0.875rem',
              fontWeight: 500,
              borderRadius: '0.3125rem',
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedPrimary: {
              color: 'white',
              background: light.common.black,
              '&:hover': {
                background: light.secondary.main
              }
            },
            outlinedPrimary: {
              color: light.common.black,
              borderColor: light.common.black
            }
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 769,
          md: 1025,
          lg: 1201,
          xl: 1441
        }
      },
      themeToggler,
    }),
  );

export default getTheme;
