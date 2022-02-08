import React from "react";
import clayful from "clayful/client-js";
import "./LandingPage.css";

import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";

function LandingPage () {
  const Product = clayful.Product;

  const options = {
    query: {
      page: 1
    }
  };

  Product.list(options, function (err, res) {
    if (err) {
      console.log(err.isClayful);
      console.log(err.model);
      console.log(err.method);
      console.log(err.status);
      console.log(err.headers);
      console.log(err.code);
      console.log(err.message);
    }
    
    console.log(res.status);
    console.log(res.headers);
    console.log(res.data);
  })

  return (
    <div>
      <section className="welcome">
        <h1>좋아하는 Apple 제품을 구입하는 가장 좋은 방법</h1>
      </section>

      <section className="product-grid">
        <div className="grid-container">
          <h2>Product</h2>
          {/* <div className="grid">renderCards</div> */}
        </div>
      </section>

      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="/">Learn more</a>
              </li>
              <li>
                <a href="/">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade-in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="/">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={appletv} alt="apple" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={banker} alt="apple" />
                </div>

                <div className="watch-more-wrapper">
                  <a href="/">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={series5} alt="apple" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-hightlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} alt="apple" />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="/">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  Apple Card Monthly Installments
                </div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="/">Learn more</a>
                    </li>
                    <li>
                      <a href="/">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;