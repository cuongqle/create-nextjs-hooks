import {useOrganizationDetails} from "../../hooks/org.hook";
import {useRouter} from "next/router";
import styles from "../../../styles/Org.module.css";

export default function Organization() {
    const router = useRouter()
    const orgDetails = useOrganizationDetails(router.query.id);
    if (orgDetails.loading) {
        return <div className={styles.container}>
            Loading
        </div>
    }
    return (<div className={styles.container}>
        <span className={styles.button} onClick={() => router.back()}>Back</span>
        <div className={styles.orgDetails}>
            <div className={styles.section}><h4>Id:</h4><span>{orgDetails.data?.id}</span></div>
            <div className={styles.section}><h4>Name:</h4><span>{orgDetails.data?.name}</span></div>
        </div>
    </div>)
}
