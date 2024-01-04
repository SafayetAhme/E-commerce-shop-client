import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const UseMenus = () => {
    const axiosPublic = UseAxiosPublic();
    // const [menus, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menus')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])

    const { data: menus = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })
    return [menus, refetch, loading]
};

export default UseMenus;
