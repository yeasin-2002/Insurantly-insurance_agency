import ProjectData from "../../data/ProjectData";
import ProjectCards from "./ProjectCards";
// swiper module
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Gallery = () => {
  return (
    <section className="bg-navyBlue py-6">
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold py-8 text-white">Our work</h2>
        <p className="text-white text-xl">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="mt-10 px-3">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {ProjectData.map((val, index) => {
            return (
              <SwiperSlide>
                <ProjectCards
                  key={index}
                  link={val.link}
                  image={val.image}
                  title={val.title}
                  type={val.type}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
