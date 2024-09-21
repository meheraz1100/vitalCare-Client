import { toast } from "react-toastify";
import Navbar from "../Home/Navbar";

const AddNewService = () => {


    const handleAddServices = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.services_name.value;
        const description = form.service_description.value;
        const price = form.price.value;


        const newService = {name, description, price};
        console.log(newService);

        // send data to the server

        fetch('http://localhost:5000/addService', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            toast.success('Job added Success!!')
          }
          form.reset()
        })
    }



  return (
    <>
      <Navbar />

      <div className="bg-[#407db4] p-24 rounded-lg">
        <h1 className="text-6xl text-center font-extrabold">Add a Service</h1>
        <form className="card-body" onSubmit={handleAddServices}>
          <div className=" md:flex">
          </div>
          <div className=" md:flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="services_name"
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
          <button className="btn">Add Service</button>
        </form>
      </div>
    </>
  );
};

export default AddNewService;
