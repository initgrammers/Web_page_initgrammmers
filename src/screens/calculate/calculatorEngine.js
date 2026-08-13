export const DEFAULTS = {
  guias: 80, personas: 6, costoHora: 12, bodegaje: 8000, turnos: 2, dias: 22,
};

export const LIMITS = {
  guias: { min: 0 },
  personas: { min: 1 },
  costoHora: { min: 1 },
  bodegaje: { min: 0 },
  turnos: { min: 1, max: 3 },
  dias: { min: 1, max: 31 },
};

const HORAS_POR_TURNO_PERDIDAS = 1.5;
const FACTOR_BODEGAJE_EVITABLE = 0.35;
const FACTOR_RETRABAJO = 0.15;
const PORCENTAJE_AHORRO = 0.85;

const PILAR_MAP = {
  P1: {
    nombre: 'Coordinación manual (buscar / perseguir información)',
    accion: 'Centraliza tu operación en 1 hoja maestra con 1 responsable por turno, sin depender de WhatsApp.',
  },
  P2: {
    nombre: 'Bodegaje evitable por demoras en información',
    accion: 'Configura 3 confirmaciones automáticas al día (ingreso, salida, entrega) para avisar sin demoras.',
  },
  P3: {
    nombre: 'Retrabajo por errores y datos repetidos',
    accion: 'Sincroniza 1 sola fuente de verdad con tu bodega y proveedor principal, sin copiar/pegar datos.',
  },
};

// Clamps a raw input string to the field's min/max, leaving it untouched
// while the visitor is still typing (e.g. an empty string mid-edit).
export const clampInput = (field, rawVal) => {
  const lim = LIMITS[field];
  if (rawVal === '') return rawVal;
  const n = parseFloat(rawVal);
  if (Number.isNaN(n)) return rawVal;
  if (lim.min !== undefined && n < lim.min) return String(lim.min);
  if (lim.max !== undefined && n > lim.max) return String(lim.max);
  return rawVal;
};

export const calculateResults = (inputs) => {
  const num = (v, def) => {
    const n = parseFloat(v);
    return (Number.isNaN(n) || n < 0) ? def : n;
  };
  const personas = num(inputs.personas, DEFAULTS.personas);
  const costoHora = num(inputs.costoHora, DEFAULTS.costoHora);
  const bodegajeMensual = num(inputs.bodegaje, DEFAULTS.bodegaje);
  const turnos = num(inputs.turnos, DEFAULTS.turnos);
  const dias = num(inputs.dias, DEFAULTS.dias);

  const horasPerdidasDiarias = personas * HORAS_POR_TURNO_PERDIDAS * turnos;
  const pilarA = horasPerdidasDiarias * costoHora * dias * 12;
  const pilarB = bodegajeMensual * 12 * FACTOR_BODEGAJE_EVITABLE;
  const pilarC = pilarA * FACTOR_RETRABAJO;

  const gastoDeMasAnual = Math.round(pilarA + pilarB + pilarC);
  const gastoDeMasMensual = Math.round(gastoDeMasAnual / 12);
  const ahorroAnual = Math.round(gastoDeMasAnual * PORCENTAJE_AHORRO);
  const ahorroMensual = Math.round(ahorroAnual / 12);
  const horasRecMes = Math.round(horasPerdidasDiarias * dias);
  const reduccionBodegajeMes = Math.round(bodegajeMensual * FACTOR_BODEGAJE_EVITABLE);
  const personasEquivalentes = (gastoDeMasAnual / (costoHora * 8 * 5 * 52)).toFixed(1);

  const p1Pct = gastoDeMasAnual > 0 ? Math.round((pilarA / gastoDeMasAnual) * 100) : 0;
  const p2Pct = gastoDeMasAnual > 0 ? Math.round((pilarB / gastoDeMasAnual) * 100) : 0;
  const p3Pct = gastoDeMasAnual > 0 ? Math.round((pilarC / gastoDeMasAnual) * 100) : 0;

  let pilarGanador = 'P1';
  if (pilarB >= pilarA && pilarB >= pilarC) pilarGanador = 'P2';
  else if (pilarC >= pilarA && pilarC >= pilarB) pilarGanador = 'P3';

  return {
    pilarA,
    pilarB,
    pilarC,
    gastoDeMasAnual,
    gastoDeMasMensual,
    ahorroAnual,
    ahorroMensual,
    horasRecMes,
    reduccionBodegajeMes,
    personasEquivalentes,
    p1Pct,
    p2Pct,
    p3Pct,
    pilarGanador: PILAR_MAP[pilarGanador],
  };
};

export const formatUSD = (n) => `US$ ${Math.round(n).toLocaleString('de-DE')}`;
