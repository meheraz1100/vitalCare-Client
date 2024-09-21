import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const AllServices = () => {

    const loadedJobs = useLoaderData();
    const [services, setServices] = useState(loadedJobs)

    return (
        <>
            <Navbar />
            <h1 className="text-5xl text-center">All Jobs</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        {services.map((services) => (
          <ServiceCard
          key={services._id}
          services={services}
          setServices={setServices}
          ></ServiceCard>
        ))}
      </div>
        </>
    );
};

export default AllServices;