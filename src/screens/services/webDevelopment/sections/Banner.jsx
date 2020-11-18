import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  detailsContent: {
    paddingTop: theme.spacing(8),
  },
  title: {
    color: theme.palette.primary.light,
    '& span': {
      color: theme.palette.secondary.light,
    },
  },
  description: {
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.common.black,
  },
  actionButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing(4)}px 0`,
  },
  image: {
    width: 288,
    height: 235,
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    detailsContent: {
      paddingTop: theme.spacing(12),
    },
    containerImage: {
      margin: `${theme.spacing(5)}px 0`,
    },
    image: {
      width: 544,
      height: 449,
    },
  },
  [theme.breakpoints.up('md')]: {
    container: {
      padding: `0 ${theme.spacing(23)}px`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      display: 'flex',
      padding: `0 ${theme.spacing(13)}px`,
    },
    detailsContent: {
      flex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
      paddingRight: theme.spacing(2),
    },
    containerImage: {
      flex: 5,
      margin: `${theme.spacing(16)}px 0`,
    },
    image: {
      width: 504,
      height: 353,
    },
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Container fixed className={classes.container}>
        <Box component="article" className={classes.detailsContent}>
          <Typography variant="h1" className={classes.title}>
            Páginas Web,
            <span> diseño y desarrollo de aplicaciones web </span>
            en Ecuador
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className={classes.description}
          >
            Bienvenidos al mundo del internet
          </Typography>
          <Box>
            <Button variant="contained" className={classes.actionButton}>
              Contáctanos
            </Button>
          </Box>
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image
              quality={100}
              priority
              src="/assets/images/paginas-web-desarrollo-diseno-aplicaciones-web-ecuador.png"
              layout="fill"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
