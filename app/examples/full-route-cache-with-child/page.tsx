import StaticChild from "./StaticChild";
import DynamicChild from "./DynamicChild";

export default async function FullRouteCacheWithDynamicAPIPage() {
    return (
        <div className="pt-24">
            <h2 className="py-12 text-2xl font-bold">example of full route cache with dynamic child</h2>

            <div className="space-y-4">
                <StaticChild />

                <DynamicChild />
            </div>
        </div>
    );
}
