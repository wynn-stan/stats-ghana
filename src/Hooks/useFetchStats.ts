import { useEffect, useState } from "react";

export const useFetchStats = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("stats.json")
        .then(res => res.json())
        .then(data => setData(data));
    },[])

    return data;
}