import React from "react";

function ChildComponent({memoizedValue}) {
    return (
        <div className="mt-3">
            <p className="dark:text-white max-w-md">
                I'll only re-render when you click <span className="font-bold text-indigo-400">Force render.</span>
            </p>
            <p className="dark:text-white">
                I've now rendered:{" "}
                <span className="dark:text-green-300 text-grey-900">{memoizedValue} time(s)</span>
            </p>
        </div>
    )
}

export default React.memo(ChildComponent)
