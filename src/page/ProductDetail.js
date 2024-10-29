import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/eunbin55/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  const addProduct = () => {
    alert("장바구니에 추가되었습니다.");
  };
  if (item) {
    return (
      <Container>
        <Row>
          <Col className="detail-img">
            <img src={item.img} alt="" />
          </Col>
          <Col className="detail-info">
            <div>{item.title}</div>
            <div>₩ {item.price} 원</div>
            {item.choice && <div className="point-text">BEST</div>}
            <Form.Select className="select-size">
              <option>사이즈 선택</option>
              {item.size.map((size) => {
                return <option value={size}>{size}</option>;
              })}
            </Form.Select>
            <div className="d-grid gap-2" onClick={() => addProduct()}>
              <Button variant="dark">추가</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }
};

export default ProductDetail;
