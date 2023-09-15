export const Comment = () => {
  return (
    <div className="bg-pry">
      <form className="w-[50vw] mx-auto p-12 flex flex-col gap-8">
        <h1 className="bg-white text-center py-2 w-[40%]">Anonymous Comments:</h1>
        <div className="w-full p-4 bg-white">
          <textarea name="" id="" className="w-full p-4" rows={10} placeholder="please leave a comment..." />
          <button className="bg-btn p-2 text-white float-right" type="submit">Comment</button>
        </div>
      </form>
    </div> 
  )
}
