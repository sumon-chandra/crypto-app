import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  console.log(coinHistory);
  return (
    <div>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
    </div>
  );
}

export default LineChart;
