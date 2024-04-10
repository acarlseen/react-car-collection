
export default function Dashboard() {
    return (
        <div className="container">

        <div className="flex flex-row w-100 justify-evenly">
            <div className="flex flex-col border-black border-2 w-1/4 mt-48">
                <div className="border-2 border-black h-1/3">
                    Profile
                </div>
                <div className="border-2 border-black">
                    Calendar
                </div>
            </div>
            <div className="flex flex-col border-black border-2 h-80 w-3/5 mt-48">
                Car Table
            </div>
            
        </div>
        <div className="flex flex-row w-100 justify-center my-10 h-80">
            <div className="flex flex-col border-2 border-black w-4/5">

            Messages
            </div>
        </div>
        </div>
    )
}
