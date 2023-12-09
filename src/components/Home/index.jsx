import { Container, Wrap } from "./style";
import Carousel from "../Generic/Swiper";
import { SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Container>
      <Wrap>
        <Carousel className="carousel_wrap">
          <SwiperSlide className="sliders" key="1">
            <Fade left cascade>
              <div className="text_wrap">
                <h3>Your Pets Deserves The Best</h3>
                <h2>Shop All Pet Production</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique error in reprehenderit iste, nostrum inventore neque
                  ullam totam? Asperiores, ipsam.
                </p>
                <div>SHOP NOW</div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide className="sliders" key="2">
            <Fade left cascade>
              <div className="text_wrap">
                <h3>Your Pets Deserves The Best</h3>
                <h2>Shop All Pet Production</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique error in reprehenderit iste, nostrum inventore neque
                  ullam totam? Asperiores, ipsam.
                </p>
                <div>SHOP NOW</div>
              </div>
            </Fade>
          </SwiperSlide>
        </Carousel>
      </Wrap>
    </Container>
  );
}
