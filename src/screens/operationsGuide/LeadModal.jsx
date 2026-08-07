'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { modalStyles, sharedStyles, colors } from './styles';

const PDF_HREF = '/Guia_Operativa_Logistica_InitGrammers.pdf';
// const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_kwuZ4vnWz4dLpVutF91GsUpK8e_eO9Dm1dgegudNcqpZjacTFC95EBER1KPwTCMG6w/exec';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpcq16TJflMiI3IB72HsqCfxE-XMpOFqzFPurO6Bqpk8b7Oh6GW3MTh0eUBIr68gzayw/exec';

const gestionLabels = {
  excel: 'Excel / WhatsApp',
  terceros: 'Sistema de terceros',
  propio: 'Sistema propio',
  otros: 'Otros',
};

const validationSchema = Yup.object({
  nombre: Yup.string().required('Ingresa tu nombre'),
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa un correo válido'),
  web: Yup.string().required('Ingresa un link'),
  gestion: Yup.string().required('Selecciona una opción'),
  personas: Yup.string().required('Selecciona una opción'),
  codigoPais: Yup.string().required(),
  telefono: Yup.string().matches(/^[\d\s-]{6,}$/, 'Ingresa un número válido').required('Ingresa un número válido'),
});

const initialValues = {
  nombre: '',
  email: '',
  web: '',
  gestion: '',
  personas: '',
  codigoPais: '+593',
  telefono: '',
};

const gestionOptions = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'excel', label: 'Excel / WhatsApp' },
  { value: 'terceros', label: 'Sistema de terceros' },
  { value: 'propio', label: 'Sistema propio' },
  { value: 'otros', label: 'Otros' },
];

const personasOptions = [
  { value: '', label: 'Selecciona una opción' },
  { value: '1-10', label: '1 – 10' },
  { value: '11-50', label: '11 – 50' },
  { value: '51-500', label: '51 – 500' },
  { value: '500+', label: 'Más de 500' },
];

const countryOptions = [
  { value: '+593', label: '🇪🇨 +593' },
  { value: '+57', label: '🇨🇴 +57' },
  { value: '+51', label: '🇵🇪 +51' },
  { value: '+56', label: '🇨🇱 +56' },
  { value: '+52', label: '🇲🇽 +52' },
  { value: '+54', label: '🇦🇷 +54' },
  { value: '+58', label: '🇻🇪 +58' },
  { value: '+34', label: '🇪🇸 +34' },
  { value: '+1', label: '🇺🇸 +1' },
];

const menuProps = {
  PaperProps: {
    sx: {
      bgcolor: colors.card,
      color: colors.text,
      border: `1px solid ${colors.line}`,
      backgroundImage: 'none',
      '& .MuiMenuItem-root:hover': {
        bgcolor: 'rgba(255,255,255,0.06)',
      },
      '& .MuiMenuItem-root.Mui-selected': {
        bgcolor: colors.badgeBg,
      },
      '& .MuiMenuItem-root.Mui-selected:hover': {
        bgcolor: 'rgba(225,25,126,0.2)',
      },
    },
  },
};

const downloadPdf = () => {
  const a = document.createElement('a');
  a.href = PDF_HREF;
  a.download = 'Guia_Operativa_Logistica_InitGrammers.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const saveLeadToGoogleSheets = async (values) => {
  const payload = {
    nombre: values.nombre,
    email: values.email,
    web: values.web,
    gestion: gestionLabels[values.gestion] || values.gestion,
    personas: values.personas,
    codigoPais: values.codigoPais,
    telefono: values.telefono,
    sourcePage: window.location.href,
  };

  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
};

const LeadModal = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    const serviceId = 'service_b94r2og';
    const templateId = 'template_zk2w0sn';
    const publicKey = '4cRPDSCYZBosbpavf';

    const templateParams = {
      name: values.nombre,
      lastname: '(Lead: Guía Operativa Logística)',
      email: values.email,
      phone: `${values.codigoPais} ${values.telefono}`,
      message: `Web/LinkedIn: ${values.web}\nCómo gestiona la operación hoy: ${gestionLabels[values.gestion] || values.gestion}\nPersonas en la operación: ${values.personas}`,
    };

    await Promise.allSettled([
      emailjs.send(serviceId, templateId, templateParams, publicKey),
      saveLeadToGoogleSheets(values),
    ]);

    setSubmitted(true);
    downloadPdf();
  };

  return (
    <Dialog
      open
      onClose={onClose}
      fullWidth
      maxWidth={false}
      scroll="body"
      PaperProps={{ sx: modalStyles.dialogPaper }}
      slotProps={{ backdrop: { sx: modalStyles.backdrop } }}
    >
      <IconButton type="button" sx={modalStyles.closeButton} onClick={onClose} aria-label="Cerrar">
        <CloseRoundedIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={modalStyles.content}>
        {!submitted && (
          <>
            <Typography component="h3" sx={modalStyles.title}>
              Descarga la guía gratis
            </Typography>
            <Typography variant="body1" sx={modalStyles.subtitle}>
              Recíbela al instante. Sin spam, sin compromisos.
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                touched,
                values,
                handleBlur,
                handleChange,
              }) => (
                <Form noValidate>
                  <Stack>
                    <TextField
                      id="f-nombre"
                      name="nombre"
                      label="Nombre completo"
                      placeholder="Tu nombre"
                      fullWidth
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.nombre && Boolean(errors.nombre)}
                      helperText={touched.nombre && errors.nombre ? errors.nombre : ' '}
                      sx={modalStyles.textField}
                    />

                    <TextField
                      id="f-email"
                      name="email"
                      type="email"
                      label="Correo corporativo"
                      placeholder="tu@empresa.com"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email ? errors.email : ' '}
                      sx={modalStyles.textField}
                    />

                    {/* <TextField
                      id="f-web"
                      name="web"
                      label="Link de tu página web o LinkedIn"
                      placeholder="linkedin.com/in/…"
                      fullWidth
                      value={values.web}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.web && Boolean(errors.web)}
                      helperText={touched.web && errors.web ? errors.web : ' '}
                      sx={modalStyles.textField}
                    />

                    <TextField
                      id="f-gestion"
                      name="gestion"
                      label="¿Cómo gestionas la operación hoy?"
                      select
                      fullWidth
                      value={values.gestion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.gestion && Boolean(errors.gestion)}
                      helperText={touched.gestion && errors.gestion ? errors.gestion : ' '}
                      sx={modalStyles.textField}
                      SelectProps={{ MenuProps: menuProps }}
                    >
                      {gestionOptions.map((option) => (
                        <MenuItem key={option.value || 'default'} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      id="f-personas"
                      name="personas"
                      label="¿Cuántas personas trabajan en tu operación?"
                      select
                      fullWidth
                      value={values.personas}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.personas && Boolean(errors.personas)}
                      helperText={touched.personas && errors.personas ? errors.personas : ' '}
                      sx={modalStyles.textField}
                      SelectProps={{ MenuProps: menuProps }}
                    >
                      {personasOptions.map((option) => (
                        <MenuItem key={option.value || 'default'} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Box>
                      <Typography
                        component="label"
                        htmlFor="f-telefono"
                        sx={{
                          display: 'block',
                          mb: 0.75,
                          color: '#c9c4cf',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                        }}
                      >
                        Número de teléfono
                      </Typography>
                      <Box sx={modalStyles.phoneRow}>
                        <TextField
                          id="f-cod"
                          name="codigoPais"
                          select
                          value={values.codigoPais}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={{ ...modalStyles.textField, ...modalStyles.phoneCodeField }}
                          SelectProps={{ MenuProps: menuProps }}
                        >
                          {countryOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="f-telefono"
                          name="telefono"
                          type="tel"
                          placeholder="99 123 4567"
                          value={values.telefono}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.telefono && Boolean(errors.telefono)}
                          sx={{ ...modalStyles.textField, ...modalStyles.phoneNumberField }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          mt: 0.625,
                          minHeight: 20,
                          color: touched.telefono && errors.telefono ? colors.errorText : 'transparent',
                          fontSize: '0.75rem',
                        }}
                      >
                        {touched.telefono && errors.telefono ? errors.telefono : 'placeholder'}
                      </Typography>
                    </Box> */}

                    <Button type="submit" fullWidth sx={sharedStyles.primaryButton}>
                      Descargar guía gratis
                    </Button>
                    <Typography sx={sharedStyles.privacy}>
                      100% privacidad. No jugamos. No hacemos spam.
                    </Typography>
                  </Stack>
                </Form>
              )}
            </Formik>
          </>
        )}

        {submitted && (
          <Box sx={modalStyles.successWrap}>
            <Box sx={modalStyles.successCheck}>
              <CheckRoundedIcon fontSize="large" />
            </Box>
            <Typography component="h3" sx={{ ...modalStyles.title, mb: 0 }}>
              Tu descarga va en camino
            </Typography>
            <Typography sx={{ ...modalStyles.subtitle, mb: 0 }}>
              El PDF se está descargando en tu navegador. Revisa tu carpeta de descargas.
            </Typography>
            <Button
              href={PDF_HREF}
              download="Guia_Operativa_Logistica_InitGrammers.pdf"
              sx={sharedStyles.primaryButton}
            >
              Descargar de nuevo
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

LeadModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LeadModal;
