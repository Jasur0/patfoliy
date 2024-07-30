import "./main.scss";
import man from "../../image/man.jpg";
import abImg from "../../image/ab-img.png";
import sayt1 from "../../image/sayt1.jpg";
import sayt2 from "../../image/sayt2.jpg";
import sayt3 from "../../image/sayt3.jpg";

import {
  CiMail,
  CiLocationOn,
  CiPhone,
  CiLocationArrow1,
} from "react-icons/ci";
import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
function Main() {
  return (
    <main className="main">
      <div className="container">
        <section className="home">
          <div className="home__left">
            <p className="home__left_hello">Salom men</p>
            <h3 className="home__left_name">
              Jasurbek Ravshanov <span>Mahsulot dizayneri</span>
            </h3>
            <div className="home__left_location">
              <p>
                <CiMail /> jasurbekravshanov05@gmail.com
              </p>
              <p>
                <CiPhone />
                +998 93 898 40 80
              </p>
              <p>
                <CiLocationOn /> Sirdaryo Viloyati Xovos Tumani
              </p>
            </div>
            <div className="home__left_networc">
              <a href="https://t.me/jasur01_08">
                <FaTelegram />
              </a>
              <a href="https://github.com/Jasur0">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/__jasur_bek_/?next=%2F">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="home__rigth">
            <img src={man} alt="" />
          </div>
        </section>
        <section className="about">
          <div className="about__left">
            <img src={abImg} alt="" />
          </div>
          <div className="about__right">
            <h3 className="about__right_title">Men haqimda</h3>
            <p className="about__right_text">
              Salom, men Jasur, Sirdaryoda joylashgan veb-dasturchiman. Men
              veb-saytlarni loyihalash, qurish va sozlash bo'yicha boy tajribaga
              egaman. Men ham yaxshiman
            </p>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>SCSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next</span>
              <span>Git</span>
            </div>
          </div>
        </section>
        <section className="sites">
          <h3>Saytlarim</h3>
          <a href="https://blacnote.netlify.app" className="sites__box">
            <img src={sayt1} alt="" />
            <h3>Todo List</h3>
            <p>Todo List kerakli ishlaringizni belgilab qo'ying</p>
          </a>
          <a href="https://cinifile1top.netlify.app/" className="sites__box">
            <img src={sayt2} alt="" />
            <h3>CINIPHLEY</h3>
            <p>Kinolar sayti, hamma kinolar treylerlari mavjut</p>
          </a>
          <a href="https://blacnote.netlify.app/" className="sites__box">
            <img src={sayt3} alt="" />
            <h3>Ob Havo</h3>
            <p>obhavo sayt hohlagan mamlakatingizni yozib obhavosini ko'ring</p>
          </a>
        </section>
        <section className="contact">
          <h4>Men bilan bog'lanish chun</h4>
          <div className="contact__box">
            <div>
              <CiLocationArrow1 />
            </div>
            <h5>Manzil</h5>
            <p>Bunyotkor mahallasi Xovos ko'chasi</p>
          </div>
          <div className="contact__box">
            <div>
              <CiMail />
            </div>
            <h5>Elektron pochta</h5>
            <p>Bunyotkor mahallasi Xovos ko'chasi</p>
          </div>
          <div className="contact__box">
            <div>
              <CiPhone />
            </div>
            <h5>Telefon</h5>
            <p>+998 93 898 40 80</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
