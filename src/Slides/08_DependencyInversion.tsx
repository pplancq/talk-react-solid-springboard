import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const DependencyInversionSlide = () => {
  return (
    <Slide>
      <Slide autoAnimate>
        <Title variant="h2">Dependency Inversion Principle (DIP)</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Dependency Inversion Principle (DIP)</Title>
        <Paragraph>
          <strong>Official Definition</strong>
        </Paragraph>
        <Paragraph>
          “High-level modules should not depend on low-level modules. Both should depend on abstractions.”
        </Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          <em>In React</em>
        </Paragraph>
        <Paragraph fragment fragmentIndex={0}>
          Depend on service interfaces (abstractions) rather than concrete implementations. Use Context or props to{' '}
          inject different behaviors.
        </Paragraph>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">React Example</Title>
        <List>
          <ListItem>
            Define the abstraction
            <CodeBlock language="ts">{`interface FetchService {
  fetchData(url: string): Promise<any>
}`}</CodeBlock>
          </ListItem>
          <ListItem fragment>
            Concrete implementations
            <div style={{ display: 'flex' }}>
              <CodeBlock language="ts">{`class ApiFetchService implements FetchService {
  fetchData = (url: string) => 
    fetch(url).then(r => r.json())
}`}</CodeBlock>
              <CodeBlock language="ts">{`class InMemoryFetchService implements FetchService {
  fetchData = (url: string) => 
    Promise.resolve({ data: 'mock' })
}`}</CodeBlock>
            </div>
          </ListItem>
          <ListItem fragment>
            Create a Context with a default
            <CodeBlock language="ts">{`const FetchContext = createContext<FetchService>(
  new ApiFetchService()
)`}</CodeBlock>
          </ListItem>
        </List>
      </Slide>

      <Slide autoAnimate>
        <Title variant="h3">Usage in a Component</Title>
        <CodeBlock highlightLines="1-13" language="ts">{`const DataViewer = ({ url }) => {
  const fetchService = useContext<FetchService>(FetchContext)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchService.fetchData(url).then(setData)
  }, [url, fetchService])

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}`}</CodeBlock>
        <Paragraph fragment>Swapping Implementations</Paragraph>
        <CodeBlock
          highlightLines="1-13"
          language="ts"
          fragment
        >{`<FetchContext value={new InMemoryFetchService()}>{...}</FetchContext>`}</CodeBlock>
        <List>
          <ListItem fragment>
            <strong>DIP in action:</strong> <code>DataViewer</code> relies only on the <code>FetchService</code>{' '}
            interface.
          </ListItem>
          <ListItem fragment>
            Switch fetch strategies (API vs. in-memory) without touching the component’s code.
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
