import Boundary from "#/components/Boundary";
import { fetchUsers } from "#/helpers/fetchUsers";

export default async function FetchWithNextRevalidateExample() {
    const users = await fetchUsers({ next: { revalidate: 3 }});

    return (
        <div className="pt-4 mb-4">
            <Boundary title="FetchWithNextRevalidate">
                {users.join(', ')}
            </Boundary>
        </div>
    );
}

