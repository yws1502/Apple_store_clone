import React from "react";
import clayful from "clayful/client-js";

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
    <div className="pageWrapper">
      LandingPage
    </div>
  )
}

export default LandingPage;