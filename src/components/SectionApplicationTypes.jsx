import { makeStyles, Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ApplicationType from './ApplicationType';

const useStyles = makeStyles((theme) => ({
  mainSection: {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(8),
  },
  detailsContent: {
    paddingTop: theme.spacing(6),
  },
  title: {
    textAlign: 'center',
  },
  applicationType: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  containerImage: {
    position: 'relative',
    overflow: 'hidden',
    bottom: `-${theme.spacing(8)}px`,
    left: theme.spacing(2),
  },
  image: {
    width: 504,
    height: 607,
    position: 'relative',
  },
  [theme.breakpoints.up('sm')]: {
    containerImage: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      width: 547,
      height: 659,
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
    },
    containerImage: {
      flex: 5,
    },
    image: {
      width: 504,
      height: 607,
    },
  },
}));

const SectionApplicationTypes = ({ sectionTitle, typesApplication }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Container fixed className={classes.container}>
        <Box className={classes.detailsContent}>
          <ApplicationType
            sectionTitle={sectionTitle}
            typesApplication={typesApplication}
          />
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image
              quality={100}
              priority
              src="/assets/images/tipos-aplicaciones-moviles.png"
              layout="fill"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

SectionApplicationTypes.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  typesApplication: PropTypes.array.isRequired,
};

export default SectionApplicationTypes;
