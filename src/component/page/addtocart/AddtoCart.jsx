import UseAddtoCart from "../../hooks/UseAddtoCart"
import UserAxiosSecure from "../../hooks/UserAxiosSecure";


const AddtoCart = () => {
    // const [menus] = UseAddtoCart();
    // console.log(menus)
    // const totalPrice = menus.reduce((total, item) => total + parseFloat(item.price), 0);
    // const axiosSecure = UserAxiosSecure();

    return (
        <div>
            {/* <div className="flex justify-between w-full">
                <th className="font-bold text-xl text-blue-600">Your Total items: {menus.length}</th>
                <th>Your Total Price ${totalPrice}</th>
                <p>{totalPrice}</p>
            </div> */}
            {/* <div className="pt-8">
                {
                    menus.map((item, index) => <div key={item._id} className="flex justify-between">
                        <th className="">
                            {index + 1}
                        </th>
                        <div className="mb-4 flex gap-4">
                            <img className="rounded-xl w-32 h-32" src={item} alt="" />
                            <div>
                                <h1 className="text-xl font-bold text-blue-600">{item.name}</h1>
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                        <div className="flex gap-96 items-start">
                            <h1> Total Inroll: <span className="text-blue-600 font-bold">{item.total_enrollment}</span></h1>
                            <div className="flex items-center gap-16">
                                <h1 className="font-bold text-blue-600">{item.price}</h1>
                                <button
                                   
                                    className="bg-[#ffffff56] p-4 rounded-md hover:bg-red-600">
                                    <MdDelete className="text-white "></MdDelete>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div> */}
        </div>
    )
}

export default AddtoCart