import {useRouter} from "next/router";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";

export default function Clinic() {
    const {query} = useRouter();
    return (
        <>
            <BaseLayout title={'Отделение'}>
                <h1>[{query.title}]</h1>
            </BaseLayout>
        </>
    );
}
// общий див для layout и футеру сделать margin top auto