import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { NoteMarkdown } from '@Front/components/NoteMarkdown';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './06_LiskovSubstitution.module.scss';

export const LiskovSubstitutionSlide = () => {
  return (
    <Slide>
      <Slide autoAnimate>
        <Title variant="h2">Liskov Substitution Principle (LSP)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Liskov Substitution Principle (LSP)</Title>
        <Paragraph>
          <strong>Official Definition</strong>
        </Paragraph>
        <Paragraph>“Subtypes must be substitutable for their base types.”</Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          <em>In React</em>
        </Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          A component passed as a prop should honor the same interface, allowing seamless substitution.
        </Paragraph>
        <NoteMarkdown>{`### Slide 6 – Liskov Substitution Principle (LSP)
- Déf. officielle : « Les sous‐types doivent pouvoir remplacer leurs types de base »
- En React : passer un composant en prop doit toujours fonctionner
- Exemple Card + ActionButton interchangeable (Button vs IconButton)
- Bénéfice : interchangeabilité et contrat stable`}</NoteMarkdown>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <CodeBlock
          highlightLines="1-7|5"
          language="jsx"
        >{`const Card = ({ title, content, ActionButton, ...props }) => (
  <section className="card">
    <h2>{title}</h2>
    <p>{content}</p>
    <ActionButton {...props} />
  </section>
);`}</CodeBlock>
        <Paragraph>
          Here, <code>ActionButton</code> can be replaced by any component that respects the same interface.
        </Paragraph>
        <NoteMarkdown>{`### Slide 6 – Liskov Substitution Principle (LSP)
- Déf. officielle : « Les sous‐types doivent pouvoir remplacer leurs types de base »
- En React : passer un composant en prop doit toujours fonctionner
- Exemple Card + ActionButton interchangeable (Button vs IconButton)
- Bénéfice : interchangeabilité et contrat stable`}</NoteMarkdown>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <div className={defaultClasses.exampleGrid}>
          <Paragraph className={defaultClasses.title1}>Usage – Base Button</Paragraph>
          <CodeBlock highlightLines="1-13" language="jsx" className={defaultClasses.description1}>{`<Card
  title="Profile"
  content="User details"
  ActionButton={Button}
/>`}</CodeBlock>
          <Paragraph fragment fragmentIndex={1} className={defaultClasses.title2}>
            Usage – Substituted with IconButton
          </Paragraph>
          <CodeBlock
            highlightLines="1-13"
            language="jsx"
            fragment
            fragmentIndex={1}
            className={defaultClasses.description2}
          >{`const IconButton = withIcon(Button);
<Card
  title="Profile"
  content="User details"
  ActionButton={IconButton}
  icon={<SaveIcon />}
  iconPlacement="right"
/>`}</CodeBlock>
        </div>
        <List>
          <ListItem fragment fragmentIndex={2}>
            <strong>LSP Applied:</strong> <code>IconButton</code> substitutes <code>Button</code> without breaking{' '}
            <code>Card</code> both follow the same props contract.
          </ListItem>
          <ListItem fragment fragmentIndex={3}>
            Components remain interchangeable and behavior stays consistent.
          </ListItem>
        </List>
        <NoteMarkdown>{`### Slide 6 – Liskov Substitution Principle (LSP)
- Déf. officielle : « Les sous‐types doivent pouvoir remplacer leurs types de base »
- En React : passer un composant en prop doit toujours fonctionner
- Exemple Card + ActionButton interchangeable (Button vs IconButton)
- Bénéfice : interchangeabilité et contrat stable`}</NoteMarkdown>
      </Slide>
    </Slide>
  );
};
