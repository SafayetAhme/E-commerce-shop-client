import React from 'react'

const AllUser = () => {
    return (
        <div>
            <div className="px-10 pt-10 w-full">
                <div className="">
                    <h1 className="text-2xl font-bold text-blue-600 pb-2">User managment</h1>
                    <h1 className="w-full bg-blue-600 py-2 pl-3 text-white font-medium text-xl">All Users (0000)</h1>
                    <table className="table mt-2">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Date</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="md:flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">user name</div>
                                        </div>
                                    </div>
                                </td>
                                <td>user Email</td>
                                <td>user number</td>
                                <td>when he did sing up date</td>
                                <td>
                                    <button className='text-xl font-medium bg-slate-100 text-black px-3 py-1 rounded-lg'>Admin</button>
                                </td>
                                <td>
                                    <button className='text-xl font-medium bg-slate-100 text-black px-3 py-1 rounded-lg'>Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUser