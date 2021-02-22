import ParentComponent from "../components/memo/parent";
import styles from "../../styles/Org.module.css";
import {useRouter} from "next/router";

export default function MemoPage() {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className="flex flex-col justify-center items-center">
                <button
                    className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 rounded-md"
                    onClick={() => router.back()}
                >
                    Back
                </button>
            </div>
            <ParentComponent title={'Without React.memo()'} withoutMemo={true}/>
            <ParentComponent title={'With React.memo()'} withReactMemo={true}/>
            <ParentComponent title={'With Use memo'} withUseMemo={true}/>
        </div>
    )
}
