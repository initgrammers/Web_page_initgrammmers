// styles.js
import { css } from '@mui/material/styles';
import theme from '../../shared/config/MuiThemeProvider/theme';
import { primary, secondary } from '#app/shared/config/theme/colors';

const styles = (props) => ({
  backgroundPrimaryLight: css`
    background-color: ${theme.palette.primary.light};
  `,
  backgroundSecondaryMain: css`
    background-color: ${theme.palette.secondary.main};
  `,
  backgroundSecondaryFade: css`
    background-color: ${theme.palette.secondary.fade};
  `,
  backgroundPrimaryFade: css`
    background-color: ${theme.palette.primary.fade};
  `,

  container: css`
    display: flex;
    flex-direction: ${props.isImageRight ? 'column-reverse' : 'column'}; /* Cambia el orden si la imagen está a la derecha */
    padding: ${theme.spacing(4, 0)}; /* Espacio vertical y horizontal */
    ${theme.breakpoints.up('sm')} {
      padding: ${theme.spacing(5, 0)}; /* Ajusta el espacio en pantallas más grandes */
    }
    ${theme.breakpoints.up('lg')} {
      flex-direction: ${props.isImageRight ? 'row' : 'row-reverse'}; /* Cambia a fila en pantallas grandes */
      padding: 0; 
    }
  `,
  title: css`
    color: ${theme.palette.primary.contrastText}; /* Color de texto contrastante */
    text-align: center;
  `,
  description: css`
    padding: ${theme.spacing(4)}px 0 0 0; /* Espacio superior */
    text-align: justify;
    color: ${theme.palette.primary.contrastText};
  `,
  textPrimaryMain: css`
    color: ${theme.palette.primary.main}; /* Color primario principal */
  `,
  textBlack: css`
    color: '${theme.palette.text.primary}'; /* Color de texto primario */
  `,

  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },

  containerImage: css`
    display: flex;
    justify-content: center; /* Centra la imagen horizontalmente */
    padding: ${props.isImageRight ? theme.spacing(4, 0, 0, 0) : theme.spacing(0, 0, 5, 0)};
    ${theme.breakpoints.up('sm')} {
      padding: ${props.isImageRight ? theme.spacing(5, 0, 0, 0) : theme.spacing(0, 0, 5, 0)};
    }
    ${theme.breakpoints.up('lg')} {
      flex: 5; /* Ocupa 5 partes del espacio disponible */
      padding: ${theme.spacing(8, 0)}; /* Ajusta el espacio en pantallas grandes */
    }
  `,
  image: css`
    width: ${props.imageSizes.xs.width}px;
    height: ${props.imageSizes.xs.height}px;
    position: relative;

    ${theme.breakpoints.up('sm')} {
      width: ${props.imageSizes.sm.width}px;
      height: ${props.imageSizes.sm.height}px;
    }
    ${theme.breakpoints.up('md')} {
      width: ${props.imageSizes.md.width}px;
      height: ${props.imageSizes.md.height}px;
    }
    ${theme.breakpoints.up('lg')} {
      width: ${props.imageSizes.lg.width}px;
      height: ${props.imageSizes.lg.height}px;
    }
  `,
  detailsContent: css`
    ${theme.breakpoints.up('lg')} {
      flex: 5; /* Ocupa 5 partes del espacio disponible */
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 ${theme.spacing(2)}px 0 ${props.isImageRight ? 0 : theme.spacing(2)}px; /* Ajusta el espacio a la derecha o izquierda según la posición de la imagen */
    }
  `,
});

export default styles;
