import { Link } from "react-router-dom"
export const MallamFx = () => {
  const rates = [
    {
      _id: 1,
      name: "USD/SGD",
      value: "1.37",
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
      name: "USD/INR",
      value: "83.17",
      profit: true,
    },
    {
      _id: 4,
      name: "USD/RUB",
      value: "96.56",
      profit: false,
    },
    {
      _id: 5,
      name: "USD/EUR",
      value: "0.95",
      profit: false,
    },
    {
      _id: 6,
      name: "USD /SAR",
      value: "3.65 ",
      profit: true,
    },
    {
      _id: 7,
      name: "USD/QAR",
      value: "231.543",
      profit: false,
    },
    {
      _id: 8,
      name: "USD/CNY",
      value: "7.31 ",
      profit: true,
    },
  ];
  
  return (
    <div className="w-[50vw] mx-auto pb-16 pt-5 md:p-12">
      <h1 className="text-center mb-6 text-lg md:text-2xl">MallamFx</h1>
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
      <Link className="bg-[#0d0c22] hover:bg-[#ffffff]
          hover:text-black border-2 border-transparent hover:border-black
            rounded-full py-5 px-6 mx-5 text-white font-semibold mt-4 custom-selection
            text-xs"
        to={'/malamfx'}>
        See more
      </Link>
      </div>
    </div>
  );
};
