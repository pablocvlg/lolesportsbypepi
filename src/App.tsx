import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { createGlobalStyle } from 'styled-components';
import Home from "./pages/Home";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    font-family: sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
        <Analytics />
      </Router>
    </>
  );
}