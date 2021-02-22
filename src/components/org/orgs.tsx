import styles from "../../../styles/Org.module.css";
import Link from "next/link";

export default function Orgs({orgs}) {
    return (
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
                orgs?.map(org => <tr key={org.id}>
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
    )
}
