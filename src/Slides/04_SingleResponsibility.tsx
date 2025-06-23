import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { NoteMarkdown } from '@Front/components/NoteMarkdown';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './04_SingleResponsibility.module.scss';

export const SingleResponsibilitySlide = () => {
  return (
    <Slide>
      <Slide autoAnimate>
        <Title variant="h2">Single Responsibility Principle (SRP)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Single Responsibility Principle (SRP)</Title>
        <Paragraph>
          <strong>Official Definition</strong>
        </Paragraph>
        <Paragraph>“A class (or component) should have only one reason to change.”</Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          <em>In React</em>
        </Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          Each component or hook must have a single responsibility.
        </Paragraph>
        <NoteMarkdown>{`### Slide 4 – Single Responsibility Principle (SRP)
- Déf. officielle : « Une classe/composant n’a qu’une seule raison de changer »
- En React : chaque composant ou hook fait une seule chose
- Exemple Before/After (Layout vs header/footer extraits)
- Bénéfice : meilleure lisibilité et testabilité`}</NoteMarkdown>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">React Example</Title>
        <CodeBlock highlightLines="1-13|3-6|8-11" language="jsx">{`const Layout = ({ children }) => (
  <>
    <header>
      <h1>Site Title</h1>
      <nav>/* nav links */</nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2025 MyCompany</p>
      <p>Contact: support@mycompany.com</p>
    </footer>
  </>
);`}</CodeBlock>
        <Paragraph>Which extra responsibilities is `Layout` taking on beyond page structure?</Paragraph>
        <NoteMarkdown>{`### Slide 4 – Single Responsibility Principle (SRP)
- Déf. officielle : « Une classe/composant n’a qu’une seule raison de changer »
- En React : chaque composant ou hook fait une seule chose
- Exemple Before/After (Layout vs header/footer extraits)
- Bénéfice : meilleure lisibilité et testabilité`}</NoteMarkdown>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <div className={defaultClasses.exempleGrid}>
          <CodeBlock
            className={defaultClasses.header}
            highlightLines="1-13"
            language="jsx"
            fragment
            fragmentIndex={1}
          >{`const Header = () => (
  <header>
    <h1>Site Title</h1>
    <nav>/* nav links */</nav>
  </header>
);`}</CodeBlock>
          <CodeBlock
            className={defaultClasses.footer}
            highlightLines="1-13"
            language="jsx"
            fragment
            fragmentIndex={2}
          >{`const Footer = () => (
  <footer>
    <p>© 2025 MyCompany</p>
    <p>Contact: support@mycompany.com</p>
  </footer>
);`}</CodeBlock>
          <CodeBlock
            className={defaultClasses.layout}
            highlightLines="1-13"
            language="jsx"
            fragment
            fragmentIndex={3}
          >{`const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);`}</CodeBlock>
        </div>
        <List>
          <ListItem fragment fragmentIndex={4}>
            Layout now focuses solely on structure.
          </ListItem>
          <ListItem fragment fragmentIndex={5}>
            Header and Footer each manage their own content, improving readability and testability.
          </ListItem>
        </List>
        <NoteMarkdown>{`### Slide 4 – Single Responsibility Principle (SRP)
- Déf. officielle : « Une classe/composant n’a qu’une seule raison de changer »
- En React : chaque composant ou hook fait une seule chose
- Exemple Before/After (Layout vs header/footer extraits)
- Bénéfice : meilleure lisibilité et testabilité`}</NoteMarkdown>
      </Slide>
    </Slide>
  );
};
