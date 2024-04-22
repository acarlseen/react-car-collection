import { useEffect, useState } from "react"
import { server_calls } from "../api/server";
 

export const useGetCar = (carID: string) => {
    const [carData, setData ] = useState<{}>({});

    async function handleDataFetch () {
        const result = await server_calls.getCar(carID);
        setData(result);
    }

    useEffect( () => {
        handleDataFetch();
    }, []);

    return {carData, getCarData:handleDataFetch}
}