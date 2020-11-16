import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(13),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    '& span': {
      color: theme.palette.primary.light,
    },
  },
  description: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  image: {
    paddingTop: theme.spacing(6),
  },
  button: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const ApplicationsAtYourFingertips = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container fixed className={classes.content}>
        <Box component="article" className={classes.content}>
          <Typography variant="h1" component="h1" className={classes.title}>
            El mundo de las
            <span> aplicaciones móviles </span>
            al alcance de tu mano
          </Typography>
          <Typography variant="body1" className={classes.description}>
            El futuro de las aplicaciones móviles para ti, te apoyamos durante
            todo el proceso
          </Typography>
        </Box>
        <Button variant="contained" className={classes.button}>
          CONTÁCTANOS
        </Button>
        <Box component="figure" className={classes.image}>
          <Image
            src="/assets/images/aplicaciones-moviles-al-alcance-de-tu-mano.png"
            width={500}
            height={550}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ApplicationsAtYourFingertips;
