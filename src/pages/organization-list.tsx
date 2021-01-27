import styles from "../../styles/Org.module.css";
import {useOrganizations} from "../hooks/org.hook";
import {useRouter} from "next/router";

export default function OrganizationList() {
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
            <table className={styles.orgsTable}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orgs.data?.map(org => <tr key={org.id}>
                        <td>{org.id}</td>
                        <td>{org.name}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
