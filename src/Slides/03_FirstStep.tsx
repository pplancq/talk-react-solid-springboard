import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const FirstStepSlide = () => {
  return (
    <Slide>
      <Title variant="h2">
        SOLID in React
        <small style={{ display: 'block' }}>
          <em>First Step to Clean React Architecture</em>
        </small>
      </Title>
      <List>
        <ListItem fragment>
          Apply SOLID to achieve <strong>modular</strong>, <strong>testable</strong> & <strong>maintainable</strong>{' '}
          code
        </ListItem>
        <ListItem fragment>
          In React, ensure components/hooks are <strong>isolated</strong>, <strong>swappable</strong> &{' '}
          <strong>mockable</strong>
        </ListItem>
        <ListItem fragment>We’ll unpack each SOLID principle with real-world React examples</ListItem>
      </List>
    </Slide>
  );
};
