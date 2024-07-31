import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function loadClarityScript(id) { // Función con nombre
  // const clarity = window.clarity || (window.clarity = { q: [] });
  const script = document.createElement('script');
  script.async = 1;
  script.src = `https://www.clarity.ms/tag/${id}`;
  const [firstScript] = document.getElementsByTagName('script'); // Destructuring
  firstScript.parentNode.insertBefore(script, firstScript);
}

const HeatMap = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    loadClarityScript('5j6xtz09j7'); // Llamando a la función

    router.events.on('routeChangeComplete', () => loadClarityScript('5j6xtz09j7')); // Lambda para consistencia

    return () => {
      router.events.off('routeChangeComplete', () => loadClarityScript('5j6xtz09j7'));
    };
  }, [router.events]);

  return children;
};

export default HeatMap;
