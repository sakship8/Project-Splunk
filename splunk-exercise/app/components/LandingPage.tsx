"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../Splunk-Logo.png";
import { textStyle } from "./LandingPageStyle";
import ToggleBar from "./ToggleBar";
import Menu from "./Menu";
import SearchForm from "./SearchForm";

function LandingPage() {
  
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={image} alt="Splunk Logo" width={200} height={110} />
        <p style={textStyle}>Data Dictionary</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ToggleBar />
        <SearchForm />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Menu />
      </div>
    </>
  );
}

export default LandingPage;
