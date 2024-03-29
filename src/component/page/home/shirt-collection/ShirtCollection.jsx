
import { Link } from "react-router-dom";
import UseMenus from "../../../hooks/UseMenus";
import { LuShoppingCart } from "react-icons/lu";

const ShirtCollection = () => {
    const [menus] = UseMenus();
    const shirt = menus.filter(item => item.category === 'shirt');

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center" className="px-12 py-16">
            <div className="justify-between pb-3 flex">
                <h1 className="font-rubik font-bold text-2xl">Men Solid Button Up Shirt</h1>
                <Link to="/shop">
                    <button className="cursor-pointer rounded-md py-2 font-medium hover:bg-black hover:text-white px-4 w-fit hover:scale-105 transition-all duration-200 border-white shadow">View All</button>
                </Link>
            </div>

            {/* allcard */}
            <div className="grid md:grid-cols-4 gap-6 items-center">
                {
                    shirt.map(item =>
                        <div key={item.id}>
                            <Link to={`/menusdetails/${item._id}`}>
                                <img className="w-full rounded-xl" src={item.image} alt="" />
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold">{item.name}</h1>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg font-bold">${item.price}</h1>
                                    <div className=" bg-[#edededb1] p-3 rounded-full left-14 ">
                                        <LuShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShirtCollection;