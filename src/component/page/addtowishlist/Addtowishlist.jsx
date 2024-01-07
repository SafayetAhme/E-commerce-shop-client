import UseAddtoCart from "../../hooks/UseAddtoCart";


const Addtowishlist = () => {
    const [addcart] = UseAddtoCart();
    console.log(addcart)
    const totalPrice = addcart.reduce((total, item) => total + parseFloat(item.price), 0);
    // // const axiosSecure = UserAxiosSecure(); 
    
    return (
        <div>
            <h1>{totalPrice.length}</h1>
        </div>
    )
}

export default Addtowishlist