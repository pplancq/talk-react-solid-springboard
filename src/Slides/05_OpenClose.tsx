import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { NoteMarkdown } from '@Front/components/NoteMarkdown';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const OpenCloseSlide = () => {
  return (
    <Slide>
      <Slide autoAnimate>
        <Title variant="h2">Open/Closed Principle (OCP)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Open/Closed Principle (OCP)</Title>
        <Paragraph>
          <strong>Official Definition</strong>
        </Paragraph>
        <Paragraph>“Software entities should be open for extension, but closed for modification.”</Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          <em>In React</em>
        </Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          Use props-driven patterns or HOCs to extend behavior without modifying existing code.
        </Paragraph>
        <NoteMarkdown>{`### Slide 5 – Open/Closed Principle (OCP)
- Déf. officielle : « Ouvert à l’extension, fermé à la modification »
- En React : étendre le comportement via props/HOC sans toucher au cœur du code
- Exemple Before (Button + icon-logic) / After (Button pur + withIcon HOC)
- Bénéfice : on peut ajouter des cas d’usage sans risquer de casser`}</NoteMarkdown>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <CodeBlock highlightLines="1-12|3-7,9,11|8,10" language="jsx">{`
const Button = ({ color, size, variant, icon, iconPlacement, children, ...props }) => (
  <button
    style={{ color, fontSize: size }}
    className={\`btn btn-\${variant}\`}
    {...props}
  >
    {iconPlacement === 'left'  && icon}
    {children}
    {iconPlacement === 'right' && icon}
  </button>
);
`}</CodeBlock>
        <Paragraph>Button mixes core rendering and icon-placement logic.</Paragraph>
        <NoteMarkdown>{`### Slide 5 – Open/Closed Principle (OCP)
- Déf. officielle : « Ouvert à l’extension, fermé à la modification »
- En React : étendre le comportement via props/HOC sans toucher au cœur du code
- Exemple Before (Button + icon-logic) / After (Button pur + withIcon HOC)
- Bénéfice : on peut ajouter des cas d’usage sans risquer de casser`}</NoteMarkdown>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <CodeBlock
          highlightLines="1-13"
          language="jsx"
        >{`const Button = ({ color, size, variant, children, ...props }) => (
  <button
    style={{ color, fontSize: size }}
    className={\`btn btn-\${variant}\`}
    {...props}
  >
    {children}
  </button>
);`}</CodeBlock>
        <CodeBlock
          highlightLines="1-13"
          language="jsx"
          fragment
          fragmentIndex={1}
        >{`const withIcon = Wrapped => ({ icon, iconPlacement = 'left', children, ...props }) => (
  <Wrapped {...props}>
    {iconPlacement === 'left'  && icon}
    {children}
    {iconPlacement === 'right' && icon}
  </Wrapped>
);`}</CodeBlock>
        <List>
          <ListItem fragment fragmentIndex={2}>
            Button is now closed for modification.
          </ListItem>
          <ListItem fragment fragmentIndex={3}>
            Icon logic is added via <code>withIcon</code>, open for extension.
          </ListItem>
        </List>
        <NoteMarkdown>{`### Slide 5 – Open/Closed Principle (OCP)
- Déf. officielle : « Ouvert à l’extension, fermé à la modification »
- En React : étendre le comportement via props/HOC sans toucher au cœur du code
- Exemple Before (Button + icon-logic) / After (Button pur + withIcon HOC)
- Bénéfice : on peut ajouter des cas d’usage sans risquer de casser`}</NoteMarkdown>
      </Slide>
    </Slide>
  );
};
