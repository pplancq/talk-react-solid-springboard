import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { NoteMarkdown } from '@Front/components/NoteMarkdown';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const IntroductionCleanArchitectureSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Introduction to Clean Architecture</Title>
      <List>
        <ListItem fragment>
          Family of design styles (hexagonal, onion, DDD) for <strong>robust</strong>, <strong>modular</strong>,{' '}
          <strong>maintainable</strong> systems
        </ListItem>
        <ListItem fragment>
          Emphasizes <strong>separation of concerns</strong>, <strong>decoupling</strong>,{' '}
          <strong>layered independence</strong>, and <strong>testability</strong>
        </ListItem>
        <ListItem fragment>
          Guided by principles like <strong>SOLID</strong>, <em>KISS</em>, and <em>DRY</em>
        </ListItem>
        <ListItem fragment>
          <strong>Why React?</strong> Growing complexity demands these principles on the front-end
        </ListItem>
      </List>
      <NoteMarkdown>{`### Slide 2 – Introduction to Clean Architecture
- Définition rapide
    - Famille de styles (hexagonal, onion, DDD) visant modularité, robustesse, maintenabilité
- Mots‐clés : séparation des préoccupations, découplage, indépendance des couches, testabilité
- Guidé par SOLID, KISS, DRY
- Pourquoi React ?
    - La complexité des front‐ends grandit : plus de composants, d’interfaces, de responsabilités
    - SOLID aide à garder un code propre et évolutif`}</NoteMarkdown>
    </Slide>
  );
};
