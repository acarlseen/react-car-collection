import Background from '../assets/img/import-meet.jpg'

export default function Home(){
    const greeting = 'Welcome to your Car Collection'
    return ( 
    <div style={{backgroundImage: `url(${Background})`}}
        className='bg-cover bg-no-repeat bg-center bg-[url({Background})] bg-gradient-to-br from-black to-yellow-300
        max-h-full bg-fixed'>

          <div
            className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
            >
              <div className="flex place-items-center h-screen top-10">
                <h3 className='bg-black bg-opacity-30 rounded p-3 text-white text-xl font-semibold'>
                  { greeting }
                </h3>
              </div>
            
        </div>
    </div>
)
}