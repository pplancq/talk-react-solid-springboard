import { Image } from '@Front/components/Image';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';
import repoQr from './github-qr.svg';

import defaultClasses from './10_FurtherReading.module.scss';

export const FurtherReadingSlide = () => {
  return (
    <Slide className={defaultClasses.slide}>
      <Title variant="h2">Further Reading</Title>
      <Paragraph fragment>
        <strong>Official Documentation</strong>
      </Paragraph>
      <List>
        <ListItem fragment>
          <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noreferrer">
            React Hooks
          </a>
        </ListItem>
        <ListItem fragment>
          <a href="https://react.dev/reference/react/createContext" target="_blank" rel="noreferrer">
            Context API
          </a>
        </ListItem>
      </List>
      <Paragraph fragment>
        <strong>Articles</strong>
      </Paragraph>
      <List>
        <ListItem fragment>
          <a
            href="https://medium.com/@ignatovich.dm/applying-solid-principles-in-react-applications-44eda5e4b664"
            target="_blank"
            rel="noreferrer"
          >
            Applying SOLID Principles in Your React Applications
          </a>
        </ListItem>
        <ListItem fragment>
          <a
            href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
            target="_blank"
            rel="noreferrer"
          >
            Clean Architecture by Uncle Bob
          </a>
        </ListItem>
      </List>
      <Paragraph fragment>
        <strong>Architecture Patterns & DDD</strong>
      </Paragraph>
      <List>
        <ListItem fragment>
          <a href="https://martinfowler.com/bliki/DomainDrivenDesign.html" target="_blank" rel="noreferrer">
            Domain-Driven Design (Martin Fowler)
          </a>
        </ListItem>
        <ListItem fragment>
          <a href="https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)" target="_blank" rel="noreferrer">
            Hexagonal Architecture (Software) – Wikipedia
          </a>
        </ListItem>
      </List>
      <Image src={repoQr} role="presentation" fragment />
    </Slide>
  );
};
