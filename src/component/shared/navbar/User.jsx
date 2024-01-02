import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";


const User = () => {

    const user = true;

    return <div>

        {
            user ? <div className="flex items-center gap-3">

                <div>
                    <button className="text-lg bg-gray-200 rounded-full p-4"><FaRegHeart /></button>
                </div>

                <div className="indicator">
                    <button className="text-lg bg-gray-200 rounded-full p-4"> <FaCartShopping /></button>
                    <span className="badge badge-sm indicator-item">0</span>
                </div>


                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full object-contain">
                            <img alt="User" className="object-cover" src="https://i.ibb.co/jyk7NGb/blank-black-white-image-placeholder-icon-design-178700106.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <p className="text-center my-3 font-semibold">{user?.displayName}</p>
                        <Link className="mb-3 text-center text-primary hover:underline font-medium" to="/dashboard">Dashboard</Link>
                        <button  className="w-full bg-red-600 rounded-lg font-semibold btn hover:text-black text-white py-2">Sign out</button>
                    </ul>
                </div>

            </div>
                :
                <div>
                    <NavLink to="/signin" className="lg:text-white font-semibold hidden lg:inline">Sign In</NavLink>
                    <NavLink to="/signin" className="lg:text-white font-semibold lg:hidden text-2xl"><FaUserPlus /></NavLink>
                </div>
        }
    </div>
}

export default User