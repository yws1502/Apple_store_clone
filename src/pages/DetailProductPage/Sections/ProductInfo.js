import { Alert } from "react-bootstrap";
import clayful from "clayful/client-js";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./ProductInfo.css";

export default function ProductInfo ({ detail }) {
  const [ count, setCount ] = useState(1);
  const [ show, setShow ] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  const handleQuantityClick = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 0) return;
      setCount((prev) => prev - 1);
    }
  }

  const handleActionClick = (type) => {
    if (!isAuth) {
      alert("로그인해주세요.");
      navigate("/login");
      return;
    }

    const Cart = clayful.Cart;
    const payload = {
      product: detail._id,
      variant: detail.variants[ 0 ]._id,
      quantity: count,
      shippingMethod: detail.shipping.methods[ 0 ]._id,
    };
    const options = {
      customer: localStorage.getItem("accessToken"),
    };

    Cart.addItemForMe(payload, options, (err, result) => {
      if (err) {
        console.log(err.code);
        return;
      }
      
      if (type === "cart") {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/user/cart");
        }, 1000);
      }
    });
  };

  if (!detail) return;
  return (
    <div>
      { show && (
        <Alert variant="info">
          <Alert.Heading> 상품이 장바구니에 담겼습니다.</Alert.Heading>
          <p>장바구니에서 확인해주세요.</p>
        </Alert>
      )}
      <p style={ { color: "#bf4800", marginBottom: 0 } }>New</p>
      <h1 style={ { marginBottom: 20 } }>{ detail.name }</h1>
      <h5>
        {detail.summary} 개별 판매 가격 {detail.price?.original.fomatted}
      </h5>
      <div className="quantity">
        <p style={ { fontWeight: 600, marginBottom: 5 } }>수량</p>
        <button onClick={() => handleQuantityClick("plus")} className="plus-btn" type="button" name="button">+</button>
        <input type="text" readOnly name="number" value={count} />
        <button onClick={() => handleQuantityClick("minus")} className="minus-btn" type="button" name="button">-</button>
        <br />
        <h3>총 상품 금액 : { detail.price?.original.raw * count }원</h3>
        <br />

        <div onClick={() => handleActionClick("cart")} className="product-info-action">장바구니에 담기</div>
        <div onClick={() => handleActionClick("pay")} className="product-info-action">바로 구매</div>
      </div>
    </div>
  )
}
