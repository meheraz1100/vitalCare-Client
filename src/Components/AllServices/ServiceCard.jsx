import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({ services, setServices }) => {
    const { _id } = services;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(
              `http://localhost:5000/services/${_id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Service has been deleted.",
                    icon: "success",
                  });
                }
                // delete data from UI
                const updatedJobs = services.filter((job) => job._id !== _id);
                setServices(updatedJobs)
              });
          }
        });
      };


  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{services.name}</h2>
            <p>{services.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-lg">Price : ${services.price}</div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <Link to={`/updateService/${_id}`}><button  className="btn btn-warning">Update</button></Link>
          <button className="btn btn-error" onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
