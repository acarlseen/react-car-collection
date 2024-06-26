// TODO: maybe buttons belong in a separate component called OwnerOptions
//
// in order to make VehicleTable more re-useable (who am I kidding? I just want to complete the assignment)
// Hopefully re-useable for multiple views like:
//   myCollection, friendsCollection, publicUserCollection

import { useEffect, useState } from "react";
import { useGetGarage } from "../custom-hooks/GetGarage";


// vin = request.json['vin']
// make = request.json['make']
// model = request.json['model']
// year = request.json['year']
// color = request.json['color']
// car_name = request.json['car_name']
// owner = id

 import { DataGrid, GridColDef } from "@mui/x-data-grid";
import OwnerOptions from "./OwnerOptions";

const columns : GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90 },
    {field: 'car_name', headerName: 'Car Name', flex: 1.5},
    {field: 'make', headerName: 'Make', flex: 1},
    {field: 'model', headerName: 'Model', flex: 1},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'color', headerName: 'Color', flex: 1},
    {field: 'vin', headerName: 'VIN', flex: 1}
]



 export const VehicleTable = () => {
    const {garageData, getData } = useGetGarage()
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);
    const [ tableRefresh, setTableRefresh ] = useState(false);

    function handleRefresh() {
        setTableRefresh(true);
    }

    useEffect( () => {
        getData();
        setTableRefresh(false);
    }, [tableRefresh])

    console.log(`garageData: ${JSON.stringify(garageData)}`)

    return (
        <>
            <div className="flex bg-black bg-opacity-30 text-white">
                <DataGrid rows={garageData} columns={columns}
                        checkboxSelection={true} 
                        columnVisibilityModel={{id: false,}}
                        onRowSelectionModelChange={ (item:any) => {
                            setSelectionModel(item)
                        }}
                        initialState={{pagination: {paginationModel: {pageSize: 5} },
                    }}
                        pageSizeOptions={[5, 10]}
                        className="bg-white bg-opacity-80"/>
            </div>
            <OwnerOptions selectionModel={selectionModel} handleRefresh = { handleRefresh } />
        </>
    )
 }