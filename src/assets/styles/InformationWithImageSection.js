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
    flex-direction: ${props.isImageRight ? 'column-reverse' : 'column'};
    padding: ${theme.spacing(4, 0)};
    ${theme.breakpoints.up('sm')} {
      padding: ${theme.spacing(5, 0)};
    }
    ${theme.breakpoints.up('lg')} {
      flex-direction: ${props.isImageRight ? 'row' : 'row-reverse'};
      padding: 0; 
    }
  `,
  title: css`
    color: ${theme.palette.primary.contrastText};
    text-align: center;
  `,
  description: css`
    padding: ${theme.spacing(4)}px 0 0 0;
    text-align: justify;
    color: ${theme.palette.text.primary};
  `,
  textPrimaryMain: css`
    color: ${theme.palette.primary.light};
  `,
  textBlack: css`
    color: '${theme.palette.text.primary}';
  `,

  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },

  containerImage: css`
    display: flex;
    justify-content: center;
    padding: ${props.isImageRight ? theme.spacing(4, 0, 0, 0) : theme.spacing(0, 0, 5, 0)};
    ${theme.breakpoints.up('sm')} {
      padding: ${props.isImageRight ? theme.spacing(5, 0, 0, 0) : theme.spacing(0, 0, 5, 0)};
    }
    ${theme.breakpoints.up('lg')} {
      flex: 5;
      padding: ${theme.spacing(8, 0)};
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
      flex: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 ${theme.spacing(2)}px 0 ${props.isImageRight ? 0 : theme.spacing(2)}px;
    }
  `,
});

export default styles;
