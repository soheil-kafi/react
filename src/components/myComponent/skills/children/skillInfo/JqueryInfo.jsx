import React from "react";

export const JqueryInfo = () => {
  return (
    <div className="light-color">
      <a href="https://Jquery.com">
        <span className="text-color">Jquery</span>
      </a>{" "}
      is a very famous JS library Their slogan is: Write less, do more , its
      work like this : <br />
      in Jquery : $(".test").click(console.log("click")) <br />
      in JS : document.getElementById("test").addEventListener("click",()=>(
      console.log("click"))) <br />
      easily you can see the different between them <br />
      also have some extra future than JS , like toggleClass and some cool
      animation and a lot more....
    </div>
  );
};
