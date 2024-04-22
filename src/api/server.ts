const token = 'bearer e3dc22a66e254f34267a2cce4cdb24cd9441d454b4666cf7'
//collection/94481f33-8150-4c15-90f8-087f3bfe4c6e
export const server_calls = {
    getGarage: async () => {
        const response = await fetch('https://car-collection-rdxv.onrender.com/api/collection/94481f33-8150-4c15-90f8-087f3bfe4c6e',
        {
            method: "GET",
            headers: {
                'x-access-token': token
            }
        })


        
        console.log(response);
        

        
        if (!response.ok){
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    },
    getCar: async (carID: string) => {
        const response = await fetch(`https://car-collection-rdxv.onrender.com/api/collection/94481f33-8150-4c15-90f8-087f3bfe4c6e/${carID}`,
        {
            method: "GET",
            headers: {
                'x-access-token': token
            }
        })


        
        console.log(response);
        

        
        if (!response.ok){
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    },
    create: async(data:any = {}, id: string) => {
        console.log(JSON.stringify(data));
        
        const response = await fetch(`https://car-collection-rdxv.onrender.com/api/collection/${id}`,
        {
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'x-access-token' : token
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data') 
        }

        return await response.json();
    },
    update: async(data: any, id: string, carID:string) => {
        const response = await fetch(`https://car-collection-rdxv.onrender.com/api/collection/${id}/${carID}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data');
        }

        return await response.json();
    },

    delete: async (id: string, carID:string) => {
        const response = await fetch(`https://car-collection-rdxv.onrender.com/api/collection/${id}/${carID}`,
        {
            method: "DELETE",
            headers: {
                'x-access-token': token
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data');
        }

        return await response.json();

    },
}