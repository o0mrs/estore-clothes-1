import { Logouta,Signupa,auth } from "../firebase";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(0);
  // active tab state
  const [active, setactive] = useState(0);
  let navigate = useNavigate();
  useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              
              const pg = user.photoURL;

            } else {
                // navigate("/auth", { replace: true });

            }
          });

    
},[])
    return(
      <>
            <div className="navbar sm:flex md:hidden text-white">
  <div className="navbar-start ">
    <div className="dropdown  text-white">
      
    <label tabIndex={0} className="btn  btn-ghost btn-circle ">
    <i class="fa-solid fa-bars-staggered text-gray-300 text-xl"></i>      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div>
  </div>

  <div className="navbar-end">

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <i class="fa-solid fa-bag-shopping text-2xl text-gray-300"></i>
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
  </div>
</div>
{/* pc */}
<div className="navbar sm:hidden md:flex text-white">
  <div className="navbar-start mt-7 ml-10 ">
    <div className="dropdown  text-white">
    <label tabIndex={0} className="btn hover:bg-yellow-500 btn-ghost btn-circle border border-black">
    <i class="fa-solid fa-bars-staggered text-gray-800 text-xl"></i>      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div>
    <button  className="btn btn-ghost ml-16 hover:bg-[#a6a3a300]  hover:underline hover:underline-offset-[12px] text-black">
    Men
    </button>
    <button className="btn btn-ghost ml-2  underline underline-offset-[12px]  text-black">
    Women
    </button>
    <button className="btn btn-ghost ml-2  hover:underline hover:underline-offset-[12px] text-black">
    Kids
    </button>
  </div>

  <div className="navbar-end">
        <button className="btn btn-ghost hover:bg-[#a6a3a300]   text-gray-900 hover:underline hover:underline-offset-[7px] ">
      <div className="indicator">
Home
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
    <button className="btn btn-ghost hover:bg-[#a6a3a300]  text-gray-900  hover:underline hover:underline-offset-[7px] ">
      <div className="indicator">
Best sellers
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
    <button className="btn btn-ghost hover:bg-[#a6a3a300]  text-gray-900  hover:underline hover:underline-offset-[7px] ">
      <div className="indicator">
Sale
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
    <button className="btn btn-ghost mr-32 text-gray-900 hover:bg-[#a6a3a300] hover:underline hover:underline-offset-[7px] ">
      <div className="indicator">
Shop
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <i class="fa-solid fa-bag-shopping text-2xl text-gray-900"></i>
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
  </div>
</div>
      </>


//         <header>
//     <div className=" pt-[1rem] pl-[1rem] sm:pt-[0.3rem] ">
//       {a == 1&& <div className="">
// <i className="fa-solid mt-5 mr-4 text-xl text-white float-right fa-bars"></i>
// </div>}
//  <div>
//     {/* logo */}


//     <div className="dropdown">
//     <img tabindex="0" className="md:h-[2.6rem] md:w-[2.6rem] md:mt-2 sm:h-[2.6rem] sm:mt-2 float-right  sm:w-[2.6rem] rounded-full" alt='logo' src={pfp}></img>

//   <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-300 text-white rounded-box mt-16 ml-6 w-52">
//     <li onClick={()=>{navigate('/home',{replace:true})}}><a>home</a></li>
//     <li onClick={Logouta} className='text-red-600'><a>Log out</a></li>
//   </ul>
// </div>
//  </div>
//  <div >

// {a == 0 &&(
// <>
// <div className="md:hidden">
// <i className="fa-solid -mt-10 mr-4 text-xl text-white float-right fa-bars"></i>
// </div>
// <div className="md:flex	 -mt-12 float-right  sm:hidden">
// <div className="text-md p-3 mr-3 cursor-pointer text-white " onClick={()=>{navigate('/auth',{replace:true})}}>
//     Sign in
//     </div>
//     <div className=" border rounded-lg cursor-pointer p-3 mr-4 text-md text-white " onClick={()=>{navigate('/auth',{replace:true})}}>
//     Sign up
//     </div>

// </div>
// </>

// )}
//  </div>
//   </div>
// </header>
    )
}
export default NavBar;