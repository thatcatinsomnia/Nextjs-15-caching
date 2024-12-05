import Boundary from "#/components/Boundary";

export default function ComponentWithProps({ data }: { data: string[] }) {
    return (
        <Boundary title="ComponentWithProps">
            {data.join(', ')}
        </Boundary>
    );
}
