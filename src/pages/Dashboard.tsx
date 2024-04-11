import Background from '../assets/img/rear-fender-2.jpg'

export default function Dashboard() {
    // TODO - add widgets for calendar, Car Table
    return (
        <div className="pt-32 bg-cover bg-no-repeat bg-fixed w-full h-full p-5"
            style={{backgroundImage : `url(${Background})`}}>
            <div className="flex flex-row w-100 justify-evenly p-5">
                <div className="flex flex-col  w-1/4 bg-white  rounded bg-opacity-50">
                    <div className="p-5  h-1/3">
                        Profile
                    </div>
                    <div className="p-5">
                        Calendar
                    </div>
                </div>
                <div className="flex flex-col p-5 h-80 w-3/5 rounded bg-white bg-opacity-50">
                    Car Table
                </div>
                
            </div>
            <div className="flex flex-row w-100 gap-10 m-10 h-80">
                <div className="rounded p-5 w-1/2 bg-white bg-opacity-50">

                Event Details
                </div>
                <div className="rounded p-5 w-1/2 bg-white bg-opacity-50 rounded-br-xl">

                Messages
                </div>
            </div>
        </div>
    )
}
