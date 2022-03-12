import {useRouter} from "next/router";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";

export default function Clinic() {
    const {query} = useRouter();
    return (
        <>
            <BaseLayout title={query.title}>
                <h1>{query.title}</h1>
            </BaseLayout>
        </>
    );
}