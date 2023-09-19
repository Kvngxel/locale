export const Comment = () => {
  return (
    <div className="md:px-[5vw] lg:bg-transparent bg-pry py-4 containr ">
      <form className=" bg-pry w-[100%] mx-auto md:p-12 flex flex-col gap-8">
        <h1 className="bg-white text-center m-2 w-3/4 py-4 md:w-[35%]">Anonymous Comments:</h1>
        <div className="w-[95%] mx-auto p-4 bg-white">
          <textarea name="" id="" className="w-full p-4" rows={10} placeholder="please leave a comment..." />
          <button className="bg-btn p-2 text-white float-right" type="submit">Comment</button>
        </div>
      </form>
    </div> 
  )
}
