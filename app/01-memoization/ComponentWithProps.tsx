import Box from '#/components/Box';

export default function ComponentWithProps({ data }: { data: string[] }) {
    return (
        <Box name="ComponentWithProps">
            {data.join(', ')}
        </Box>
    );
}
