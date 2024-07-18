export const FB_PIXEL_ID = '1106586933174587';

export function initialize(pixelId) {
  if (!pixelId) {
    throw new Error('Facebook Pixel ID not found. Make sure you have set the NEXT_PUBLIC_FACEBOOK_PIXEL_ID environment variable.');
  }

  // Verificamos si fbq ya está definido para evitar múltiples inicializaciones
  if (typeof window !== 'undefined' && !window.fbq) {
    // Creamos un array temporal para almacenar eventos antes de que fbq esté listo
    window.fbq = function() {
      (window.fbq.queue = window.fbq.queue || []).push(arguments);
    };

    // Cargamos el script de Facebook Pixel de forma asíncrona
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    document.head.appendChild(script);

    // Inicializamos fbq y procesamos los eventos en cola
    script.onload = () => {
      fbq('init', pixelId);
      fbq('track', 'PageView');

      // Procesamos los eventos que se agregaron a la cola antes de que fbq estuviera listo
      window.fbq.queue.forEach((args) => fbq.apply(null, args));

      // Reasignamos fbq para su comportamiento normal
      window.fbq = function() {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
    };
  }
}

export function pageview() {
  if (typeof window !== 'undefined') {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    } else {
      window.fbq = function() {
        (window.fbq.queue = window.fbq.queue || []).push(arguments);
      };
      window.fbq('track', 'PageView');
    }
  }
}

export function event(name, options = {}) {
  if (typeof window !== 'undefined') {
    if (window.fbq) {
      window.fbq('track', name, options);
    } else {
      window.fbq = function() {
        (window.fbq.queue = window.fbq.queue || []).push(arguments);
      };
      window.fbq('track', name, options);
    }
  }
}
