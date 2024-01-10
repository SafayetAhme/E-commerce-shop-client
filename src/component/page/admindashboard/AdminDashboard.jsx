import { NavLink, Outlet } from "react-router-dom"
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";


const AdminDashboard = () => {

    const isadmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white shadow-2xl">
                <ul className="menu">
                    {
                        isadmin ? <>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/adminhome"> <FiHome />Dashboard</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/paymenthhistory"> <MdOutlinePayment /> Payment History</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/alluser"> <FaUserFriends /> All User</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/additem"> <MdManageHistory />Add Items</NavLink></li>
                            <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/adminDashboard/manageitem"> <MdManageHistory /> Manage Items</NavLink></li>
                            <div className="py-4 pb-6">
                                <hr />
                            </div>
                        </> :
                            <>
                                {/*  */}
                            </>
                    }
                    <li className="border rounded-md mb-2 hover:bg-black font-medium text-black hover:text-white"><NavLink to="/"> <FiHome />Home</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default AdminDashboard