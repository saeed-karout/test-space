import React from 'react';
// استيراد الصورة الأساسية من المسار
import faucetImage from '../assets/home1.jpg';

const Faucet = ({ selectedImage }) => {
  return (
    <div className="relative">
      {/* صورة الحنفية الأساسية */}
      <img src={faucetImage} alt="Faucet" className="w-100 h-100" />
      
      {/* الصورة المختارة من قبل المستخدم وتكون في المنتصف */}
      <img 
        src={selectedImage} 
        alt="Selected" 
        className="absolute inset-0 w-100 h-100 object-contain m-auto" 
        style={{ top: '55%', left: '40%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default Faucet;
