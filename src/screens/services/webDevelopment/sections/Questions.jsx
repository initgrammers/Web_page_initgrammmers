import Accordion from '#Components/Accordion';
import SecctionContainer from '#Components/Sections/SecctionContainer';

const Questions = () => {
  const questions = [{
    id: 0,
    title: '¿Cómo mejoraría mi produccción?',
    details: ` Tus productos estarían disponibles en todo el mundo, se podrían
                hacer los pedidos con mucha facilildad y efectividad. Con un
                excelente servicio desde q usted se conecta con nosostros.`,
  },
  {
    id: 1,
    title: '¿Cómo mejoraría mi produccción?',
    details: `Tus productos estarían disponibles en todo el mundo, se podrían
                hacer los pedidos con mucha facilildad y efectividad. Con un
                excelente servicio desde q usted se conecta con nosostros.`,
  },
  {
    id: 2,
    title: '¿Cómo mejoraría mi produccción?',
    details: `Tus productos estarían disponibles en todo el mundo, se podrían
                hacer los pedidos con mucha facilildad y efectividad. Con un
                excelente servicio desde q usted se conecta con nosostros.`,
  }, {
    id: 3,
    title: '¿Cómo mejoraría mi produccción?',
    details: `Tus productos estarían disponibles en todo el mundo, se podrían
                hacer los pedidos con mucha facilildad y efectividad. Con un
                excelente servicio desde q usted se conecta con nosostros.`,
  }];
  return (
    <SecctionContainer head="Preguntas" emphasis="frecuentes">
      {questions.map(({ id, title, details }) => (
        <Accordion
          key={id}
          title={title}
          details={details}
        />
      ))}
    </SecctionContainer>
  );
};

export default Questions;
