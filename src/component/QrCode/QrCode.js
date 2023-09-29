import React from "react";
import "./QrCode.css";
import qrCode from "../../images/Qr-code/qr-code.jpg";

const QrCode = () => {
  return (
    <div className="qr-code-parent-div">
      <h1 className="qr-code-download-header">
        Download Mobile App For Convenience
      </h1>
      <div className="qr-code-img-div">
        <img className="qr-code-img" src={qrCode} alt="" />
      </div>
    </div>
  );
};

export default QrCode;
