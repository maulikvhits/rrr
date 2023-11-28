import React from "react";
import { png } from "../../assets/png";
import { svg } from "../../assets/svg";

export default function Header() {
  return (
    <>
      <div class="header-main">
        <div class="container">
          <div class="row header-row">
            <div class="col-sm-2 col-md-2 col-lg-2">
              {/* <div class="header-logo-main">
                <img src={png.Logo} class="header-logo" />
              </div> */}
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7">
              <div class="header-nav-main">
                <nav class="header-nav">
                  <ul class="header-ul">
                    <li class="header-li">
                      <a class="header-link" href="">
                        SKIN CARE
                      </a>
                    </li>
                    <li class="header-li">
                      <a class="header-link" href="">
                        SLEEP CARE
                      </a>
                    </li>
                    <li class="header-li">
                      <a class="header-link" href="">
                        HAIR CARE
                      </a>
                    </li>
                    <li class="header-li">
                      <a class="header-link" href="">
                        BODY CARE
                      </a>
                    </li>
                    <li class="header-li">
                      <a class="header-link" href="">
                        OFFERS
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-lg-3">
              <div class="header-right-main">
                <div class="header-icon-box">
                  <a href="">
                    <img src={svg.ShoppingCart} class="header-icons" />
                  </a>
                </div>
                <div class="header-icon-box">
                  <a href="">
                    <img src={svg.User} class="header-icons" />
                  </a>
                </div>
                <div class="header-icon-box">
                  <a href="">
                    <img src={svg.Search} class="header-icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
