import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Home/Navbar";

const UpdateService = () => {
  const loadedJobs = useLoaderData();
  const [services, setServices] = useState(loadedJobs);
  console.log(services)

  const { _id, name, description, price} = services || {}
  console.log(_id)

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.service_description.value;
    const price = form.price.value;
    console.log(name);

    const updatedService = {name, description, price, _id};
    console.log(updatedService);

    // send data to the server
    fetch(`https://vitalcare-server.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Job Updated Successfully!!!");
      });
  };

  return (
    <div>
        <Navbar></Navbar>
      <div className="bg-[#407db4] p-24 rounded-lg">
        <h1 className="text-6xl text-center font-extrabold">Update a Service : {name}</h1>
        <form className="card-body" onSubmit={handleUpdateService}>
          <div className=" md:flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Service Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className=" md:flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <input
                type="text"
                placeholder="Service Description"
                name="service_description"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className=" md:flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <button className="btn" type="submit">Update Service</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
