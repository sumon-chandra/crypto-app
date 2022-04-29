import React from "react";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News,
  HomePage,
} from "./components";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/exchanges" element={<Exchanges />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route path="/crypto:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "White", textAlign: "center" }}
          >
            Cryptoverse <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
