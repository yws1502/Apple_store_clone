import clayful from "clayful/client-js";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductInfo from "./Sections/ProductInfo";
import React, { useEffect, useState } from "react";

export default function DetailProductPage () {
  const params = useParams();
  const productId = params.productId;
  const [ item, setItem ] = useState({});
  
  useEffect(() => {
    const Product = clayful.Product;

    const options = {};

    Product.get(productId, options, (err, result) => {
      if (err) {
        console.log(err.code);
        return;
      }

      const data = result.data;
      console.log(data);
      setItem(data);
    });
  }, []);

  return (
    <div className=" pageWrapper">
      <Row>
        <Col md>
          <div>
            <img
              style={{ width: "100%" }}
              src={item.thumbnail?.url}
              alt={item.name}
            />
          </div>
        </Col>
        <Col md>
          <ProductInfo detail={item} />
        </Col>
      </Row>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  );
}
