import React from 'react';
// استيراد الصورة الأساسية من المسار
import faucetImage from '../assets/home1.jpg';

const Faucet = ({ selectedImage }) => {
  return (
    <div className="relative">
      {/* صورة الحنفية الأساسية بحجمها الطبيعي */}
      <img src={faucetImage} alt="Faucet" className="m-auto" style={{ display: '', maxWidth: '100%', height: 'auto' }} />
      
      {/* الصورة المختارة من قبل المستخدم وتكون في المنتصف بحجمها الطبيعي */}
      <img 
        src={selectedImage} 
        alt="Selected" 
        className="absolute object-cover" 
        style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', height: 'auto' }}
      />
    </div>
  );
};

export default Faucet;
