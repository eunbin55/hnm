import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div onClick={goToDetailPage}>
      <img className="product-img" src={item?.img} alt="" />
      <div className="point-text">{item?.choice === true ? "BEST" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
