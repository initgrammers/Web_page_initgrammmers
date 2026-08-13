'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Calculator from './Calculator';
import LeadForm from './LeadForm';
import { DEFAULTS, clampInput, calculateResults } from './calculatorEngine';
import { pageStyles as ps, sharedStyles, colors } from './styles';

const stats = [
  { num: '$200K', label: 'de ahorro proyectado en un año de operación' },
  { num: '99%', label: 'menos trabajo manual en causas de bodegaje' },
  { num: '47%', label: 'reducción de bodegaje en un trimestre' },
  { num: '1.5-2h', label: 'recuperadas por turno sin coordinación manual' },
];

const clientLogos = [
  '/assets/images/client-logos/image.png',
  '/assets/images/client-logos/image1.png',
  '/assets/images/client-logos/image2.png',
  '/assets/images/client-logos/image3.png',
  '/assets/images/client-logos/image4.png',
  '/assets/images/client-logos/image5.png',
  '/assets/images/client-logos/image6.png',
];

const cases = [
  { icon: '🏢', title: 'Holding Logístico', value: '200k USD ahorrado en 12 meses' },
  { icon: '📦', title: 'Operador Terrestre', value: '42% menos retrabajo' },
  { icon: '✈️', title: 'Carga Aérea', value: '99% menos trabajo manual' },
];

const testimonials = [
  {
    quote: '"Junto a Initgrammers, optimizamos los procesos de bodegaje en el aeropuerto y logramos reducir $200,000 USD en solo 3 meses. Para el cierre de 2026, proyectamos superar el medio millón de dólares en ahorros. Es un equipo disciplinado, multifuncional y un verdadero aliado estratégico para nuestro negocio."',
    name: 'Manuel Pillapa',
    role: 'Business Analytics/Grupo TransOceanica',
  },
];

const initialInputs = {
  guias: String(DEFAULTS.guias),
  personas: String(DEFAULTS.personas),
  costoHora: String(DEFAULTS.costoHora),
  bodegaje: String(DEFAULTS.bodegaje),
  turnos: String(DEFAULTS.turnos),
  dias: String(DEFAULTS.dias),
};

const Calculate = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [results, setResults] = useState(null);
  const [stale, setStale] = useState(false);
  const [toast, setToast] = useState(false);

  const handleInputChange = (field, rawVal) => {
    setInputs((prev) => ({ ...prev, [field]: clampInput(field, rawVal) }));
    setStale((prev) => (results ? true : prev));
  };

  const handleCalculate = () => {
    setResults(calculateResults(inputs));
    setStale(false);
  };

  const handleDownloaded = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  return (
    <Box sx={ps.root}>
      <Box component="nav" sx={ps.nav}>
        <Box sx={ps.brandRow}>
          <Box sx={ps.logoIcon}>
            <Image
              src="/assets/images/icono-initgrammers.png"
              alt="InitGrammers"
              fill
              sizes="36px"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box>
            <Typography component="span" sx={ps.wordmark}>
              Init
              <Box component="span" sx={{ color: colors.accent }}>Grammers</Box>
            </Typography>
            {' '}
            <Typography component="span" sx={ps.wordmarkSub}>· Logística Operativa</Typography>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={ps.heroSection}>
        <Box sx={ps.heroInner}>
          <Box sx={ps.heroBadge}>
            <Box sx={ps.heroBadgeDot} />
            PARA GERENTES DE LOGÍSTICA · OPERACIONES · SUPPLY CHAIN
          </Box>
          <Typography component="h1" sx={ps.heroTitle}>
            Tu operación de hoy te cuesta entre
            {' '}
            <Box component="span" sx={{ color: colors.accent }}>US$ 10.000 y US$ 25.000</Box>
            {' '}
            AL MES sin que te des cuenta.
          </Typography>
          <Typography component="h2" sx={ps.heroSubtitle}>
            Búsqueda manual de información, coordinación por WhatsApp, bodegaje
            innecesario y retrabajo: es dinero que se pierde todos los días.
            Pero hay una forma de medirlo.
          </Typography>

          <Box sx={ps.painList}>
            {[
              'Perseguir a tu equipo por WhatsApp para saber dónde quedó cada carga',
              'Enterarte del problema cuando el cliente ya reclamó',
              'Recalcular reportes a mano cada semana en Excel',
            ].map((item) => (
              <Box key={item} sx={ps.painItem}>
                <Box component="span" sx={ps.painItemIcon}>✕</Box>
                <Box component="span" sx={ps.painItemText}>{item}</Box>
              </Box>
            ))}
          </Box>

          <Box component="a" href="#calculadora" sx={ps.heroCta}>
            <span role="img" aria-label="apunta hacia abajo">👇</span>
            {' '}
            DESCUBRE TU NÚMERO EN 60 SEGUNDOS
          </Box>

          <Box sx={ps.statsGrid}>
            {stats.map((stat) => (
              <Box key={stat.label} sx={ps.statCard}>
                <Typography sx={ps.statNum}>{stat.num}</Typography>
                <Typography sx={ps.statLabel}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={ps.logoBarSection}>
        <Typography sx={ps.logoBarLabel}>
          Operaciones que ya controlan su logística
        </Typography>
        <Box sx={ps.logoStrip}>
          {clientLogos.map((logoSrc, index) => (
            <Box key={logoSrc} sx={ps.logoChip}>
              <Box
                component="img"
                src={logoSrc}
                alt={`Logo de cliente ${index + 1}`}
                sx={ps.logoImage}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box id="calculadora" component="section" sx={ps.section}>
        <Box sx={sharedStyles.container} mx="auto">
          <Box sx={sharedStyles.stepBadge}>01</Box>
          <Box component="span" sx={sharedStyles.stepLabel}>DIAGNÓSTICO EN 60 SEGUNDOS</Box>
        </Box>
        <Calculator
          inputs={inputs}
          onChange={handleInputChange}
          onCalculate={handleCalculate}
          results={results}
          stale={stale && Boolean(results)}
        />
      </Box>

      <Box component="section" sx={ps.section}>
        <Box sx={sharedStyles.container} mx="auto">
          <Box sx={sharedStyles.stepBadge}>02</Box>
          <Box component="span" sx={sharedStyles.stepLabel}>PRUEBA SOCIAL</Box>
          <Typography component="h2" sx={ps.sectionTitle}>¿De dónde sale este cálculo?</Typography>
   

          <Box sx={ps.caseGrid}>
            {cases.map((c) => (
              <Box key={c.title} sx={ps.caseCard}>
                <Typography sx={ps.caseIcon}>{c.icon}</Typography>
                <Typography sx={ps.caseTitle}>{c.title}</Typography>
                <Typography sx={ps.caseValue}>{c.value}</Typography>
              </Box>
            ))}
          </Box>

          <Typography sx={ps.quoteLabel}>Lo que dicen operaciones como la tuya</Typography>
          <Box sx={ps.testimonialGrid}>
            {testimonials.map((t) => (
              <Box key={t.name} sx={ps.testimonialCard}>
                <Typography sx={ps.testimonialQuote}>{t.quote}</Typography>
                <Typography sx={ps.testimonialName}>{t.name}</Typography>
                <Typography sx={ps.testimonialRole}>{t.role}</Typography>
              </Box>
            ))}
          </Box>

          <Typography sx={ps.methodologyNote}>
            Esta calculadora replica la metodología con la que InitGrammers
            diagnosticó +35 operaciones logísticas en los últimos 2 años.
          </Typography>
        </Box>
      </Box>

      <Box component="section" sx={ps.section}>
        <Box sx={sharedStyles.container} mx="auto" mb={2}>
          <Box sx={sharedStyles.stepBadge}>03</Box>
          <Box component="span" sx={sharedStyles.stepLabel}>TU INFORME PERSONALIZADO</Box>
        </Box>
        <LeadForm results={results} onDownloaded={handleDownloaded} />
      </Box>

      <Box component="footer" sx={ps.footer}>
        <Typography component="div" sx={ps.wordmark}>
          Init
          <Box component="span" sx={{ color: colors.accent }}>Grammers</Box>
        </Typography>
        <Box sx={ps.footerLinks}>
          <Box component="a" href="#" sx={ps.footerLink}>Política de privacidad</Box>
          <Box component="a" href="#" sx={ps.footerLink}>Términos y condiciones</Box>
          <Box component="a" href="#" sx={ps.footerLink}>Contacto</Box>
        </Box>
        <Typography sx={ps.footerMuted}>info@initgrammers.com</Typography>
        <Typography sx={ps.footerMuted}>
          © 2026 InitGrammers — Software para Operaciones Logísticas
        </Typography>
      </Box>

      {toast && (
        <Box sx={ps.toast}>
          <span role="img" aria-label="documento">📄</span>
          {' '}
          Descargando tu informe...
        </Box>
      )}
    </Box>
  );
};

export default Calculate;
