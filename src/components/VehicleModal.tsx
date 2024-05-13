import { VehicleForm } from "./VehicleForm";

type Props = {
    id?: string[];
    carIDs: string[];
    onClose: () => void,
    handleRefresh: () => void,
}

const VehicleModal = ( props: Props ) =>{
    return(
        <div onClick={ props.onClose }
            className="fixed top-10 left-0 w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-black bg-opacity-50"
        >
            <div
                className="overflow-y-auto h-4/5 w-3/5 max-w-600px flex z-1 mt-20 bg-white shadow-xl rounded">
                <div 
                    onClick={e => e.stopPropagation()}
                    className="w-full flex-flex-col"
                >
                    <div className="flex flex-row space-apart">
                        <div
                            onClick={props.onClose} 
                            className="flex fixed justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white font-bold text-2xl">
                                &times;
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <VehicleForm id={ props.id } carIDs={ props.carIDs } onClose={props.onClose} handleRefresh={props.handleRefresh}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VehicleModal