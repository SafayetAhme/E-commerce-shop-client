

const PaymentHistory = () => {
    return (
        <div>
            <div className="w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <p>(0) sell hoise</p>
                                </label>
                            </th>
                            <th>all product name</th>
                            <th>Product title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                                <p>product name</p>
                                <br />
                            </td>
                            <td>title</td>
                            <td>Price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory