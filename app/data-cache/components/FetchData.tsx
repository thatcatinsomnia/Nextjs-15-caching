export default async function FetchData() {
    const res = await fetch('http://localhost:3000/api/random');
    const { data } = await res.json();

    return (
        <div className="p-4 bg-pink-500 rounded">Data: {data}</div>
    );
}

