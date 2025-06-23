import { NoteMarkdown } from '@Front/components/NoteMarkdown';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const MainTitleSlide = () => {
  return (
    <Slide>
      <Title>
        SOLID in React
        <small>
          <em>The Springboard to Clean Architecture</em>
        </small>
      </Title>
      <NoteMarkdown>{`### Slide 1 – Titre
- Salutation & introduction brève
    - « Bonjour à toutes et à tous ! »
    - Sujet : appliquer SOLID dans React pour tendre vers une Clean Architecture`}</NoteMarkdown>
    </Slide>
  );
};
