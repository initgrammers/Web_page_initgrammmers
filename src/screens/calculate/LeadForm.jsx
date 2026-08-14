'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, MenuItem, TextField, Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import generateReportPdfBlob from './generatePdf';
import { formatUSD } from './calculatorEngine';
import { formStyles as fs, sharedStyles } from './styles';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpcq16TJflMiI3IB72HsqCfxE-XMpOFqzFPurO6Bqpk8b7Oh6GW3MTh0eUBIr68gzayw/exec';

const BLOCKED_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com'];
const BLOCKED_EMAIL_MESSAGE = 'Usa tu correo corporativo (no se aceptan Gmail, Yahoo o Hotmail).';

const cargoOptions = ['Gerente Logística', 'Gerente Operaciones', 'Gerente Supply Chain', 'Jefe de Flota', 'Jefe de Almacén', 'Director', 'Otro'];
const gestionOptions = ['Excel', 'Sistema de terceros', 'Sistema propio', 'Otros'];
const tamanoOptions = ['1 - 10', '11 - 50', '51 - 500', 'Más de 500'];

const validationSchema = Yup.object({
  nombre: Yup.string().required('Ingresa tu nombre'),
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa tu correo'),
  empresa: Yup.string(),
  cargo: Yup.string(),
  linkweb: Yup.string(),
  telefono: Yup.string(),
  gestion: Yup.string(),
  tamanoEquipo: Yup.string(),
});

const initialValues = {
  nombre: '',
  email: '',
  empresa: '',
  cargo: '',
  linkweb: '',
  telefono: '',
  gestion: '',
  tamanoEquipo: '',
};

const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
};

const saveLeadToGoogleSheets = async (payload) => {
  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
};

const LeadForm = ({ results, onDownloaded }) => {
  const [leadError, setLeadError] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    const domain = (values.email.split('@')[1] || '').toLowerCase();
    if (BLOCKED_EMAIL_DOMAINS.includes(domain)) {
      setLeadError(BLOCKED_EMAIL_MESSAGE);
      return;
    }
    setLeadError('');

    const blob = generateReportPdfBlob(results, values);
    downloadBlob(blob, 'Informe-Costo-Oculto-InitGrammers.pdf');

    const resultsSummary = results
      ? `Gasto de más estimado: ${formatUSD(results.gastoDeMasAnual)}/año · Ahorro potencial: ${formatUSD(results.ahorroAnual)}/año`
      : 'Sin cálculo previo (formulario enviado sin usar la calculadora).';

    const templateParams = {
      name: values.nombre,
      lastname: '(Lead: Calculadora Costo Oculto)',
      email: values.email,
      phone: values.telefono,
      message: [
        values.empresa && `Empresa: ${values.empresa}`,
        values.cargo && `Cargo: ${values.cargo}`,
        values.linkweb && `Web/LinkedIn: ${values.linkweb}`,
        values.gestion && `Cómo gestiona la operación hoy: ${values.gestion}`,
        values.tamanoEquipo && `Personas en la operación: ${values.tamanoEquipo}`,
        resultsSummary,
      ].filter(Boolean).join('\n'),
    };

    const sheetsPayload = {
      ...values,
      ...(results ? {
        gastoDeMasAnual: results.gastoDeMasAnual,
        ahorroAnual: results.ahorroAnual,
      } : {}),
      sourcePage: window.location.href,
    };

    await Promise.allSettled([
      emailjs.send('service_b94r2og', 'template_zk2w0sn', templateParams, '4cRPDSCYZBosbpavf'),
      saveLeadToGoogleSheets(sheetsPayload),
    ]);

    resetForm();
    onDownloaded();
  };

  return (
    <Box id="formulario" sx={fs.card}>
      <Typography component="h2" sx={fs.title}>
        Descarga tu informe gratis
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors, touched, values, handleChange, handleBlur,
        }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.25 }}>
              <Box sx={fs.fieldsGrid}>
                <TextField
                  id="f-nombre"
                  name="nombre"
                  label="Nombre completo"
                  fullWidth
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.nombre && Boolean(errors.nombre)}
                  helperText={touched.nombre && errors.nombre ? errors.nombre : ' '}
                  sx={sharedStyles.textField}
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
                  sx={sharedStyles.textField}
                />
              </Box>

              {/* Kept in the DOM but visually hidden, matching the source design —
                  ready to surface later without rebuilding the form. */}
              <Box sx={fs.hiddenGrid}>
                <TextField
                  name="empresa"
                  label="Nombre de empresa"
                  fullWidth
                  value={values.empresa}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                />
                <TextField
                  name="cargo"
                  label="Cargo"
                  select
                  fullWidth
                  value={values.cargo}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                >
                  <MenuItem value="">Selecciona...</MenuItem>
                  {cargoOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={fs.hiddenGrid}>
                <TextField
                  name="linkweb"
                  label="Link de tu página web o LinkedIn"
                  placeholder="https://tuempresa.com"
                  fullWidth
                  value={values.linkweb}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                />
                <TextField
                  name="telefono"
                  type="tel"
                  label="Teléfono (opcional)"
                  fullWidth
                  value={values.telefono}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                />
              </Box>
              <Box sx={fs.hiddenGrid}>
                <TextField
                  name="gestion"
                  label="¿Cómo gestionas la operación en tu empresa?"
                  select
                  fullWidth
                  value={values.gestion}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                >
                  <MenuItem value="">Selecciona...</MenuItem>
                  {gestionOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  name="tamanoEquipo"
                  label="¿Cuántas personas trabajan en tu operación?"
                  select
                  fullWidth
                  value={values.tamanoEquipo}
                  onChange={handleChange}
                  sx={sharedStyles.textField}
                >
                  <MenuItem value="">Selecciona...</MenuItem>
                  {tamanoOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              </Box>

              {leadError && (
                <Typography sx={fs.errorBox}>{leadError}</Typography>
              )}

              <Button type="submit" sx={fs.submitButton}>
                DESCARGAR MI INFORME GRATIS
              </Button>
              <Typography sx={sharedStyles.privacy}>
                <span role="img" aria-label="escudo">🛡️</span>
                {' '}
                Tu información está protegida. No compartimos datos. Puedes
                darte de baja en 1 clic.
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

LeadForm.propTypes = {
  results: PropTypes.shape({
    gastoDeMasAnual: PropTypes.number,
    ahorroAnual: PropTypes.number,
  }),
  onDownloaded: PropTypes.func.isRequired,
};

LeadForm.defaultProps = {
  results: null,
};

export default LeadForm;
