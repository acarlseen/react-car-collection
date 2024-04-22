import { useEffect, useState } from "react"
import { server_calls } from "../api/server";


export const useGetGarage = () => {
    const [garageData, setData ] = useState<[]>([]);

    async function handleDataFetch () {
        const result = await server_calls.getGarage();
        setData(result);
    }

    useEffect( () => {
        handleDataFetch();
    }, []);

    return {garageData: garageData, getData:handleDataFetch}
}