import { Collection, Container, Products, News, Wrap, Footer } from "./style";
import Carousel from "../Generic/Swiper";
import { SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";
import main3 from "../../assets/images/main3.jpg";
import main4 from "../../assets/images/main4.jpg";
import main5 from "../../assets/images/main5.jpg";
import new1 from "../../assets/images/new1.jpg";
import new2 from "../../assets/images/new2.jpg";
import new3 from "../../assets/images/new3.jpg";
import app1 from "../../assets/images/app1.png";
import app2 from "../../assets/images/app2.png";
import facebook from "../../assets/icons/facebook.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import portfolio from "../../assets/icons/portfolio.svg";
import logo from "../../assets/images/logo.png";
import Card from "../Generic/Card";

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

      <Collection>
        <div className="column1">
          <img src={main3} alt="main-3" />
          <img src={main4} alt="main-4" />
        </div>
        <img src={main5} alt="main5" />
      </Collection>
      <Products>
        <h3>Our Products</h3>
        <div className="list">
          {[0, 1, 2, 3, 4]?.map((e) => (
            <Card key={e} />
          ))}
        </div>
      </Products>
      <News>
        <h3>Lates News</h3>
        <div className="list">
          <div className="card">
            <img src={new1} alt="new1" />
            <div className="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, optio!
            </div>
          </div>
          <div className="card">
            <img src={new2} alt="new1" />
            <div className="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, optio!
            </div>
          </div>

          <div className="card">
            <img src={new3} alt="new1" />
            <div className="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, optio!
            </div>
          </div>
          <div className="card">
            <img src={new2} alt="new1" />
            <div className="title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, optio!
            </div>
          </div>
        </div>
      </News>

      <Footer>
        <div className="middle_footer">
          <div className="item1">
            <h4>Download App</h4>
            <div className="images">
              <img src={app1} alt="app1" />
              <img src={app2} alt="app2" />
            </div>
            <div className="links">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={github} alt="github" />
              <img src={portfolio} alt="portfolio" />
            </div>
          </div>
          <div className="item2">
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet,adipiscing elits eiusmod tempor lorem
              ipsum the quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="item3">
            <h4>Store Information</h4>
            <p>
              <span>1093 Marigold Lane,</span>
              <span>Coral Way, Miami,</span>
              <span>Florida, 33169</span>
              <span>610-403-403</span>
              <span>company@example.com</span>
            </p>
          </div>
        </div>
      </Footer>
    </Container>
  );
}
