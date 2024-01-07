import { Link, useLoaderData, useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { Rating } from "@mui/material";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import member2 from "../../../../public/image/member2.png"
import paypal from "../../../../public/image/paypal.png"
import visa from "../../../../public/image/visa.png"
import stripe from "../../../../public/image/stripe.png"
import { LuShoppingCart } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GoCheckbox } from "react-icons/go";
import FronInDetails from "./FronInDetails";
import UseAuth from "../../hooks/UseAuth";
import UserAxiosSecure from "../../hooks/UserAxiosSecure";


const MenusDetails = () => {
    const { user } = UseAuth();
    const axiosSecure = UserAxiosSecure();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [tabIndex, setTabIndex] = useState(0)
    const menusdetails = useLoaderData();
    const { id } = useParams();
    const menusdetail = menusdetails.find(menusdetail => menusdetail._id === id);
    console.log(menusdetail)


    const handleaddtocart = () => {
        if (user && user.email) {
            // TODO: wow
            console.log(user.email);
            const addtocartitem = {
                menuId: menusdetail?._id,
                email: user?.email,
                image: menusdetail?.image,
                price: menusdetail?.price,
                name: menusdetail?.name,
                title: menusdetail?.title,
            }

            axiosSecure.post('/addtocart', addtocartitem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert("nice")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            Swal.fire({
                title: "if you want to add item please login",
                text: "please",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign In"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   toto
                    // nagigate("/signin", { state: { from: location } })
                }
            });
        }
    }



    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="container mx-auto">
            <div className="grid gap-12 pt-10 px-10 md:grid-cols-2">
                <div className="">
                    <ReactCarousel autoPlay infiniteLoop showThumbs={true}>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail.image?.[0]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail.image?.[1]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail.image?.[2]} alt="" />
                        </div>
                        <div className="h-[670px]">
                            <img className="h-full" src={menusdetail.image?.[3]} alt="" />
                        </div>
                    </ReactCarousel>
                </div>
                <div>
                    <h1 className="text-3xl font-rubik font-bold text-gray-900">{menusdetail.name}</h1>
                    <h1 className="text-lg font-rubik py-2 font-medium">Cattegory: <span className="text-xl font-rubik font-bold">{menusdetail.category}</span> </h1>
                    <h1 className="text-2xl text-gray-600 font-rubik py-1">{menusdetail.title}</h1>
                    <h2 className="card-title">
                        <Rating style={{ maxWidth: 115 }}
                            value={menusdetail.ratting}
                            readOnly />
                    </h2>
                    <h1 className="text-2xl font-rubik py-2 font-bold">${menusdetail.price}</h1>
                    <h1 className="text-xl font-rubik pb-2 pt-2 font-bold">Select Size</h1>
                    <div className="flex gap-2">
                        <h1 className="border hover:bg-black hover:text-white hover:border-black w-14 px-4 py-3 rounded-xl text-xl font-medium">XS</h1>
                        <h1 className="border hover:bg-black hover:text-white hover:border-black w-14 px-4 py-3 rounded-xl pl-5 text-xl font-medium">S</h1>
                        <h1 className="border hover:bg-black hover:text-white hover:border-black w-14 px-4 py-3 rounded-xl text-xl font-medium">M</h1>
                        <h1 className="border hover:bg-black hover:text-white hover:border-black w-14 px-4 py-3 rounded-xl pl-5 text-xl font-medium">L</h1>
                        <h1 className="border hover:bg-black hover:text-white hover:border-black w-14 px-4 py-3 rounded-xl text-xl font-medium">XL</h1>
                    </div>

                    <h1 className="text-xl font-rubik pb-2 pt-6 font-bold">Select Color</h1>
                    <div className="flex gap-2">
                        <input type="radio" name="radio-5" className="radio w-10 h-10 radio-accent" />
                        <input type="radio" name="radio-5" className="radio w-10 h-10 radio-error" />
                        <input type="radio" name="radio-5" className="radio w-10 h-10 radio-success" />
                        <input type="radio" name="radio-5" className="radio w-10 h-10 radio-primary" />
                    </div>
                    <h1 className="text-xl font-rubik pb-2 pt-6 font-bold">Quantity:</h1>
                    <div className="flex">
                        <div className=" border text-center rounded-md">
                            <button onClick={() => {
                                selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)
                            }}
                                className="px-4 pt-1 pb-2 border-r-2 text-xl">-</button> <span className="px-4 py-2  text-xl">{selectedQuantity}</span> <button
                                    onClick={() => {
                                        selectedQuantity < 10 && setSelectedQuantity(selectedQuantity + 1)
                                    }}
                                    className=" px-4 pt-1 pb-2 text-xl border-l-2">+</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pt-8">
                        <button onClick={() => handleaddtocart(menusdetail)} data-tip="Love" className="text-xl tooltip border-2 px-3 py-3 hover:border-black hover:bg-black hover:text-white font-rubik"><FaRegHeart /></button>
                        <button onClick={() => handleaddtocart(menusdetail)} className="text-xl border-2 px-16 py-2 hover:border-black hover:bg-black hover:text-white font-rubik">Add to Cart</button>
                        <button className="text-xl border-2 px-16 py-2 border-black hover:border-black bg-black text-white font-rubik">Buy Now</button>
                    </div>
                    <hr className="mt-6" />
                    {/* share */}
                    <div className="flex pt-6 gap-4 items-center">
                        <h1 className=" text-2xl font-rubik pb-2">Share:</h1>
                        <div className="flex gap-2">
                            < CiFacebook className="border hover:bg-black hover:text-white text-5xl p-2" />
                            < FaTwitter className="border hover:bg-black hover:text-white text-5xl p-2" />
                            < FaLinkedin className="border hover:bg-black hover:text-white text-5xl p-2" />
                            < FaInstagramSquare className="border hover:bg-black hover:text-white text-5xl p-2" />
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="pt-8 flex items-center gap-2">
                        <GoCheckbox className="text-3xl" />
                        <h1 className="text-lg text-gray-600 font-rubik">25 days easy returns</h1>
                    </div>
                    <div className="bg-[#f2f2f2] flex gap-3 items-center py-2 pl-3 mt-4">
                        <p className="font-rubik">Guaranteed safe <br /> & secure checkout</p>
                        <img className="w-20 h-8" src={paypal} alt="" />
                        <img className="w-20 h-8" src={visa} alt="" />
                        <img className="w-20 h-8" src={stripe} alt="" />
                    </div>
                </div>
            </div>
            <hr className="mt-6" />
            {/* review and detaisl section */}
            <div className="px-10 pt-16">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="text-center">
                        <TabList>
                            <div className="flex justify-center gap-6">
                                <Tab className="px-6 py-2 hover:bg-black hover:text-white font-rubik border">Details</Tab>
                                <Tab className="px-6 py-2 hover:bg-black hover:text-white font-rubik border">Customer Review</Tab>
                            </div>
                        </TabList>
                    </div>
                    <TabPanel>
                        <h1 className="text-2xl font-rubik font-bold pb-2">Product Details</h1>
                        <h2 className="w-[800px]">{menusdetail.details}</h2>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div>
                                {
                                    menusdetail.customerreview.map((review, index) =>
                                        <div key={review.id}>
                                            <div>
                                                <p className="bg-teal-50 rounded-md text-lg text-[#41b6bf] font-bold w-fit px-2">{index + 1}</p>
                                                <div className="pb-8 pt-8 w-full md:flex gap-16">
                                                    <div className="flex items-center gap-4">
                                                        <img className="w-16 rounded-full h-16" src={member2} alt="" />
                                                        <div>
                                                            <h1 className="font-bold pb-2 text-xl w-[200px]">{review.name}</h1>
                                                            <h2 className="card-title">
                                                                <Rating style={{ maxWidth: 115 }}
                                                                    value={review.ratting}
                                                                    readOnly />
                                                            </h2>
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className=" gap-9 text-">
                                                            <h1 className="font-medium pb-4 text-xl text-black">{review.title}</h1>
                                                            <div className="grid grid-cols-2">
                                                                <p>{review.description}</p>
                                                                <p className=" w-full justify-start">{review.date}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="pb-4" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            {/* from your  */}
                            <FronInDetails></FronInDetails>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* anather product */}
            <div className="px-10 pt-16">
                <hr />
                <h1 className="text-3xl pt-8 font-rubik text-center font-bold pb-1">Related Products</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="grid md:grid-cols-4 gap-6 pt-6 pb-12 items-center">
                    {
                        menusdetail.shirt.map(detail =>
                            <div key={detail.id}>
                                <Link to={`/menusdetails/${detail?._id}`}>
                                    <img className="w-full rounded-xl" src={detail.image} alt="" />
                                </Link>
                                <div>
                                    <h1 className="text-xl font-bold">{detail.name}</h1>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-lg font-bold">${detail.price}</h1>
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
        </div>
    )
}

export default MenusDetails