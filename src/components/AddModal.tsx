import { VehicleForm } from "./VehicleForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) =>{
 
    if ( !props.open ) return (<></>);
    return(
        <div onClick={ props.onClose }
            className="fixed w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25"
        >
            <div
                className="max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded">
                <div 
                    onClick={e => e.stopPropagation()}
                    className="w-full flex-flex-col"
                >
                    <div className="flex flex-row space-apart">
                        <div
                            onClick={props.onClose} 
                            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white font-bold text-2xl">
                                &times;
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <VehicleForm id={ props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal