import React from 'react';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import CustomContainer from '#Components/CustomContainer';
import { primary } from '#app/shared/config/theme/colors';
import styles from '../styles/ContactForm';

const ContactForm = ({
  image = 'https://res.cloudinary.com/initgrammers/image/upload/v1609863472/LandingPage/soporte-adicional-sin-costo.png',
}) => {
  const t = useTranslations('Index');

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contactUsFormNameError')),
    email: Yup.string()
      .email(t('contactUsFormInvalidEmailError'))
      .required(t('contactUsFormEmailError')),
    // phone: Yup.string().required(t('contactUsFormPhoneError')),
    message: Yup.string().required(t('contactUsFormMessageError')),
  });

  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      minHeight: '56px', 
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
    const serviceId = 'service_b94r2og';
    const templateId = 'template_zk2w0sn';
    const publicKey = '4cRPDSCYZBosbpavf';

    const templateParams = {
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        resetForm();
      })
      .catch(() => {
      });
  };

  return (
    <Box
      component="section"
      position="relative"
      sx={{ background: primary.light, paddingY: { lg: 0, xs: 3, md: 3 } }}
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
                {t('contactUsTitle')}
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
                        label={t('contactUsNameField')}
                        variant="outlined"
                        fullWidth
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                      <Field
                        name="lastname"
                        as={StyledTextField}
                        label={t('contactUsLastnameField')}
                        variant="outlined"
                        fullWidth
                        error={touched.lastname && Boolean(errors.lastname)}
                        helperText={touched.lastname && errors.lastname}
                      />
                      <Field
                        name="email"
                        as={StyledTextField}
                        label={t('contactUsEmailField')}
                        variant="outlined"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <Field
                        name="phone"
                        as={StyledTextField}
                        label={t('contactUsPhoneField')}
                        variant="outlined"
                        fullWidth
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                      <Field
                        name="message"
                        as={StyledTextField}
                        label={t('contactUsMessageField')}
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
                        {t('contactUsSendButton')}
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
                alt="Contáctanos"
              />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default ContactForm;
