import TypeWrite from "./Typewrite";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="carousel w-full h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_732x549-thumbnail-732x549.jpg"
              className="w-full rounded-xl"
            />
            <div className="absolute  rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide6" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://www.abm.com/wp-content/uploads/2021/04/HLC_Solutions_Delivered_Resource-Card.jpg"
              className="w-full rounded-xl"
            />
            <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnjm3CVMUdA8b-4E15R8QIBqyVhAlMqwqHQ&s"
              className="w-full rounded-xl"
            />
            <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://hospitalsmagazine.com/wp-content/uploads/2022/03/Hospital-Customer-Service.jpg"
              className="w-full rounded-xl"
            />
            <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide3" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://servicon.com/wp-content/uploads/2022/09/hospital-evs-providers-care.jpg"
              className="w-full rounded-xl"
            />
            <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide6" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwijnp6K_lgw6Lo4wl8wwk-yCwM10sOj8uw&s"
              className="w-full rounded-xl"
            />
            <div className="absolute rounded-xl h-full left-0 items-center flex pl-12 bottom-0 bg-gradient-to-r from-[#407db4] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 w-1/2">
                <TypeWrite />
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide5" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
