import ExampleBlock from "#/components/ExampleBlock";
import ReceiveProps from './ReceiveProps';

import { fetchRandom } from "#/helpers/fetchRandom";

export default async function ReceivePropsExample() {
    const res = await fetchRandom();
    const { data } = await res.json();

    return (
        <ExampleBlock className="space-y-4">
            <ReceiveProps data={data} />
            <ReceiveProps data={data} />
        </ExampleBlock>
    );
}
