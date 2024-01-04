import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


const UserProfile = () => {
    return (
        <div > 
            <div className="bg-white p-7 rounded-xl m-12 shadow-xl">
                <div className=" flex justify-between">
                    <div>
                        <img className="w-20 h-20 rounded-full" src="" alt="" />
                        <h1 className="text-2xl py-1 font-medium pt-2">Safayet Ahmed</h1>
                        <p>asafayet21@gmail.com</p>
                    </div>
                    <p className="border hover:bg-black h-fit hover:text-white px-4 w-fit py-2">Log Out</p>
                </div>

                {/*  */}
                <div className="flex pt-10 items-center gap-6">
                    <div className="indicator">
                        <button className="text-lg border rounded-lg p-10"> <FaCartShopping className="text-4xl"  /></button>
                        <span className="border px-2 rounded-full indicator-item">0</span>
                    </div>
                    <div className="indicator">
                        <button className="text-lg border rounded-lg p-10"> <FaRegHeart className="text-4xl"  /></button>
                        <span className="border px-2 rounded-full indicator-item">0</span>
                    </div>
                    <div className="indicator">
                        <button className="text-lg border rounded-lg p-10"> <FaCartShopping className="text-4xl" /></button>
                        <span className="border px-2 rounded-full indicator-item">0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile