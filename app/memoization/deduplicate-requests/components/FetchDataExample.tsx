import ExampleBlock from '#/components/ExampleBlock';
import FetchRandomData from './FetchRandomData';

export default function ComponentFetchDataExample() {
    return (
        <ExampleBlock className="space-y-4">
            <FetchRandomData />
            <FetchRandomData />
        </ExampleBlock>
    );
}
