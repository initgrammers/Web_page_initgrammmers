'use client';

import PropTypes from 'prop-types';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { formatUSD } from './calculatorEngine';
import { calculatorStyles as cs, sharedStyles, colors } from './styles';

const FIELDS = [
  {
    name: 'guias',
    label: '🚚 Cantidad promedio de guías / manifiestos / movimientos POR DÍA',
    helper: 'Lo que registra tu equipo en un día normal de operación (no picos ni feriados).',
    placeholder: 'ej. 80',
    min: 0,
  },
  {
    name: 'personas',
    label: '👥 Personas que coordinan, cruzan datos o repiten tareas EN UN TURNO',
    helper: 'Incluye jefe de turno, operadores de patio, documentación y control de carga.',
    placeholder: 'ej. 6',
    min: 1,
  },
  {
    name: 'costoHora',
    label: '💵 Costo hora CARGADO promedio del equipo operativo (USD)',
    helper: 'Suma sueldo + beneficios (AFP/seguro/vacaciones) + espacio + uniforme + herramientas.',
    placeholder: 'ej. 12',
    min: 1,
    step: 0.01,
  },
  {
    name: 'bodegaje',
    label: '📦 Bodegaje / sobreestadías que pagas POR MES POR DEMORAS (USD)',
    helper: 'Solo el costo variable por demoras o información faltante. No incluyas tu bodega propia fija.',
    placeholder: 'ej. 8000',
    min: 0,
  },
  {
    name: 'turnos',
    label: '⏱️ Turnos operativos completos POR DÍA',
    helper: '1 = solo mañana. 2 = mañana + tarde. 3 = mañana + tarde + noche.',
    placeholder: 'ej. 2',
    min: 1,
    max: 3,
  },
  {
    name: 'dias',
    label: '📅 Días laborales AL MES que opera tu equipo',
    helper: 'Cuenta sábados si trabajas. Si trabajas sábado medio turno, suma 4 al total.',
    placeholder: 'ej. 22',
    min: 1,
    max: 31,
  },
];

const Calculator = ({
  inputs, onChange, onCalculate, results, stale,
}) => (
  <>
    <Box sx={cs.card}>
      <Typography component="h2" sx={cs.cardTitle}>
        <span role="img" aria-label="play">▶️</span>
        {' '}
        Ingresa tus números. No necesitas Excel, lo sacas de la memoria.
      </Typography>
      <Typography sx={cs.cardSubtitle}>
        Valores pre-cargados con un promedio operativo típico. Modifica solo lo
        que no coincida con tu realidad.
      </Typography>

      <Box sx={cs.inputsGrid}>
        {FIELDS.map((field) => (
          <Box key={field.name}>
            <Typography component="label" htmlFor={`f-${field.name}`} sx={cs.inputLabel}>
              {field.label}
            </Typography>
            <TextField
              id={`f-${field.name}`}
              type="number"
              fullWidth
              placeholder={field.placeholder}
              value={inputs[field.name]}
              onChange={(e) => onChange(field.name, e.target.value)}
              inputProps={{ min: field.min, max: field.max, step: field.step || 1 }}
              sx={sharedStyles.textField}
            />
            <Typography sx={cs.inputHelper}>{field.helper}</Typography>
          </Box>
        ))}
      </Box>

      {stale && (
        <Typography sx={cs.staleWarning}>
          <span role="img" aria-label="advertencia">⚠️</span>
          {' '}
          Tus números cambiaron, vuelve a pulsar CALCULAR.
        </Typography>
      )}

      <Button type="button" sx={cs.calculateButton} onClick={onCalculate}>
        <span role="img" aria-label="lupa">🔍</span>
        {' '}
        CALCULAR MI COSTO OCULTO
      </Button>
    </Box>

    {results && (
      <Box sx={cs.resultsCard}>
        <Typography component="h3" sx={cs.resultsTitle}>
          <span role="img" aria-label="objetivo">🎯</span>
          {' '}
          TU DIAGNÓSTICO: Gasto vs Ahorro en 1 año
        </Typography>

        <Box sx={cs.resultsGrid}>
          <Box sx={cs.resultBox}>
            <Typography sx={cs.resultLabel}>
              <span role="img" aria-label="alerta">🚨</span>
              {' '}
              LO QUE GASTAS DE MÁS HOY
            </Typography>
            <Typography sx={cs.resultValue}>{formatUSD(results.gastoDeMasAnual)}</Typography>
            <Typography sx={cs.resultPeriod}>AL AÑO</Typography>
            <Box sx={cs.resultDivider} />
            <Typography sx={cs.resultSecondaryValue}>
              {formatUSD(results.gastoDeMasMensual)}
            </Typography>
            <Typography sx={cs.resultSecondaryLabel}>POR MES</Typography>
          </Box>
          <Box sx={cs.resultBox}>
            <Typography sx={cs.resultLabel}>
              <span role="img" aria-label="listo">✅</span>
              {' '}
              LO QUE PODRÍAS AHORRAR / RECUPERAR
            </Typography>
            <Typography sx={cs.resultValue}>{formatUSD(results.ahorroAnual)}</Typography>
            <Typography sx={cs.resultPeriod}>AL AÑO</Typography>
            <Box sx={cs.resultDivider} />
            <Typography sx={cs.resultSecondaryValue}>{formatUSD(results.ahorroMensual)}</Typography>
            <Typography sx={cs.resultSecondaryLabel}>POR MES</Typography>
          </Box>
        </Box>

        <Typography sx={cs.summaryText}>
          De los
          {' '}
          <Box component="span" sx={{ color: colors.accent }}>{formatUSD(results.gastoDeMasAnual)}</Box>
          {' '}
          que gastas de más al año, recuperas
          {' '}
          <Box component="span" sx={{ color: colors.accent }}>{formatUSD(results.ahorroAnual)}</Box>
          {' '}
          (85%) al automatizar tu operación.
        </Typography>

        <Box sx={cs.breakdownGrid}>
          <Box sx={cs.breakdownItem}>
            <Typography sx={cs.breakdownIcon}>
              <span role="img" aria-label="reloj">⏱️</span>
            </Typography>
            <Typography sx={cs.breakdownValue}>
              {results.horasRecMes}
              {' h'}
            </Typography>
            <Typography sx={cs.breakdownLabel}>recuperadas al MES</Typography>
          </Box>
          <Box sx={cs.breakdownItem}>
            <Typography sx={cs.breakdownIcon}>
              <span role="img" aria-label="paquete">📦</span>
            </Typography>
            <Typography sx={cs.breakdownValue}>
              {formatUSD(results.reduccionBodegajeMes)}
            </Typography>
            <Typography sx={cs.breakdownLabel}>bodegaje evitable/mes</Typography>
          </Box>
          <Box sx={cs.breakdownItem}>
            <Typography sx={cs.breakdownIcon}>
              <span role="img" aria-label="personas">👥</span>
            </Typography>
            <Typography sx={cs.breakdownValue}>{results.personasEquivalentes}</Typography>
            <Typography sx={cs.breakdownLabel}>pers. extra que pagas hoy</Typography>
          </Box>
        </Box>

        <Typography sx={cs.quote}>
          &quot;Esto no es un costo del negocio. Es presupuesto que puedes mover
          a crecimiento, flotilla o bonos de equipo.&quot;
        </Typography>

        <Box sx={cs.unlockWrap}>
          <Typography sx={cs.unlockLabel}>
            <span role="img" aria-label="candado">🔒</span>
            {' '}
            DESBLOQUEA EL DESGLOSE COMPLETO EN PDF
          </Typography>
          <Box component="a" href="#formulario" sx={cs.unlockCta}>
            QUIERO MI INFORME DETALLADO EN PDF
          </Box>
        </Box>
      </Box>
    )}
  </>
);

Calculator.propTypes = {
  inputs: PropTypes.shape({
    guias: PropTypes.string,
    personas: PropTypes.string,
    costoHora: PropTypes.string,
    bodegaje: PropTypes.string,
    turnos: PropTypes.string,
    dias: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onCalculate: PropTypes.func.isRequired,
  results: PropTypes.shape({
    gastoDeMasAnual: PropTypes.number,
    gastoDeMasMensual: PropTypes.number,
    ahorroAnual: PropTypes.number,
    ahorroMensual: PropTypes.number,
    horasRecMes: PropTypes.number,
    reduccionBodegajeMes: PropTypes.number,
    personasEquivalentes: PropTypes.string,
  }),
  stale: PropTypes.bool.isRequired,
};

Calculator.defaultProps = {
  results: null,
};

export default Calculator;
