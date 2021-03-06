import styles from "../../styles/Org.module.css";
import {useOrganizations} from "../hooks/org.hook";
import {useRouter} from "next/router";
import Orgs from "../components/org/orgs";

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
            <div className="flex flex-col justify-center items-center">
                <button
                    className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 mb-2 rounded-md self-start"
                    onClick={() => router.back()}
                >
                    Back
                </button>
            </div>
            <Orgs orgs={orgs.data}/>
        </div>
    )
}
