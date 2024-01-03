import { NavLink, Outlet } from "react-router-dom"


const AdminDashboard = () => {

    const isadmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white shadow-2xl">
                <ul className="menu">
                    {
                        isadmin ? <>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/adminhome">Home</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/paymenthhistory">Payment History</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/alluser">All User</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/manageitem">Manage Items</NavLink></li>
                            <div className="py-4 pb-6">
                                <hr />
                            </div>
                        </> :
                            <>
                                {/*  */}
                            </>
                    }
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/">All Users</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default AdminDashboard