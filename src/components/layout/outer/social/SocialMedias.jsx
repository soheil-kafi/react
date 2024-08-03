import React from "react";

export const SocialMedias = () => {
  return (
    <div className="d-flex justify-content-around">
      <div className="p-2 card light-color cursor">
        <a href="t.me/soheil_sior" className="light-color">
          <div className="text-center">telegram</div>
          <div className="d-flex justify-content-center align-content-center my-3">
            <i className="fa-brands fa-telegram telegram"></i>
          </div>
          <div>
            my <span className="text-color">ID</span> : <br />
            @soheil_sior
          </div>
          <div className="mt-3 text-center">also you can click </div>
        </a>
      </div>
      <div className="p-2 card light-color cursor">
        <a href="https://github.com/soheil-kafi" className="light-color">
          <div className="text-center">github</div>
          <div className="d-flex justify-content-center align-content-center my-3">
            <i className="fa-brands fa-github github"></i>
          </div>
          <div>
            my <span className="text-color">ID</span> : <br />
            soheil-kafi
          </div>
          <div className="mt-3 text-center">also you can click</div>
        </a>
      </div>
      <div className="p-2 card light-color cursor">
        <div className="text-center">Email</div>
        <div className="d-flex justify-content-center align-content-center my-3">
          <i className="fa fa-envelope Email"></i>
        </div>
        <div>
          my <span className="text-color">ID</span> : <br />
          soheyikafi86@gmail.com
        </div>
        <div className="mt-3 text-center"> you can`t click :(</div>
      </div>
    </div>
  );
};
