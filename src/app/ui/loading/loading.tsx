"use client"
import React, { useState } from "react";
import "./loading.css"
const Loading = () => {
    const [loading,setLoading] = useState(false)
    const changeLoad = () => {
        setTimeout(() => {
            setLoading(true)
        }, 2000);
    }
    changeLoad()
  return (
    <div>
      <div className={loading ? "hidden" : "center"}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Loading;
