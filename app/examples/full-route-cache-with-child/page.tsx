import Boundary from "#/components/Boundary";
import StaticChild from "./StaticChild";
import DynamicChild from "./DynamicChild";

export default async function FullRouteCacheWithChildPage() {
    return (
        <div>
            <h2 className="py-8 text-2xl font-bold">Example of full route cache with dynamic child</h2>

            <div className="space-y-4">
                <Boundary title="Static Child">
                    <StaticChild />
                </Boundary>

                <Boundary title="Dynamic Child">
                    <DynamicChild />
                </Boundary>
            </div>
        </div>
    );
}
