import { Box, Button, styled, TextField, Typography } from '@mui/material';
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
import emailjs from '@emailjs/browser';

const ContactForm = ({
  image = 'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/soporte-adicional-sin-costo.png',
}) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    lastname: Yup.string().required('El apellido es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    message: Yup.string().required('El mensaje es requerido'),
  });

  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& .MuiInputBase-input': {
        color: 'white',
      },
      '&.MuiInputBase-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
    '& label': {
      color: 'white',
      '&.Mui-error': {
        color: 'white',
      },
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: 'white',
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    const serviceId = 'service_l4swl99';
    const templateId = 'template_wiee0tc';
    const publicKey = 'g-ojnw_r-R4fterOM';

    const templateParams = {
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        resetForm();
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      });
  };

  return (
    <Box
      component="section"
      position="relative"
      sx={{ background: primary.light, paddingY: {lg: 0, xs: 3, md:3} }}
    >
      <CustomContainer>
        <Box
          display="flex"
          flexDirection="row-reverse"
          gap={3}
          justifyContent="center"
          alignContent="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
            width={{ xs: 468, lg: 504 }}
            gap={3}
            flex={1}
          >
            <Box display="flex" justifyContent="center">
              <Typography variant="h3" sx={styles.title}>
                Déjanos tu contacto
              </Typography>
            </Box>
            <Box>
              <Formik
                initialValues={{
                  name: '',
                  lastname: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                      <Field
                        name="name"
                        as={StyledTextField}
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                      <Field
                        name="lastname"
                        as={StyledTextField}
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        error={touched.lastname && Boolean(errors.lastname)}
                        helperText={touched.lastname && errors.lastname}
                      />
                      <Field
                        name="email"
                        as={StyledTextField}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <Field
                        name="phone"
                        as={StyledTextField}
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                      <Field
                        name="message"
                        as={StyledTextField}
                        label="Mensaje"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
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
          <Box sx={styles.containerImage}>
            <Box component="figure" sx={styles.image}>
              <Image
                quality={100}
                priority
                src={image}
                fill
                style={styles.mainImage}
                alt={'Contáctanos'}
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default ContactForm;
