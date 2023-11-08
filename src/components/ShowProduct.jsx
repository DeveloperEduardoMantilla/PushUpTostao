import product from "../../public/img/product1.png";
import iconFac from "../../public/img/facebook.png";
import iconIns from "../../public/img/instagram.png";
import iconTwit from "../../public/img/twitter.png";

import Options from "../components/Options.jsx";

export default function ShowProduct() {
  return (
    <>
        <div className="showProduct">
            <div className="module-info">
                <h1>Cafe Tostao Gourmet</h1>
                <p>
                Cafe Tostao Gourmet 454gr
                </p>
            </div>
            <div className="module-img">
                <img src={product} alt="" />
            </div>
            <div className="social-media">
                <a target="t_blank" href="https://www.facebook.com/StarbucksColombia/?locale=es_LA"><img className="icon" src={iconFac} alt="" /></a>
                <a target="t_blank" href="https://twitter.com/Starbucks"><img className="icon" src={iconTwit} alt="" /></a>
                <a target="t_blank" href="https://www.instagram.com/starbuckscol/?hl=es"><img className="icon" src={iconIns} alt="" /></a>
            </div>
        </div>
        <Options/>
    </>
  )
}
