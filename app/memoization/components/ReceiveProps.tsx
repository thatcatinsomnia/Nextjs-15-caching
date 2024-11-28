export default function ReceiveProps({ data }: { data: string }) {
    return (
        <div className="p-4 bg-pink-500 rounded">
            <p>data: {data}</p>
        </div>
    );
}
