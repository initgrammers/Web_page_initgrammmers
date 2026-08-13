import { jsPDF } from 'jspdf';

const fmtUSD = (n) => `US$ ${Math.round(n || 0).toLocaleString('de-DE')}`;

// Builds a personalized 5-page PDF diagnostic report from the calculator's
// results and the lead's data, and returns it as a downloadable Blob.
const generateReportPdfBlob = (results, leadData) => {
  const r = results || {};
  // eslint-disable-next-line new-cap -- jsPDF is the library's actual exported name
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const W = 612;
  const H = 792;
  const MX = 56;
  const CW = W - MX * 2;
  const BG = [31, 31, 36];
  const CARD = [42, 42, 50];
  const ACCENT = [159, 42, 103];
  const WHITE = [255, 255, 255];
  const MUTED = [138, 138, 149];
  const GRAY = [198, 198, 206];
  const empresa = (leadData && leadData.empresa) || 'tu operación';
  const LH = 1.32; // line-height multiplier

  const pageBg = () => { doc.setFillColor(...BG); doc.rect(0, 0, W, H, 'F'); };
  const brand = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...WHITE);
    doc.text('Init', MX, 50);
    const w = doc.getTextWidth('Init');
    doc.setTextColor(...ACCENT);
    doc.text('Grammers', MX + w, 50);
  };
  const footer = (n, total) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(`INITGRAMMERS · DIAGNÓSTICO OPERATIVO   ${n}/${total}`, MX, H - 30);
  };
  // writes wrapped text at (x,y,maxWidth,fontSize) and returns the new y cursor
  const wrap = (text, x, y, maxWidth, size) => {
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + lines.length * size * LH;
  };

  const TOTAL_PAGES = 5;

  // PÁGINA 1 · PORTADA
  pageBg();
  brand();
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...MUTED);
  let y = wrap('DIAGNÓSTICO OPERATIVO · CONTROL EN TIEMPO REAL', MX, 110, CW, 10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  y = wrap(`Los 15 segundos que deciden si la carga de ${empresa} se controla o se pierde.`, MX, y + 30, CW, 27) + 14;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...GRAY);
  y = wrap('Cómo pasar de coordinar por Excel y WhatsApp a una operación que se controla sola, basado en tus propios números.', MX, y, CW, 12) + 40;

  const stats = [
    [fmtUSD(r.ahorroAnual), 'de ahorro potencial en 1 año'],
    [`${r.horasRecMes || 0} h`, 'recuperadas al mes'],
    [fmtUSD(r.reduccionBodegajeMes), 'bodegaje evitable al mes'],
    [`${r.personasEquivalentes || '0.0'}`, 'personas full-time que pagas hoy'],
  ];
  const gap = 16;
  const cw = (CW - gap) / 2;
  const ch = 92;
  const statY = Math.min(y, H - 260);
  stats.forEach((s, i) => {
    const x = MX + (i % 2) * (cw + gap);
    const cy = statY + Math.floor(i / 2) * (ch + gap);
    doc.setFillColor(...CARD);
    doc.roundedRect(x, cy, cw, ch, 10, 10, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);
    doc.setTextColor(...ACCENT);
    doc.text(s[0], x + 18, cy + 36);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...MUTED);
    wrap(s[1], x + 18, cy + 56, cw - 32, 10);
  });
  footer(1, TOTAL_PAGES);

  // PÁGINA 2 · ANATOMÍA DEL COSTO
  doc.addPage();
  pageBg();
  brand();
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...MUTED);
  y = wrap('01 · ANATOMÍA DEL COSTO OCULTO', MX, 100, CW, 10) + 16;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  y = wrap('Los 3 lugares por donde se va tu dinero', MX, y, CW, 21) + 26;

  const rows = [
    ['Coordinación manual (buscar / perseguir info)', fmtUSD(r.pilarA), `${r.p1Pct || 0}%`],
    ['Bodegaje evitable por demoras', fmtUSD(r.pilarB), `${r.p2Pct || 0}%`],
    ['Retrabajo por errores y datos repetidos', fmtUSD(r.pilarC), `${r.p3Pct || 0}%`],
  ];
  doc.setFillColor(...CARD);
  doc.roundedRect(MX, y, CW, 28, 6, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('CAUSA', MX + 14, y + 18);
  doc.text('MONTO / AÑO', MX + 300, y + 18);
  doc.text('%', MX + 430, y + 18);
  y += 36;
  rows.forEach((row) => {
    doc.setFillColor(...CARD);
    doc.roundedRect(MX, y, CW, 36, 6, 6, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(...WHITE);
    const causaLines = doc.splitTextToSize(row[0], 260);
    doc.text(causaLines, MX + 14, y + (causaLines.length > 1 ? 15 : 22));
    doc.setTextColor(...ACCENT);
    doc.setFont('helvetica', 'bold');
    doc.text(row[1], MX + 300, y + 22);
    doc.text(row[2], MX + 430, y + 22);
    y += 44;
  });
  y += 14;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...WHITE);
  y = wrap('Antes de que un cliente reclame, tú ya deberías saberlo:', MX, y, CW, 13) + 18;
  const anatomia = [
    'Estado de la carga en cada punto del flujo, sin abrir varios Excel.',
    'Responsable claro por cada envío, sin "yo pensé que lo hacía el otro".',
    'Alertas automáticas antes de que el problema escale.',
  ];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...GRAY);
  anatomia.forEach((t) => { y = wrap(`•  ${t}`, MX, y, CW, 11) + 8; });
  footer(2, TOTAL_PAGES);

  // PÁGINA 3 · DIAGNÓSTICO
  doc.addPage();
  pageBg();
  brand();
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...MUTED);
  y = wrap('02 · DIAGNÓSTICO', MX, 100, CW, 10) + 16;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  y = wrap('Lo que haces hoy, lo que debería pasar solo', MX, y, CW, 21) + 26;

  const colW = (CW - 24) / 2;
  const beforeAfter = [
    ['Perseguir por WhatsApp para saber dónde va cada carga', 'Ver el estado en una sola pantalla, sin preguntar'],
    ['Revisar varios Excel para armar un reporte', 'El reporte se genera automático'],
    ['Enterarte del problema cuando el cliente reclama', 'Recibir la alerta antes de que escale'],
  ];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('HOY', MX + 16, y);
  doc.text('CON INITGRAMMERS', MX + colW + 24 + 16, y);
  y += 20;
  beforeAfter.forEach((pair) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(...GRAY);
    const lLines = doc.splitTextToSize(pair[0], colW - 18);
    const rLines = doc.splitTextToSize(pair[1], colW - 18);
    doc.setFillColor(...MUTED);
    doc.circle(MX + 4, y - 3, 3, 'F');
    doc.setFillColor(...ACCENT);
    doc.circle(MX + colW + 24 + 4, y - 3, 3, 'F');
    doc.text(lLines, MX + 16, y);
    doc.text(rLines, MX + colW + 24 + 16, y);
    y += Math.max(lLines.length, rLines.length) * 10.5 * LH + 14;
  });
  footer(3, TOTAL_PAGES);

  // PÁGINA 4 · QUÉ CORREGIR
  doc.addPage();
  pageBg();
  brand();
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...MUTED);
  y = wrap('03 · QUÉ CORREGIR', MX, 100, CW, 10) + 16;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  y = wrap('Tu problema #1 más caro hoy', MX, y, CW, 21) + 22;

  const boxY = y;
  const nombreLines = doc.splitTextToSize(r.pilarGanador ? r.pilarGanador.nombre : '', CW - 36);
  const accionLines = doc.splitTextToSize(`Acción recomendada: ${r.pilarGanador ? r.pilarGanador.accion : ''}`, CW - 36);
  const boxH = 24 + nombreLines.length * 14 * LH + 12 + accionLines.length * 10.5 * LH + 18;
  doc.setFillColor(...CARD);
  doc.roundedRect(MX, boxY, CW, boxH, 10, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('DETECCIÓN AUTOMÁTICA', MX + 18, boxY + 20);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...ACCENT);
  doc.text(nombreLines, MX + 18, boxY + 42);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(...GRAY);
  doc.text(accionLines, MX + 18, boxY + 42 + nombreLines.length * 14 * LH + 10);
  y = boxY + boxH + 30;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...WHITE);
  y = wrap('Errores que destruyen la confianza del cliente', MX, y, CW, 13) + 18;
  const errFix = [
    ['Coordinar todo por WhatsApp y memoria', 'Un solo lugar donde vive el estado de cada carga'],
    ['Prometer sin poder confirmar', 'Responder con datos en tiempo real'],
    ['Cargas detenidas sin que nadie note', 'Alerta automática por demora excedida'],
    ['Reprocesar reportes a mano cada semana', 'Reportes que se arman solos'],
  ];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('HOY', MX + 16, y);
  doc.text('CON INITGRAMMERS', MX + colW + 24 + 16, y);
  y += 20;
  errFix.forEach((pair) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...GRAY);
    const lLines = doc.splitTextToSize(pair[0], colW - 18);
    const rLines = doc.splitTextToSize(pair[1], colW - 18);
    doc.setFillColor(...MUTED);
    doc.circle(MX + 4, y - 3, 3, 'F');
    doc.setFillColor(...ACCENT);
    doc.circle(MX + colW + 24 + 4, y - 3, 3, 'F');
    doc.text(lLines, MX + 16, y);
    doc.text(rLines, MX + colW + 24 + 16, y);
    y += Math.max(lLines.length, rLines.length) * 10 * LH + 12;
  });
  footer(4, TOTAL_PAGES);

  // PÁGINA 5 · CIERRE
  doc.addPage();
  pageBg();
  brand();
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...MUTED);
  y = wrap('CIERRE', MX, 120, CW, 10) + 20;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...WHITE);
  y = wrap('No es falta de gente. Es falta de visibilidad.', MX, y, CW, 24) + 20;
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...GRAY);
  y = wrap(`${empresa} no necesita más personal ni más horas. Necesita ver la operación completa en tiempo real, antes de que el cliente llame.`, MX, y, CW, 12) + 34;

  const boxY2 = y;
  const boxW2 = (CW - 16) / 2;
  doc.setFillColor(...CARD);
  doc.roundedRect(MX, boxY2, boxW2, 100, 10, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('GASTAS DE MÁS HOY', MX + 18, boxY2 + 24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...WHITE);
  doc.text(fmtUSD(r.gastoDeMasAnual), MX + 18, boxY2 + 54);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('AL AÑO', MX + 18, boxY2 + 74);

  const box2X = MX + boxW2 + 16;
  doc.setFillColor(...CARD);
  doc.roundedRect(box2X, boxY2, boxW2, 100, 10, 10, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('PODRÍAS RECUPERAR', box2X + 18, boxY2 + 24);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...ACCENT);
  doc.text(fmtUSD(r.ahorroAnual), box2X + 18, boxY2 + 54);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text('AL AÑO', box2X + 18, boxY2 + 74);
  y = boxY2 + 100 + 34;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...GRAY);
  y = wrap('Cada carga que no puedes ubicar es un cliente que empieza a dudar. El control no es un lujo: es lo que te deja crecer sin miedo.', MX, y, CW, 11) + 30;

  doc.setFillColor(...ACCENT);
  doc.rect(MX, y, 3, 34, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...WHITE);
  doc.text('Hablemos de tu diagnóstico', MX + 16, y + 22);
  y += 50;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  doc.text('info@initgrammers.com · +51 XXX XXX XXX', MX, y);
  footer(5, TOTAL_PAGES);

  return doc.output('blob');
};

export default generateReportPdfBlob;
