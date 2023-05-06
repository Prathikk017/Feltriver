import { useState } from "react";
import { silderImage } from "../assets/data"
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';


const Slider = () => {
    const data = silderImage;
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide= () =>{
     const isFirstSlide = currentIndex === 0
     const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1
     setCurrentIndex(newIndex);
    }
    const nextSlide = () =>{
      const isLastSlide = currentIndex === data.length-1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }

  return (
    <div className="max-w-[1400px] md:h-[580px] h-[400px] w-full m-auto py-16 px-4 relative group">
     <div className="w-full lg:h-full h-[380px]  rounded-2xl bg-center bg-cover duration-500 "
     style={{backgroundImage: `url(${data[currentIndex].url})`}}></div>
    {/* Left Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-gray-200/50 text-white cursor-pointer" onClick={prevSlide}>
    <BsChevronCompactLeft size={30}/>
    </div>
    {/* Right Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-gray-200/50 text-white cursor-pointer" onClick={nextSlide}>
    <BsChevronCompactRight size={30}/>    
    </div>

     <div className="flex bottom-4 justify-center py-2">
      {data.map((slide, slideIndex) =>{
         <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
         <RxDotFilled />
         </div>
      })}
     </div>

    </div>
  )
}

export default Slider