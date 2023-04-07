import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { FaTelegram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./AboutItem.scss";
import MyButton from "../../components/UI/button/MyButton";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
const AboutItem = () => {
  const value = useContext(Context);
  const { id } = useParams<string>();
  if (id !== undefined) {
    const product = value?.products.find((p) => p.id === parseInt(id));

    if (!product) {
      return <div>none</div>;
    } else {
      return (
        <div className="aboutItem">
          <div className="images">
            {<ImageCarousel images={product.images} />}
          </div>
          <div className="aboutItem-info">
            <div>
              <span>Icon</span>
              <div className="share">
                <span>Поделеиться:</span>
                <div>
                  <a href="https://www.telegram.com/" target=''>
                    <FaTelegram />
                  </a>
                  <a href="https://www.facebook.com/" target=''>
                    <FaFacebook />
                  </a>
                  <a href="https://www.whatsapp.com/" target=''>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div>
                <span>{product.price} $</span>
                <Link to="/">
                  <MyButton>Back</MyButton>
                </Link>
                <MyButton>Add to cart</MyButton>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <></>;
};

export default AboutItem;
