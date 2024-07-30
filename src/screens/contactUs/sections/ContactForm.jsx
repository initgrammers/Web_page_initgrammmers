import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';
import ContactUsButton from '#Components/ContacUsButton';
import { primary } from '#app/shared/config/theme/colors';
import styles from '../styles/ContactForm.js';
import { contactsLinks, textContactUsButton } from '#app/constants/contacts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({
  backgroundImage = '',
  heightImage = 0,
  title = '',
  description = '',
  image = '',
}) => {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    telefono: Yup.string().required('El teléfono es requerido'),
    mensaje: Yup.string().required('El mensaje es requerido'),
  });
  return (
    <Box
      component="section"
      position="relative"
      sx={{ background: primary.light, paddingY: 5 }}
    >
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          width="100%"
          gap={3}
        >
          <Box display='flex' justifyContent='center'>
            <Typography variant="h3" sx={styles.title}>
              Déjanos tu contacto
            </Typography>
          </Box>
          <Box>
            <Formik
              initialValues={{
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                mensaje: '',
              }}
              // validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                  >
                    <Field
                      name="nombre"
                      as={TextField}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      error={touched.nombre && Boolean(errors.nombre)}
                      helperText={touched.nombre && errors.nombre}
                    />
                    <Field
                      name="apellido"
                      as={TextField}
                      label="Apellido"
                      variant="outlined"
                      fullWidth
                      error={touched.apellido && Boolean(errors.apellido)}
                      helperText={touched.apellido && errors.apellido}
                    />
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <Field
                      name="telefono"
                      as={TextField}
                      label="Teléfono"
                      variant="outlined"
                      fullWidth
                      error={touched.telefono && Boolean(errors.telefono)}
                      helperText={touched.telefono && errors.telefono}
                    />
                    <Field
                      name="mensaje"
                      as={TextField}
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      error={touched.mensaje && Boolean(errors.mensaje)}
                      helperText={touched.mensaje && errors.mensaje}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color='secondary'
                      sx={{ alignSelf: 'center', width: '200px' }}
                    >
                      Enviar
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default ContactForm;
