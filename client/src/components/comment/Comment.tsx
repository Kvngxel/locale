export const Comment = () => {
  return (
    <div className="bg-interact text-center mb-10 pt-24 md:pb-12">
      <div>
        <h2 className="text-2xl font-serif">Interact</h2>
        <p className="py-5 text-sm">Drop a like or dislike and comment :)</p>
        <button className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5 px-9 mx-5 text-white font-semibold mt-4 custom-selection text-sm">👍</button>
        <button className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5 px-9 mx-5 text-white font-semibold mt-4 custom-selection text-sm">👎</button>
      </div>
      <div className="py-10">
        <textarea name="comment"
          placeholder="please leave a comment..."
          id=""
          className="focus:outline-none w-[65%] mx-auto mt-5 px-10 py-10 rounded-2xl">
        </textarea>
        <div>
          <button className="bg-[#0d0c22] hover:bg-[#ffffff] rounded-full py-5 px-9 mx-5 text-white hover:text-black font-semibold mt-5 custom-selection text-xs">Comment</button> 
        </div>
      </div>
    </div>
  )
}
