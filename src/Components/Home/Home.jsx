import { useLoaderData } from "react-router-dom";
import FeaturedServices from "./FeaturedServices";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useState } from "react";



const Home = () => {

  const loadedServices = useLoaderData();
  const [services, setServices] = useState(loadedServices);
  console.log(services);

  const [dataLength, setDataLength] = useState(6);

  return (
    <>
      <Navbar/>
      <Banner />


      {/* featured service section */}
      <>
      <h1 className="text-4xl text-center font-bold mt-10 underline">
        Featured Services
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        {services.slice(0, dataLength).map((job) => (
          <FeaturedServices key={job._id} job={job} setjobs={setServices}></FeaturedServices>
        ))}
      </div>
    </>
    </>
  );
};

export default Home;
