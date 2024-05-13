import { useAuth0 } from '@auth0/auth0-react'
import Background from '../assets/img/rear-fender-2.jpg'
import { EventCalendar } from '../components/DateCalendar'
import { VehicleTable } from '../components/VehicleTable'

export default function Dashboard() {
    // TODO - add UUID and Token? Definitely pull profile info from DB
    const { user, isAuthenticated, isLoading } = useAuth0();


    if (isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className="bg-cover bg-no-repeat bg-fixed w-full h-full p-5"
            style={{backgroundImage : `url(${Background})`}}>
            <div className="flex flex-row w-100 gap-10 p-5">
                <div className="flex flex-col  w-2/5 bg-white  rounded-lg bg-opacity-50">
                    {isAuthenticated && (
                    <div className="p-5  h-1/3 bg-white bg-opacity-80 m-5 rounded-xl">
                        <span className='font-bold'>Profile <br /></span>
                        Name: { user!.name } <br /> 
                        Email: {user!.email} 
                    </div>)}
                    <div className="p-5 bg-white bg-opacity-80 m-5 rounded-xl">
                        <EventCalendar />
                    </div>
                </div>
                <div className="flex flex-col p-5 h-100 w-3/5 rounded-lg bg-white bg-opacity-50">
                    <VehicleTable />
                </div>
                
            </div>
            <div className="flex flex-row w-100 gap-10 m-10 h-80">
                <div className="rounded-lg p-5 w-1/2 bg-white bg-opacity-50">

                Event Details
                </div>
                <div className="rounded-lg p-5 w-1/2 bg-white bg-opacity-50 rounded-br-xl">

                Messages
                </div>
            </div>
        </div>
    )
}
