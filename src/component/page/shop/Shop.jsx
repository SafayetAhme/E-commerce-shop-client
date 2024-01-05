import { Link } from "react-router-dom"
import banner from "../../../../public/image/banner.png"
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { Rating } from "@mui/material";
import UseMenus from "../../hooks/UseMenus";


const Shop = () => {
    const [menus] = UseMenus();

    return (
        <div className="container mx-auto">
            <div className="text-center py-24" style={{ backgroundImage: `url(${banner})` }}>
                <Link to="/">
                    <button className="text-xl font-medium px-6 py-2 border-black border hover:bg-black rounded-md hover:text-white">Home</button>
                </Link>
                <h1 className="text-gray-800 text-4xl font-rubik font-bold pt-2">Welcome to The Shop</h1>
            </div>

            {/* filter section */}
            <div className="grid py-10 md:grid-cols-4 px-12 col-span-4">
                <div className=" col-span-1">
                    <h1 className="font-rubik text-2xl pb-2 font-bold"> Filter</h1>

                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                    <div className="pt-6">
                        <h1 className="font-rubik text-lg pb-3  font-bold">Price</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">40-60</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">60-80</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">80-100</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">100-120</h1>
                        <h1 className="font-rubik text-base hover:underline text-gray-600 font-bold">120-200</h1>
                    </div>

                    <div className="pt-6">
                        <h1 className="font-rubik text-lg pb-3 font-bold">Categories</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">Caps</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">Begs</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">T-shirt</h1>
                        <h1 className="font-rubik text-base hover:underline pb-2 text-gray-600 font-bold">Shirt</h1>
                        <h1 className="font-rubik text-base hover:underline text-gray-600 font-bold">Hoodie</h1>
                    </div>

                    <div className="pt-6">
                        <h1 className="font-rubik text-lg pb-3 font-bold">Star</h1>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 star</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 star</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 star</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">5 star</label>
                        </div>
                    </div>

                    <div className="pt-6">
                        <h1 className="font-rubik text-lg pb-3 font-bold">Size</h1>
                        <button className="border mr-2 px-4 py-1 font-medium hover:bg-black hover:text-white">XL</button>
                        <button className="border mr-2 px-4 py-1 font-medium hover:bg-black hover:text-white">SM</button>
                        <button className="border mr-2 px-4 py-1 font-medium hover:bg-black hover:text-white">S</button>
                        <button className="border mr-2 px-4 py-1 font-medium hover:bg-black hover:text-white">M</button>
                        <button className="border px-4 py-1 font-medium hover:bg-black hover:text-white">L</button>
                    </div>
                </div>

                <div className="col-span-3 pl-8 pt-2">
                    <div className=" flex items-center h-fit justify-between ">
                        <div className="flex items-center gap-2">
                            <div>
                                <CgMenuGridR className="text-4xl hover:bg-black hover:text-white border p-1" />
                            </div>
                            <div>
                                <IoMdMenu className="text-4xl hover:bg-black hover:text-white border p-1" />
                            </div>
                        </div>
                        <div>
                            <select id="countries" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>

                    {/* all card */}
                    <div>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-center" className="grid pt-6 md:grid-cols-3 gap-6 pb-14 items-center">
                            {
                                menus.map(item =>
                                    <div className="">
                                        <Link to={`/menusdetails/${item._id}`}>
                                            <img className="w-full rounded-xl" src={item.image} alt="" />
                                        </Link>
                                        <div>
                                            <h1 className="text-xl font-bold">{item.name}</h1>
                                            <div className="flex pt-2 pb-1 justify-between">
                                                <h2 className="card-title">
                                                    <Rating style={{ maxWidth: 115 }}
                                                        value={item.ratting}
                                                        readOnly />
                                                </h2>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h1 className="text-lg font-bold">{item.price}</h1>
                                                <div className=" bg-[#edededb1] p-3 rounded-full left-14 ">
                                                    <LuShoppingCart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* pagination */}
                        <div className="">
                            <nav aria-label="Page navigation example">
                                <ul class="list-style-none flex">
                                    <li className="bg-[#f0f0f0] mr-2">
                                        <a
                                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                            href="#"
                                        >Previous</a
                                        >
                                    </li>
                                    <li className="bg-[#f0f0f0] mr-2">
                                        <a
                                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                            href="#"
                                        >1</a
                                        >
                                    </li>
                                    <li className="bg-[#f0f0f0] mr-2" aria-current="page">
                                        <a
                                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                            href="#"
                                        >2</a
                                        >
                                    </li>
                                    <li className="bg-[#f0f0f0] mr-2">
                                        <a
                                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                            href="#"
                                        >3</a
                                        >
                                    </li>
                                    <li className="bg-[#f0f0f0] mr-2">
                                        <a
                                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                                            href="#"
                                        >Next</a
                                        >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop