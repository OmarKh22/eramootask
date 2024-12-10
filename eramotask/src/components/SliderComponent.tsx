
import { amzonSlider, clothesSlider, mara3ySlider, mobileSlider } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const categories = [
  { title: "الملابس", image: mobileSlider },
  { title: "البقالة", image: mara3ySlider },
  { title: "المنزل الذكي", image: clothesSlider },
  { title: "الجوالات", image: amzonSlider },
];

const SliderComponent = () => {
    
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    centerMode: true, 
    focusOnSelect: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between space-x-96">
        <div className="flex mx-4">
          <TfiArrowCircleLeft  className="ml-3 text-[#ffffff] text-2xl bg-[#9977CE] rounded-full" />
          <TfiArrowCircleRight  className="ml-3 text-[#ffffff] text-2xl bg-[#9977CE] rounded-full" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
          تسوق حسب الفئات
        </h2>
        </div>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="w-[200px] h-[190px] flex justify-center items-center  shadow-gray-200 p-4 mx-5 shadow-md rounded-lg hover:shadow-lg ">
              <div className="flex justify-center items-center w-full">
                <img
                src={category.image}
                alt={category.title}
                className="w-[150px] h-[120px]  object-contain "
                />
              </div>
              <h3 className="text-[#543883] font-semibold text-center">{category.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );

};

export default SliderComponent;

