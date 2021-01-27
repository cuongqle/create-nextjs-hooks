import axios from "axios";
import {useEffect, useState} from "react";

type FetchState = {
    data: any;
    error: any;
    loading: boolean;
}

export function useFetch(url, options = null): FetchState {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url, options);
                const json = await res.data;
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return {data, error, loading};
};
