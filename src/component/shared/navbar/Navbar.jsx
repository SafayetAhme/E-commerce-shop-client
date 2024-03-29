import { Link, NavLink } from "react-router-dom"
import User from "./User"
import Search from "./Search"
import Logo from "./Logo"
import Category from "../../page/category/Category"
import './navbar.css';



const Navbar = () => {

    const isadmin = true;

    const navLinks = <>
        <li className='nav-link font-semibold lg:text-black'><NavLink to="/">Home</NavLink></li>
        <li className='nav-link font-semibold lg:text-black'><NavLink to="/shop">Shop</NavLink></li>
        <li className='nav-link font-semibold lg:text-black'><NavLink to="/blog">Blog</NavLink></li>
        <li className='lg:text-black font-semibold nav-link'><NavLink to="/aboutus">About Us</NavLink></li>
        <li className='lg:text-black font-semibold nav-link'><NavLink to="/contact">Contact</NavLink></li>
        {
            isadmin ? <>
                <li className='lg:text-black font-semibold nav-link'><NavLink to="/adminDashboard">Dashboard</NavLink></li>
            </> : <>
                {/*  */}
            </>
        }
    </>

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-white justify-between px-5">
                    <div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square  text-black btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex px-2 mx-2 py-0"><Link><Logo></Logo></Link></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {navLinks}
                            </ul>
                        </div>
                    </div>

                    <div className='hidden lg:flex items-center  gap-10'>
                        <div >
                            <Search />
                        </div>

                        <div>
                            <User />
                        </div>
                    </div>
                </div>

            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    <div className='flex justify-end mb-6'>
                        <User />
                    </div>
                    <div className='mb-6'>
                        <Search />
                    </div>
                    {navLinks}

                </ul>

            </div>
        </div>
    )
}

export default Navbar