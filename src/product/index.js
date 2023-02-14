import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); //product, product값을 변경하는 함수 (중요!!)만약 이 setproduct함수가 실행된다면, 컴포넌트 전체를 다시 re-rendering한다.
  useEffect(function () {
    axios
      .get(
        `https://dbe5fa4c-8754-4548-a440-4d22b98d7740.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(product);
      })
      .catch(function (error) {
        console.log("에러 : " + { error });
      });
  }, []); //useEffect함수의 두번째 인자를 비웠으므로 렌더링은 setProduct()함수를 부름으로써 자동으로 렌더링해주는 useState()로 한번만 렌더링

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다....</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2023년 2월 14일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
