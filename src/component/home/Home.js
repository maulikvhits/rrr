import { png } from "../../assets/png";
import { svg } from "../../assets/svg";

export default function Home() {
  return (
    <>

      <section class="banner-section">
        {/* <div class="container">
            <div class="row">
                <div class="banner-content-main">
                    |<h1 class="banner-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, rerum.</h1>
                    <p class="banner-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ducimus,
                        facere officiis doloremque iusto, sequi maxime, illum at sapiente earum eligendi nam delectus
                        reprehenderit eum?</p>
                </div>
            </div>
        </div> */}
      </section>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="about-content-main">
                <img src={png.About1} class="about-img" />
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="about-content-main">
                <img src={png.About2} class="about-img" />
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="about-content-main">
                <img src={png.About3} class="about-img" />
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="about-content-main">
                <img src={png.About4} class="about-img" />
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="about-content-main">
                <img src={png.About5} class="about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="service-section">
        <div class="container">
          <div class="row service-row">
            <div class="col-sm-12 col-md-8 col-lg-8">
              <div class="service-content-main">
                <img src={png.Service} class="service-img" />
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="service-content-main service-img-rights">
                <ul class="service-ul">
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service1} class="service-icons" />
                    </div>
                  </li>
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service2} class="service-icons" />
                    </div>
                  </li>
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service3} class="service-icons" />
                    </div>
                  </li>
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service4} class="service-icons" />
                    </div>
                  </li>
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service5} class="service-icons" />
                    </div>
                  </li>
                  <li class="service-li">
                    <div class="service-box">
                      <img src={png.Service6} class="service-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
