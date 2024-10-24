import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div onClick={goToDetailPage}>
      <img className="product-img" width={300} src={item?.img} alt="" />
      <div>{item?.choice === true ? "concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
