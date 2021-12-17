import React from "react";
import Madhur from "../resources/madhur_malpani.jpeg";
import Atishay from "../resources/atishay_jain.jpeg";
import Arpita from "../resources/arpita_mohapatra.jpg";
import Swapnil from "../resources/swapnil.jpg";
import Vaishak from "../resources/vaishak_menon.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Namecard from "./namecard";
import "./teamnew.css";
export default function Slider1() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider1">
      <h2 data-aos="zoom-in" data-aos-once="true">
        Overall Coordinators
      </h2>
      <div className="fullscreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Madhur} />
                <Namecard
                  name="Madhur Malpani"
                  link1="https://www.linkedin.com/in/madhur-malpani-818646196/"
                  link2="mailto:madhur.nilu@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atishay} />
                <Namecard
                  name="Atishay Jain"
                  link1="www.linkedin.com/in/atishay1743/"
                  link2="mailto:atishayjain@iitg.ac.in"
                />
              </div>
              <div className="icon">
                <img src={Arpita} />
                <Namecard
                  name="Arpita Mahapatra"
                  link1="https://www.linkedin.com/in/arpita-mohapatra-65b6a5196"
                  link2="arpitamohapatra1812@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Swapnil} />
                <Namecard
                  name="Swapnil Srivastava"
                  link1="https://www.linkedin.com/in/s-swapnil"
                  link2="mailto:s.swapnil1309@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Vaishak} />
                <Namecard
                  name="Vaishakh"
                  link1="https://www.linkedin.com/in/vaishakhsmn/"
                  link2="mailto:vaishakhsm@gmail.com"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="mobilescreen">
        <Slider {...settings}>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Madhur} />
                <Namecard
                  name="Madhur Malpani"
                  link1="https://www.linkedin.com/in/madhur-malpani-818646196/"
                  link2="mailto:madhur.nilu@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Atishay} />
                <Namecard
                  name="Atishay Jain"
                  link1="www.linkedin.com/in/atishay1743/"
                  link2="mailto:atishayjain@iitg.ac.in"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Arpita} />
                <Namecard
                  name="Arpita Mahapatra"
                  link1="https://www.linkedin.com/in/arpita-mohapatra-65b6a5196"
                  link2="arpitamohapatra1812@gmail.com"
                />
              </div>
              <div className="icon">
                <img src={Swapnil} />
                <Namecard
                  name="Swapnil Srivastava"
                  link1="https://www.linkedin.com/in/s-swapnil"
                  link2="mailto:s.swapnil1309@gmail.com"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="coord">
              <div className="icon">
                <img src={Vaishak} />
                <Namecard
                  name="Vaishakh"
                  link1="https://www.linkedin.com/in/vaishakhsmn/"
                  link2="mailto:vaishakhsm@gmail.com"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
