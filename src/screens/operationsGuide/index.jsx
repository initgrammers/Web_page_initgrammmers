'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import LeadModal from './LeadModal';
import { pageStyles, sharedStyles, colors } from './styles';

const testimonials = [
  {
    quote: '"Junto a Initgrammers, optimizamos los procesos de bodegaje en el aeropuerto y logramos reducir $200,000 USD en solo 3 meses. Para el cierre de 2026, proyectamos superar el medio millón de dólares en ahorros. Es un equipo disciplinado, multifuncional y un verdadero aliado estratégico para nuestro negocio."',
    name: 'Manuel Pillapa',
    role: 'Business Analytics/Grupo TransOceanica',
  },
  // {
  //   quote: '"El reporte semanal que nos tomaba un día completo ahora se arma solo."',
  //   name: 'Andrés Molina',
  //   role: 'Jefe de Flota, ejemplo',
  // },
  // {
  //   quote: '"Nos enteramos de los problemas antes que el cliente llame. Eso cambió la relación con nuestras cuentas grandes."',
  //   name: 'Laura Gómez',
  //   role: 'Directora Logística, ejemplo',
  // },
];

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

const OperationsGuide = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box sx={pageStyles.root}>
      <Box component="header" sx={pageStyles.header}>
        <Container maxWidth={false} sx={pageStyles.topBar}>
          <Box sx={pageStyles.brandRow}>
            <Box sx={pageStyles.logoIcon}>
              <Image
                src="/assets/images/icono-initgrammers.png"
                alt="InitGrammers"
                fill
                sizes="34px"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography component="div" sx={pageStyles.wordmark}>
              Init
              <Box component="span" sx={{ color: colors.accentLight }}>
                Grammers
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={pageStyles.heroSection}>
        <Container maxWidth={false} sx={pageStyles.heroInner}>
          <Box sx={sharedStyles.eyebrow}>
            <Box sx={sharedStyles.eyebrowDot} />
            <Box component="span">Guía operativa gratis · InitGrammers</Box>
          </Box>
          <Typography component="h1" sx={pageStyles.heroTitle}>
            Los 15 segundos que deciden si una carga se
            {' '}
            <Box component="em" sx={{ color: colors.accentLight, fontStyle: 'normal' }}>
              controla
            </Box>
            {' '}
            o se pierde
          </Typography>
          <Typography variant='body1' sx={pageStyles.heroLead}>
            Cómo pasar de coordinar por Excel y WhatsApp a una operación que se controla sola
            {' '}
            —
            {' '}
            sin quedar mal frente a tus clientes corporativos.
          </Typography>
          <Box component="ul" sx={{...pageStyles.painList, mt: 4}}>
            {[
              'Perseguir por WhatsApp para saber dónde va cada carga',
              'Enterarte de los problemas cuando el cliente ya reclamó',
              'Reprocesar reportes a mano cada semana en Excel',
            ].map((item) => (
              <Box component="li" key={item} sx={pageStyles.painItem}>
                <Box component="span" sx={pageStyles.painItemIcon}>✕</Box>
                <Box component="span">{item}</Box>
              </Box>
            ))}
          </Box>
          <Box mb={4}>
            <Button type="button" sx={sharedStyles.primaryButton} onClick={() => setModalOpen(true)}>
              Descargar guía gratis
            </Button>
            <Typography sx={sharedStyles.privacy}>
              100% privacidad. No jugamos. No hacemos spam.
            </Typography>
          </Box>
          <Typography variant='body1' sx={pageStyles.basedOn}>
            Basado en operaciones reales de un holding logístico · trazabilidad de carga · bodegaje · coordinación de flota
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{...pageStyles.logoBar, py:7}}>
        <Container maxWidth={false} sx={sharedStyles.container}>
          <Box sx={{ textAlign: 'center', mb: 2.75 }}>
            <Box component="span" sx={pageStyles.tag}>
              Operaciones que ya controlan su logística
            </Box>
          </Box>
          <Box sx={pageStyles.logoStrip}>
            {clientLogos.map((logoSrc, index) => (
              <Box key={logoSrc} sx={pageStyles.logoChip}>
                <Box
                  component="img"
                  src={logoSrc}
                  alt={`Logo de cliente ${index + 1}`}
                  sx={pageStyles.logoImage}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={pageStyles.statsBar}>
        <Container maxWidth={false} sx={pageStyles.statsGrid}>
          {stats.map((stat) => (
            <Box key={stat.label} sx={pageStyles.statItem}>
              <Typography component="div" sx={pageStyles.statNum}>{stat.num}</Typography>
              <Typography variant='body1' sx={pageStyles.statLabel}>{stat.label}</Typography>
            </Box>
          ))}
        </Container>
      </Box>

      <Box component="section" sx={pageStyles.section}>
        <Container maxWidth={false} sx={sharedStyles.container}>
          <Box sx={pageStyles.sectionHead}>
            <Box sx={sharedStyles.eyebrow}>
              <Box sx={sharedStyles.eyebrowDot} />
              <Box component="span">Lo que dicen operaciones como la tuya</Box>
            </Box>
            <Typography component="h2" sx={pageStyles.sectionTitle}>
              Diseñada para quien controla la operación, no para quien la sufre
            </Typography>
          </Box>
          <Box sx={pageStyles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} sx={pageStyles.testimonialCard}>
                <CardContent sx={pageStyles.testimonialCardContent}>
                  <Typography variant='body1' sx={pageStyles.testimonialQuote}>
                    {testimonial.quote}
                  </Typography>
                  <Box sx={pageStyles.testimonialAuthor}>
                    <Avatar sx={pageStyles.avatar} />
                    <Box display="flex" flexDirection="column">
                      <Box>
                        <Typography variant='body1' sx={pageStyles.testimonialName}>{testimonial.name}</Typography>       
                      </Box>
                      <Box>
                        <Typography variant='body1' sx={pageStyles.testimonialRole}>{testimonial.role}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={pageStyles.finalCta}>
        <Container maxWidth={false} sx={sharedStyles.container}>
          <Box sx={sharedStyles.eyebrow}>
            <Box sx={sharedStyles.eyebrowDot} />
            <Box component="span">¿Sigues coordinando por WhatsApp?</Box>
          </Box>
          <Typography component="h2" sx={pageStyles.finalTitle}>
            Descarga la guía y controla tu operación desde hoy
          </Typography>
          <Typography variant='body1' sx={pageStyles.finalDescription}>
            Guía gratuita basada en operaciones reales: trazabilidad de carga, bodegaje y coordinación de flota en tiempo real.
          </Typography>
          <Button type="button" sx={{...sharedStyles.primaryButton, mt:4}} onClick={() => setModalOpen(true)}>
            Descargar guía gratis
          </Button>
          <Typography sx={sharedStyles.privacy}>
            100% privacidad. No jugamos. No hacemos spam.
          </Typography>
        </Container>
      </Box>

      <Box component="footer" sx={pageStyles.footer}>
        © 2026 InitGrammers · Guía operativa logística
      </Box>

      {modalOpen && <LeadModal onClose={() => setModalOpen(false)} />}
    </Box>
  );
};

export default OperationsGuide;
