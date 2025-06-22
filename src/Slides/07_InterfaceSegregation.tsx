import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const InterfaceSegregationSlide = () => {
  return (
    <Slide>
      <Slide autoAnimate>
        <Title variant="h2">Interface Segregation Principle (ISP)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Interface Segregation Principle (ISP)</Title>
        <Paragraph>
          <strong>Official Definition</strong>
        </Paragraph>
        <Paragraph fragment>“Clients should not be forced to depend on interfaces they do not use.”</Paragraph>
        <Paragraph fragment>
          <em>In React</em>
        </Paragraph>
        <Paragraph fragment>
          Break large prop interfaces into focused, composable interfaces so that components only receive what they
          need.
        </Paragraph>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <CodeBlock highlightLines="1-9" language="ts">{`interface TableProps {
  data: any[];
  sortable: boolean;
  filterable: boolean;
  pagination: { pageSize: number; current: number; };
  style?: CSSProperties;
  onRowClick?: (row: any) => void;
  // …many more options
}`}</CodeBlock>
        <Paragraph fragment>
          This interface tries to cover all possible table features, making it large and hard to maintain.
        </Paragraph>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <CodeBlock highlightLines="1-13" language="ts" fragment>{`interface DataProps   { data: any[]; }
interface SortProps   { sortable: boolean; }
interface FilterProps { filterable: boolean; }
interface PageProps   { pagination: { pageSize: number; current: number; }; }
interface UIProps     { style?: CSSProperties; }`}</CodeBlock>
        <CodeBlock highlightLines="1-13" language="ts" fragment>{`type TableProps = 
  DataProps & SortProps & FilterProps & PageProps & UIProps;

const Table = ({
  data, sortable, filterable, pagination, style
}: TableProps) => {
  /* … render table … */
};`}</CodeBlock>
        <List>
          <ListItem fragment>
            <strong>ISP in action:</strong> <code>Table</code> only depends on the exact props it uses.
          </ListItem>
          <ListItem fragment>Improves clarity, reduces unwanted coupling, and makes testing simpler.</ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
