import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./CartPage.css";
import CartItem from "./Sections/CartItem";

export default function CartPage () {
  const [ cart, setCart ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const Cart = clayful.Cart;
    const options = {
      customer: localStorage.getItem("accessToken"),
    };

    Cart.getForMe({}, options, (err, result) => {
      if (err) {
        console.log(err.code);
        return;
      }

      const data = result.data;
      setCart(data.cart);
    });
  }, []);

  const items = cart.items;
  console.log(items)
  return (
    <div className="pageWrapper">
      <div className="shopping-cart">
        <h1 className="title">장바구니</h1>
        <div className="shopping-cart-body" style={ { minHeight: 100 } }>
          { items && items.length ? (
            items.map((item, index) => {
              return <CartItem
                key={ item._id }
                item={ item }
                index={ index }
              />
            })
          ): (
              <p style={{ textAlign: "center", marginTop: "2rem"}}>
                카트에 상품이 하나도 없습니다.
              </p>
          )}
        </div>

        { items && (
          <div className="bottom">
            <span className="total-price">
              총 금액: $ {cart.total?.amount.raw}
            </span>
            <button style={ { float: "right", padding: "4px 8px" } } type="button"
              onClick={() => navigate("/payment")}
            >
              결제
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
