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
        <div className="flex flex-col justify-center items-center">
            <button
                className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 mb-2 rounded-md self-start"
                onClick={() => router.back()}
            >
                Back
            </button>
        </div>
        <div className={styles.details}>
            <div className={styles.section}><h4>Id:</h4><span>{orgDetails.data?.id}</span></div>
            <div className={styles.section}><h4>Name:</h4><span>{orgDetails.data?.name}</span></div>
        </div>
    </div>)
}
