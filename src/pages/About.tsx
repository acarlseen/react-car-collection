import Background from '../assets/img/x-garage.jpg'

function About() {
  return (
    <div className=" bg-cover flex justify-center bg-no-repeat bg-fixed p-5"
      style={{backgroundImage: `url(${Background})` }}>
      
      <div className="flex justify-center place-items-center w-full h-screen ">
      
        <div className="w-1/2 bg-black text-gray-200 bg-opacity-70 rounded shadow-lg p-5 text-balance text-center mb-28">Car Collection launched in 2023 as a Flask-based application, and was redesigned in React in 2024.
          The concept is simple: you love cars, and so do we. This is a place to show off your collection and
          get plugged into your local community and events-- All in one place!
        </div>
      </div>
    </div>
  )
}

export default About