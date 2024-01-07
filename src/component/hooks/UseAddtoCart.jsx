import { useQuery } from "react-query";
import UserAxiosSecure from "./UserAxiosSecure";
import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";


const UseAddtoCart = () => {
    // const { user } = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const { data: addcart = [] } = useQuery({
        queryKey: ['addcart'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addtocart');
            return res.data;
        }
    })
    return [addcart]
}

export default UseAddtoCart;