

const FronInDetails = () => {
    return (
        <div className="pt-4">
            <h1 className="text-2xl font-rubik font-bold">Review this product</h1>
            <p className="py-1 font-rubik">your email address will not be published. Required fields are market*</p>
            <div className="flex pt-2 gap-4">
                <p className="font-rubik">Your Ratting:</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <from>
                <div className="pt-2">
                    <h1 className="font-medium font-rubik pb-1">Your Review</h1>
                    <textarea className="textarea pb-12 textarea-bordered w-full max-w-xl" placeholder="Write your review here..." ></textarea>
                    <h1 className="font-rubik pt-3 pb-1">Your Name</h1>
                    <input type="text" name="name" placeholder="your name" className="input input-bordered w-full max-w-xl" required />
                    <h1 className="font-rubik pt-4 pb-1">Date</h1>
                    <input type="email" name="email" placeholder="date" className="input input-bordered w-full max-w-xl" required />
                </div>
                <button className="text-xl border-2 px-16 mt-8 py-2 hover:border-black hover:bg-black hover:text-white font-rubik">Submit</button>
            </from>
        </div>
    )
}

export default FronInDetails