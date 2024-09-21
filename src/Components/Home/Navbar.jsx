
const Navbar = () => {
    
    const navItems = (
        <>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>All Services</a>
            </li>
            <li>
              <a>Add a Service</a>
            </li>  
        </>
    )
    return (

        
        <>
          <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-3xl font-bold">Vital Care</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-10 mx-10 text-xl">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>  
        </>
    );
};

export default Navbar;