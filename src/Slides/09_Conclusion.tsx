import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './09_Conclusion.module.scss';

export const ConclusionSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Conclusion & Perspectives</Title>
      <Paragraph fragment>
        <strong>Key Takeaways</strong>
      </Paragraph>
      <List>
        <ListItem fragment>SOLID provides essential guidelines to structure clean, scalable React code.</ListItem>
        <ListItem fragment>
          Applying these principles progressively builds a strong foundation aligned with Clean Architecture.
        </ListItem>
      </List>
      <div className={defaultClasses.exampleGrid}>
        <Paragraph className={defaultClasses.title1} fragment>
          <strong>Benefits</strong>
        </Paragraph>
        <List className={defaultClasses.description1}>
          <ListItem fragment>Clear separation of concerns</ListItem>
          <ListItem fragment>Improved testability</ListItem>
          <ListItem fragment>Easier maintenance</ListItem>
          <ListItem fragment>Enhanced scalability</ListItem>
        </List>
        <Paragraph className={defaultClasses.title2} fragment>
          <strong>Cautions</strong>
        </Paragraph>
        <List className={defaultClasses.description2}>
          <ListItem fragment>Beware of over-engineering, especially on small projects</ListItem>
          <ListItem fragment>Stay pragmatic and adapt solutions to your context</ListItem>
        </List>
      </div>
    </Slide>
  );
};
