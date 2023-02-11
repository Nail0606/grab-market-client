import "./index.css";
import axios from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]); //state 값, state를 변경시키는 함수
  React.useEffect(function () {
    //무한으로 useState가 되는 것을 방지(두번째 인자를 비워둠으로써)
    axios
      .get(
        "https://dbe5fa4c-8754-4548-a440-4d22b98d7740.mock.pstmn.io/products"
      )
      .then(function (result) {
        //처음에 비워둔 products변수가 서버에서 값을 읽어온 후 값 할당
        const products = result.data.products;
        setProducts(products); //useState()를 통해 생성된 setProducts함수를 통해 값 할당
      })
      .catch(function (error) {
        console.log("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt=""
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
