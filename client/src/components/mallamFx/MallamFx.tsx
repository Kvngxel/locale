import { Link } from "react-router-dom"
export const MallamFx = () => {
  const rates = [
    {
      _id: 1,
      name: "ETH/USD",
      value: "231.543",
      profit: true,
    },
    {
      _id: 2,
      name: "ETH/USD",
      value: "231.543",
      profit: false,
    },
    {
      _id: 3,
      name: "ETH/USD",
      value: "231.543",
      profit: true,
    },
    {
      _id: 4,
      name: "ETH/USD",
      value: "231.543",
      profit: false,
    },
    {
      _id: 5,
      name: "ETH/USD",
      value: "231.543",
      profit: false,
    },
    {
      _id: 6,
      name: "ETH/USD",
      value: "231.543",
      profit: true,
    },
    {
      _id: 7,
      name: "ETH/USD",
      value: "231.543",
      profit: false,
    },
    {
      _id: 8,
      name: "ETH/USD",
      value: "231.543",
      profit: true,
    },
  ];
  
  return (
    <div className="w-[50vw] mx-auto p-12">
      <h1 className="text-center mb-6 text-2xl">MallamFx</h1>
      <div className="bg-pry py-10 w-full h-[40vh] mb-6 flex item-center  justify-around">
        <div className="px-6 border-l-2 text-base flex flex-col justify-between">
          {rates &&
            rates
              .filter((rate) => rate._id <= 4)
              .map((rate) => (
                <div key={rate._id}>
                  <span>{`${rate.name} = `}</span>
                  <span className={rate.profit ? "text-btn" : "text-red-400"}>
                    {rate.value}
                  </span>
                </div>
              ))}
        </div>
        <div className="px-6 border-r-2 text-base flex flex-col justify-between">
          {rates &&
            rates
              .filter((rate) => rate._id > 4)
              .map((rate) => (
                <div key={rate._id}>
                  <span>{`${rate.name} = `}</span>
                  <span className={rate.profit ? "text-btn" : "text-red-400"}>
                    {rate.value}
                  </span>
                </div>
              ))}
        </div>
      </div>
      <div className="flex justify-center">
      <Link className="hover:text-sec3 bg-btn p-2 text-white text-xs " to={'/malamfx'}>See more</Link>
        {/* <button className="bg-btn p-2 text-white text-xs">See more</button> */}
      </div>
    </div>
  );
};
