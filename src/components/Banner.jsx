// import {
//   makeStyles,
//   Container,
//   Box,
//   Grid,
//   Typography,
// } from '@material-ui/core';
// import Image from 'next/image';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'relative',
//     background: '#E1197E',
//     height: '585px',
//   },
//   figureRight: {
//     position: 'absolute',
//     top: '10%',
//     right: '0',
//   },
//   figureLeft: {
//     position: 'absolute',
//     bottom: '0',
//     left: '0',
//   },
//   content: {
//     position: 'absolute',
//     top: 0,
//   },
//   centerContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// }));
// const Banner = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.root} component="section">
//       <Box className={classes.figureRight} />
//       <Box className={classes.figureLeft} />

//       <Container fixed className={classes.content}>
//         <Grid container>
//           <Grid item md={7} sm={6} xs={12} className={classes.centerContent}>
//             <Typography variant="h1">
//               Programación de aplicaciones móviles iOS y Android
//             </Typography>
//             <Typography variant="body1">
//               Tus productos en el bolsillo de tus clientes
//             </Typography>
//           </Grid>
//           <Grid item md={5} sm={6} xs={12}>
//             <figure>
//               <Image
//                 src="/assets/images/desarrollo-aplicaciones-moviles-ios-android-ecuador.png"
//                 width={590}
//                 height={870}
//                 quality={100}
//               />
//             </figure>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Banner;
