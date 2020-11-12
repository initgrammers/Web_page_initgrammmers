import {
  makeStyles,
  Box,
  Container,
  Button,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  description: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  image: {
    paddingTop: theme.spacing(6),
  },
}));

const ApplicationsAtYourFingertips = () => {
  const classes = useStyles();
  return (
    <Box component="section" py={8}>
      <Container fixed className={classes.content}>
        <Box component="article" className={classes.content}>
          <Typography variant="h2" className={classes.title}>
            El mundo de las aplicaciones móviles al alcance de tu mano
          </Typography>
          <Typography variant="body1" className={classes.description}>
            El futuro de las aplicaciones móviles para ti, te apoyamos durante
            todo el proceso
          </Typography>
        </Box>
        <Button variant="contained">CONTÁCTANOS</Button>
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
