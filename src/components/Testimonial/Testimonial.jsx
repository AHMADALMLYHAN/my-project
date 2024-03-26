import React from 'react'
import Slider from 'react-slick'
import img1 from "../../assets/website/OIP.png"
import img2 from "../../assets/website/OIP2.png"
import img3 from "../../assets/website/OIP3.png"

const testimonalData = [
    {
        id:1,
        name:"Victor",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
        dolorem tempore unde commodi repellendus neque.`,
        img:img1,
    },
    {
        id:1,
        name:"Satya Narayan",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
        dolorem tempore unde commodi repellendus neque.`,
        img:img2,
    },
    {
        id:1,
        name:"Sachin Tendulkar",
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
        dolorem tempore unde commodi repellendus neque.`,
        img:img3,
    }
]

const Testimonial = () => {

//slider config
var settings = {
    dots:true,
    arrow:false,
    infinite:true,
    speed:500,
    //slidesToShow:2,
    slidesToScroll:1,
    autoplay:true,
    autoplayspeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive: [
        {
            breakpoint:10000,
            settings :{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
            },
        },
        {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2,
            },
        },
        {
            breakpoint:640,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
    ],
}
  return (
    <div className='pb-10'>
        <div className="container">
            {/*header */}
            <div 
                data-aos="slide-up"
                className='text-center mb-20 max-w-[400px]
                mx-auto'>
                <p className='text-sm bg-clip-text 
                text-transparent bg-gradient-to-r
                from-primary to-secondary'>
                    What our customer says
                </p>
                <h1 className='text-3xl font-bold'>
                    Testimonials
                </h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Doloremque laboriosam ad maxime {" "}
                </p>
            </div>
            {/*card section */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {testimonalData.map((data) => (
                        <div className='my-6'>
                            <div className='flex flex-col gap-4
                            shadow-lg py-8 px-6 mx-4 rounded-xl 
                            dark:bg-gray-800 bg-primay/10 relative'>
                                <div>
                                    <img src={data.img} alt="" 
                                    className=' rounded-full w-20 
                                    h-20 object-cover'/>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-gray-500 text-sm'>
                                            {data.text}
                                        </p>
                                        <h1 className='text-xl font-bold 
                                        text-black/80 dark:text-white'>
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className='absolute top-0 right-0 font-serif 
                            text-9xl z-10 text-black/20'> 
                                ,,
                            </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial