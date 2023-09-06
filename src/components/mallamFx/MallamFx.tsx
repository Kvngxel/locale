export const MallamFx = () => {
  const rates=[
    {
      name:"ETH/USD",
      value:"231.543",
      profit:true,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:false,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:true,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:false,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:false,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:true,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:false,
    },
    {
      name:"ETH/USD",
      value:"231.543",
      profit:true,
    },
    

  ]
  return (
    <div className="w-[50vw] mx-auto p-12">
      <h1 className="text-center mb-6 text-2xl">MallamFx</h1>
      <div className="bg-pry w-full h-[40vh] mb-6">
        <div>
          {/* {rates &&  rates.map(rate)=>
          (

          )} */}
        </div>
      </div>
      <div className="flex justify-center">
      <button className="bg-btn p-2 text-white text-xs">See more</button>
    </div>
    </div>
  )
}
