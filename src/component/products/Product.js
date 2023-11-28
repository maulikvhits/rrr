import React, { useEffect, useState } from "react";
import Index from "../../index";
import { png } from "../../assets/png";

// <!-- <script src="./assets/js/jquery-3.6.0.min.js"></script> -->
// <script src="./js/jquery-3.6.0.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
// <!-- <script src="./assets/js/popper.min.js"></script>
// <script src="./assets/js/bootstrap.min.js"></script> -->

export default function Product() {
  const [slideNo, setSlideNo] = useState(1);

  useEffect(() => {
    showSlides(slideNo);
  }, [slideNo]);
  console.log(slideNo);
  function plusSlides(n) {
    setSlideNo((prev) => {
      if (prev >= 1) {
        return (prev += n);
      }
    });
  }

  function currentSlide(n) {
    setSlideNo((prev) => {
      if (prev >= 0) {
        return (prev = n);
      }
    });
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
      setSlideNo(1);
    }
    if (n < 1) {
      setSlideNo(1);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNo - 1].style.display = "block";
    dots[slideNo - 1].className += " active";
    captionText.innerHTML = dots[slideNo - 1].alt;
  }

  return (
    <div className="main-wrapper">
      <img src={png.Layer40} alt="Layer-40" className="bowl-img img-fluid" />
      <img src={png.Layer42} alt="Benefits" className="top-img img-fluid" />
      <div className="logo-sec">
        <div className="container">
          <img src={png.Benefits} alt="Benefits" className="main-logo" />
        </div>
      </div>
      <div className="gummies-sec">
        <img src={png.Layer42} alt="Benefits" className="right-img img-fluid" />
        <div className="container">
          <div className="gummies-wrapper">
            <img src={png.Layer24} alt="Layer 24" className="product-img" />
            <div className="spark-benefit-wrapper">
              <div className="sparkling-sec">
                <div className="title">
                  <h4>
                    Vittzios Sparkling Skin <br /> Gummies
                  </h4>
                </div>
                <p>
                  introducing Vittzios Sparkling Skin Gummies, the solution to
                  combat the visible signs of again that tend to appear as we
                  grow older, such as fine lines, wrinkles, sunsportd,saggings
                  skin, and that unwanted tan. Our gummies are formulated with
                  potent and extensively researched antioxidants, working
                  tirelessly to rejuvenate your skin and turn back the clock on
                  those age-related effects.
                </p>
              </div>
              <div className="benefit-sec">
                <h6>Benefits</h6>
                <div className="benegit-img-sec">
                  <img
                    src={png.Layer55}
                    alt="Layer 55"
                    className="benegit-sec-img"
                  />
                  <img
                    src={png.Layer56}
                    alt="Layer 56"
                    className="benegit-sec-img"
                  />
                  <img
                    src={png.Layer57}
                    alt="Layer 57"
                    className="benegit-sec-img"
                  />
                  <img
                    src={png.Layer58}
                    alt="Layer 58"
                    className="benegit-sec-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="main-carousel">
                <div className="carousel">
                  <div className="container">
                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>

                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>

                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>

                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>

                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>
                    <div className="mySlides">
                      <img src={png.Slide} />
                    </div>
                    <div className="caption-container">
                      <p id="caption"></p>
                    </div>
                    <div className="small-image-main">
                      <div className="row x">
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(1)}
                            alt="The Woods"
                          />
                        </div>
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(2)}
                            alt="Cinque Terre"
                          />
                        </div>
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(3)}
                            alt="Mountains and fjords"
                          />
                        </div>
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(4)}
                            alt="Northern Lights"
                          />
                        </div>
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(5)}
                            alt="Snowy Mountains"
                          />
                        </div>
                        <div className="column cus-small-image">
                          <img
                            className="demo cursor"
                            src={png.Slide}
                            onClick={() => currentSlide(6)}
                            alt="Snowy Mountains"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="navigation-wrapper">
                      <button
                        className="prev"
                        onClick={() => {
                          if (slideNo > 1) {
                            plusSlides(-1);
                          }
                        }}
                      >
                        ❮
                      </button>
                      <button
                        className="next"
                        onClick={() => {
                          if (slideNo < 6) {
                            plusSlides(1);
                          }
                        }}
                      >
                        ❯
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="bus-add-main">
                <div className="buy-sec">
                  <div className="pack-sec">
                    <div className="pack-main">
                      <p>
                        {" "}
                        60 day <br /> pack
                      </p>
                      <p className="my-1"> 30 Gummies</p>
                      <p> Rs-1299</p>
                    </div>
                    <div className="pack-main">
                      <p>
                        {" "}
                        90 day <br /> pack
                      </p>
                      <p className="my-1"> 30 Gummies</p>
                      <p> Rs-1699</p>
                    </div>
                  </div>
                </div>
                <div className="price-sec">
                  <h5>
                    <span>&#8377;</span> 899
                  </h5>
                  <p>1 month | 30 Gummies</p>
                </div>
                <div className="bus-btn-main">
                  <div className="btn buy-btn">Buy it now</div>
                  <div className="btn buy-btn">add to cart</div>
                </div>
                <div className="ingredents-sec">
                  <h6>Ingredents</h6>
                  <p>
                    <span>RESVERATROL:</span>
                    Itisapotentantioxidantitcanalsoprevent
                    hyperpigmentationcausedbyinflammationandfreeradicals.
                  </p>
                  <p>
                    <span>ASTAXANTHIN:</span>Acts as a
                    powerfulantioxidant,helping to reduce
                    oxidativestressthatcontributestoaging,pigmentation,and
                    wrinkles
                  </p>
                  <p>
                    <span>BETACAROTENE:</span>It helps in cell turnover,
                    promoting even skin tone and reducing pigmentation. It also
                    supports collagen production,which can help reduce the
                    appearance of wrinkles
                  </p>
                  <p>
                    <span>FLAXSEEDS:</span>Packed with omega-3s,flax seeds calm
                    inflammstion and enhance skin's moisture for a natural glow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advantages-sec">
        <div className="container">
          <div className="advantages-img-sec">
            <img src={png.Layer59} alt="Layer 59" className="benegit-sec-img" />
            <img src={png.Layer60} alt="Layer 60" className="benegit-sec-img" />
            <img src={png.Layer61} alt="Layer 61" className="benegit-sec-img" />
            <img src={png.Layer62} alt="Layer 62" className="benegit-sec-img" />
            <img src={png.Layer63} alt="Layer 63" className="benegit-sec-img" />
            <img src={png.Layer64} alt="Layer 64" className="benegit-sec-img" />
          </div>
        </div>
      </div>
      <div className="use-sec-main">
        <div className="container">
          <div className="use-sec-wrapper">
            <div className="use-this-box">
              <h1>USE THIS FOR</h1>
            </div>
            <div className="use-this-box">
              <h1>HOW TO USE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
