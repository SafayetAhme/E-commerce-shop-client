import { NavLink, Outlet } from "react-router-dom"


const UserDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white shadow-2xl">
                <ul className="menu">
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userprofile">Profile</NavLink></li>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userinfo">Information</NavLink></li>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/userdashboard/userpassword">Change password</NavLink></li>
                    <div className="py-4 pb-6">
                        <hr />
                    </div>
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/">All Users</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default UserDashboard