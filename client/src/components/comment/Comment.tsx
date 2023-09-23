export const Comment = () => {
  return (
    <div className="bg-interact text-center pt-24 pb-12">
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
    
    // <div className="md:px-[5vw] lg:bg-main py-4">
    //   <div className="px-24">
    //     <form className="w-[100%] mx-auto md:p-12 flex flex-col gap-8">
    //       <h1 className="bg-white text-center m-2 w-3/4 py-4 md:w-[35%]">Anonymous Comments:</h1>
    //       <div className="w-[95%] mx-auto bg-white">
    //         <textarea name="" id="" className="w-full p-4" rows={10} placeholder="please leave a comment..." />
    //         <button className="bg-btn p-2 text-white float-right" type="submit">Comment</button>
    //       </div>
    //     </form>
    //   </div>      
    // </div> 
  )
}
