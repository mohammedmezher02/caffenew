
import { img1, img2, img3, img4, img5, imgHero } from "../assets";


function Menue() {
    const Data = [
        {
            id: 1,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img1,
        },
        {
            id: 2,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img:img2 ,
        },
        {
            id: 3,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img3,
        },
        {
            id: 4,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img4,
        },
        {
            id: 5,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img5,
        },
        {
            id: 6,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: imgHero,
        },
    ];

  return (
    <div className="bg-[#252525]" >
       <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10 text-white ">
        <h1> Our Menue</h1>
        <div className="bg-orange-500 w-[100px] h-[2px] mt-3"></div>
         </div>
         {/* images */}
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10">
            {Data.map((iteam)=>(
            <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ">
                <img src={iteam.img} alt="" className="w-52 rounded-md mb-4 mx-5 " />
                <h2 className="text-white text-xl font-semibold mb-2 mx-5">{iteam.title}</h2>
                <p className="text-sm text-gray-400 mx-5">{iteam.desc}</p>
            </div>
            ))}
         </div>


    </div>
  )
}

export default Menue