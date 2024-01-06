import { useQuery } from "react-query";
import UserAxiosSecure from "./UserAxiosSecure";
import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";


const UseAddtoCart = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();
    const { refetch, data: addcart = [] } = useQuery({
        queryKey: ['addcart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/addtocart?email=${user.email}`);
            return res.data;
        }
    })
    return [addcart, refetch]
}

export default UseAddtoCart;