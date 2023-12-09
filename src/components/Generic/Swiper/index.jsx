import "swiper/css";
import "swiper/css/pagination";
import { Wrap } from "./style";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel({ children }) {
  return (
    <Wrap>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </Wrap>
  );
}
