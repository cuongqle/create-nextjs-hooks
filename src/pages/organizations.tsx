import styles from "../../styles/Org.module.css";
import {useOrganizations} from "../hooks/org.hook";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Organizations() {
    const orgs = useOrganizations();
    if (orgs.loading) {
        return <div className={styles.container}>
            Loading
        </div>
    }
    const router = useRouter()
    return (
        <div className={styles.container}>
            <span className={styles.button} onClick={() => router.back()}>Back</span>
            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    orgs.data?.map(org => <tr key={org.id}>
                        <td>{org.id}</td>
                        <td>{org.name}</td>
                        <td><Link href={{
                            pathname: '/organization/[id]',
                            query: { id: org.id },
                        }}>Detail</Link></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
