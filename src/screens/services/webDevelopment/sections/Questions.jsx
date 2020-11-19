import Accordion from '#Components/Accordion';
import SecctionContainer from '#Components/Sections/SecctionContainer';
import { questions } from '#constants/services/webDevelopment';

const Questions = () => (
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

export default Questions;
