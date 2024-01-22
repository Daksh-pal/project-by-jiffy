import { Link } from "react-router-dom"
export default function Welcome(){
    return (
        <div className="bg-green-50 h-screen flex justify-center items-center">
            <div>
            <p className="mb-3 font-bold text-4xl text-blue-800 text-center">
            Welcome, Jiffy Software
            </p>
            <div className="flex ">
                    <Link to="/login" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue w-full text-center mx-1">
                        Login
                    </Link>
                    <Link to="/register" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue w-full text-center mx-1">
                        Register
                    </Link>
            </div>
            </div>
        </div>
    )
}