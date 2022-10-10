import '../App.css'
import Footbar from './parts/footbar';
import NavBar from './parts/navbar';
const Home = ()=>{
    return(
        <>
<div className="max-w-[100vw]  h-[96rem] ">

<NavBar />
<div className="md:flex sm:hidden">
    <div className="lg:text-7xl md:text-5xl  text-left pt-20 pl-24 w-[58vw] cairo font-light">
        WE <br />PROMICE <br />COMFORT.
        <br />   
        <div className="text-2xl flex mt-12">
            {/* line */}
            <div className="lg:w-[5rem] md:w-[2rem]  h-[0.2rem] bg-[#1b1b1b]"></div>
            <div className="-mt-3 ml-2 md:text-base lg:text-md max-w-[30vw]">
            Matching style and class with lucry and comfort.
            </div>
        </div>
        <div>
            <button className="bg-[#dc9f26] text-black text-lg  font-light py-4 p-6 mt-12 rounded-md">SHOP NOW</button>
        </div>
        <div className=' mt-24 flex'>
        <i class="fa-brands hover:text-accent cursor-pointer hover:-mt-[0.1rem] fa-instagram text-3xl"></i>
        <i class="fa-brands hover:text-accent cursor-pointer hover:-mt-[0.1rem] fa-facebook ml-6 text-3xl"></i>
        <i class="fa-brands hover:text-accent cursor-pointer hover:-mt-[0.1rem] fa-telegram ml-6 text-3xl"></i>
        </div>
    </div>
<div className="-mt-[5.8rem] ml-auto">
<img className='h-[95vh] md:w-[35rem] lg:w-[40rem] rounded-xl' src='/main.jpg'/>
</div>

</div>
<div className="md:hidden sm:grid justify-center place-items-center">
<div className="-mt-[5.8rem] ml-auto">
<img className='h-[103vh] w-screen' src='/ph.jpg'/>
</div>
    <div className="text-6xl  text-white text-left pt-20 cairo font-light -mt-[50rem]">
        <div className='leading-normal'>
        WE <br />PROMICE <br />COMFORT.

        </div>
        <br />
        <div className="text-2xl flex mt-1">
            {/* line */}
            <div className="w-[2rem]  h-[0.2rem] bg-[#727272]"></div>
            <div className="-mt-3 ml-2 text-base  max-w-[50vw]">
            Matching style and class with lucry and comfort.
            </div>
        </div>
        <div>
            <button className="bg-[#dc9f26] text-black text-lg  font-light py-4 p-6 mt-12 rounded-md">SHOP NOW</button>
        </div>
    </div>

</div>
<div className="sans sm:text-2xl font md:text-4xl text-center mt-20 font-bold">
POPULAR RIGHT NOW
</div>

<div className="sm:grid-cols-1 px-3 grid place-items-center mt-12 md:grid-cols-2 lg:grid-cols-3">
<div class="card mt-7  bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div class="card mt-7 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div class="card mt-7  bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>

</div>
<Footbar />
</>
    )
}
export default Home;