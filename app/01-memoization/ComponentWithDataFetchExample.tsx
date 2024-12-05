import ExampleBlock from '#/components/ExampleBlock';
import ComponentWithDataFetch from './ComponentWithDataFetch';

export default function ComponentFetchDataExample() {
    return (
        <ExampleBlock className="space-y-4">
            <ComponentWithDataFetch />
            <ComponentWithDataFetch />
        </ExampleBlock>
    );
}
