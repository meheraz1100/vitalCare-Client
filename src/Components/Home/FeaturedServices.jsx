const FeaturedServices = ({job}) => {
  return (
    <>

      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{job.name}</h2>
          <p>{job.description}</p>
          <div className="card-actions justify-end">
          <div className="badge badge-lg">Price : ${job.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
