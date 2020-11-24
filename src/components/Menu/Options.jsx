import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const Service = ({ title, subtitle, href }) => (
  <Box display="flex">
    <Box mr={1} width={24} height={24} bgcolor="gray" />
    <Box>
      <Link
        component="h6"
        variant="caption"
        href={href}
        style={{ cursor: 'pointer', textDecoration: 'none' }}
      >
        {title}
      </Link>
      <Typography variant="caption" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

const data = [
  {
    title: 'Comercio digital',
    subtitle: 'Venda a través de internet',
    href: '#',
  },
  {
    title: 'Desarrollo de aplicaciones móviles',
    subtitle: 'Android, iOS, híbridas',
    href: '#',
  },
  {
    title: 'Desarrollo Web',
    subtitle: 'Android, iOs, híbridas',
    href: '#',
  },
  {
    title: 'Diseño UX UI',
    subtitle: 'Venda a través de internet',
    href: '#',
  },
  {
    title: 'Capacitaciones',
    subtitle: 'Aprende con nosotros',
    href: '#',
  },
  {
    title: 'Diseño publicitario',
    subtitle: 'Aprende con nosotros',
    href: '#',
  },
  {
    title: 'Marketing digital',
    subtitle: 'Posicione su marca',
    href: '#',
  },
  {
    title: 'SEO',
    subtitle: 'Posicionamiento en buscadores',
    href: '#',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: 392,
      padding: theme.spacing(7, 10),
    },
  },
}));

const Options = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography color="textPrimary" gutterBottom>
        Servicios que ofrecemos
      </Typography>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <Service {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Options;
