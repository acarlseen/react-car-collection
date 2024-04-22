import { useState } from "react"
import { server_calls } from "../api/server"
import { useGetGarage } from "../custom-hooks/GetGarage"
import VehicleModal from "./VehicleModal"


// Attempting to make this row of buttons a separate component

type Props = {
    selectionModel : string[],

}

const OwnerOptions = (props: Props) => {
    const { getData} = useGetGarage()
    const [openModal, setOpenModal] = useState(false)

    const changeModalState = () => {
        setOpenModal(!openModal)
    }

    const deleteData = () => {
        for (let i=0; i < props.selectionModel.length; i++){
            server_calls.delete('94481f33-8150-4c15-90f8-087f3bfe4c6e',props.selectionModel[i])
        }
        getData();
        window.location.reload

    }
    return(
        <div className="flex flex-row justify-center gap-5">
            {openModal ? 
                <VehicleModal onClose={changeModalState} carIDs={props.selectionModel} />
            :
                <></>
            }
            <button onClick={changeModalState}
            className="my-5 bg-black text-white hover:bg-yellow-300 hover:text-black w-1/4 h-10 rounded-lg">
                Add Vehicle
            </button>
            {props.selectionModel.length == 1 ?
                <button onClick={changeModalState}
                className="my-5 bg-black text-white hover:bg-yellow-300 hover:text-black w-1/4 h-10 rounded-lg">
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
                className="my-5 bg-black text-white hover:bg-yellow-300 hover:text-black w-1/4 h-10 rounded-lg">
                    Delete
                </button>
            }
            
        </div>
    )
}

export default OwnerOptions;