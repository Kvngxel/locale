import { heroImg } from "../../assets/images";
export const Directories = () => {
  const companies = [
  {
    _id: 1,
    name: "Google Inc.",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    desc: "Google is a multinational technology company that specializes in Internet-related services and products. It's known for its search engine, online advertising technologies, cloud computing, software, and hardware.",
  },
  {
    _id: 2,
    name: "Apple Inc.",
    address: "1 Apple Park Way, Cupertino, CA 95014",
    desc: "Apple Inc. is a renowned American multinational technology company that designs, manufactures, and markets consumer electronics, software, and services. It's famous for products like the iPhone, iPad, and Mac.",
  },
  {
    _id: 3,
    name: "Microsoft Corporation",
    address: "One Microsoft Way, Redmond, WA 98052",
    desc: "Microsoft is a global technology company that develops, licenses, and supports software, hardware, and services. It's well-known for its Windows operating system and Office suite of productivity software.",
  },
  {
    _id: 4,
    name: "Amazon.com, Inc.",
    address: "410 Terry Ave N, Seattle, WA 98109",
    desc: "Amazon is an American multinational technology and e-commerce company. It's one of the world's largest online sales platforms and is involved in various businesses, including cloud computing and digital streaming.",
  },
  {
    _id: 5,
    name: "Facebook, Inc.",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    desc: "Facebook, now Meta Platforms, Inc., is a social media conglomerate. It's known for its social networking platform and involvement in virtual reality and augmented reality technologies.",
  },
];


  return (
    <div className="w-[70vw] mx-auto p-12 flex flex-col">
      <h1 className="text-lg text-sec3 self-center mb-20">Locale directories</h1>
      <div className="flex w-full flex-wrap justify-around gap-6 rounded">
      {companies &&
            companies
              .map((company) => (
                <div key={company._id} className="relative basis-[45%] rounded-md p-4 basis">
                 <img src={heroImg} alt="" className="w-full"  />
                  <div className="absolute bottom-4 bg-sec flex justify-around">
                  <p className="text-xs ">{company.name}</p>
                  <p className="text-xs">See more ...
                  </p>
                  </div>
                 
                </div>
              ))}

      </div>
      </div>
  )
}
