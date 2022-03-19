import {useRouter} from "next/router";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";

export default function Doctor() {
    const {query} = useRouter();

    return (
        <>
            <BaseLayout title={query.id}>
                <h1>{query.id}</h1>
            </BaseLayout>
        </>
    );
}