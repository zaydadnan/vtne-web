import React from "react";
import phone from '../assets/phone.png';

const PhoneApp: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <img src={phone} alt="logo" className="h-[75vh]" />
    </div>
  );
};

export default PhoneApp;
