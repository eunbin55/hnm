import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, _setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col xs lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
