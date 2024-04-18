import { useState } from "react"
import { server_calls } from "../api/server"
import { useGetData } from "../custom-hooks/GetCars"
import AddVehicleModal from "./AddVehicleModal"


// Attempting to make this row of buttons a separate component

type Props = {
    selectionModel : string[],

}

const OwnerOptions = (props: Props) => {
    const {carData, getData} = useGetData()
    const [openModal, setOpenModal] = useState(false)

    const changeModalState = () => {
        setOpenModal(!openModal)
    }

    const handleClick = () => {
        console.log(props.selectionModel)
        alert('Are you sure you want to delete?')
    }

    const handleUpdate = () => {

    }

    const deleteData = () => {
        for (let i=0; i < props.selectionModel.length; i++){
            server_calls.delete(props.selectionModel[i])
        }
        getData();

    }
    return(
        <div className="flex flex-row justify-center gap-5">
            <AddVehicleModal open={openModal} onClose={changeModalState}/>
                <button onClick={changeModalState}
                className="my-5 bg-red-500 w-1/4 h-10 rounded-lg">
                    Add Vehicle
                </button>
                {props.selectionModel.length == 1 ?
                    <button onClick={handleClick}
                    className="my-5 bg-red-500 w-1/4 h-10 rounded-lg">
                        Update
                    </button>
                : 
                    <button
                    className="my-5 bg-gray-400 w-1/4 h-10 rounded-lg text-white">
                        Update
                    </button>
                }
                {props.selectionModel.length == 0 ?
                    <button
                    className="my-5 bg-gray-400 w-1/4 h-10 rounded-lg text-white">
                        Delete
                    </button>
                :
                    <button onClick={deleteData}
                    className="my-5 bg-red-500 w-1/4 h-10 rounded-lg">
                        Delete
                    </button>
                }
                
            </div>
    )
}

export default OwnerOptions;