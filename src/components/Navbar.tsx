import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const dropDown = () => {
        setIsExpanded(!isExpanded)
    }

    const signOutOnclick = () => {
        logout();
    }

    const signInOnClick = () => {
        loginWithRedirect();
    }

    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6 fixed w-full shadow-lg z-10">
            <div>
                <Link to='/'>
                    <button className='text-white font-semibold hover:text-yellow-300'>
                        Car Collection
                    </button>
                </Link>
            </div>
            <div className="block">
                <button
                    onClick={dropDown} 
                    className="flex items-center px-3 py-2 text-white 
                    border rounded border-white hover:text-yellow-300 hover:border-white"
                    >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            { isExpanded ? (
            <div className='w-full flex-grow'>
                <div className='flex items-center justify-evenly'>
                    <Link to='/dashboard'
                        onClick={dropDown}
                        className='text-white hover:text-yellow-300'>
                        <button>
                            Dashboard
                        </button>
                    </Link>
                    <Link to='/addvehicle'
                        onClick={dropDown}
                        className='text-white hover:text-yellow-300'>
                        <button>
                            +Vehicle
                        </button>
                    </Link>
                    <Link to='/about'
                        onClick={dropDown}
                        className='text-white hover:text-yellow-300'>
                        <button>
                            About
                        </button>
                    </Link>
                    {
                        !isAuthenticated ?
                            <Link to='/' onClick={signInOnClick}
                            className='text-white hover:text-yellow-300'>
                                Sign In                                    
                            </Link>
                        :
                            <Link to='/' onClick={ signOutOnclick }
                            className='text-white hover:text-yellow-300'>
                                Sign Out
                            </Link>
                    }
                </div>
            </div>
            )
            :
            <></>}
        </nav>
        <div className="h-20">
        </div>
        </>
    );
}
