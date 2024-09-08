import React, { useState } from 'react';

// استيراد الصور
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import faucetImage from '../assets/home1.jpg';

const Faucet = () => {
  const [selectedImage, setSelectedImage] = useState(image2); // الصورة المختارة (بداية من image2)

  return (
    <div className="h-screen w-screen relative">
      {/* تعيين الصورة image1 كخلفية */}
      <div
        className="absolute inset-0 bg-contain bg-center"
        style={{
          backgroundImage: `url(${faucetImage})`, // صورة الحنفية كخلفية
        }}
      >
        {/* عرض الصورة المختارة فوق الخلفية */}
        <img
          src={selectedImage}
          alt="Selected"
          className="absolute w-auto h-auto object-contain z-40"
          style={{ top: '52%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '50%', maxHeight: '50%' }}
        />
      </div>

      <div className="absolute right-0 top-[40%] transform -translate-x-1/2">

        {/* خيارات الصور عبر div مع ألوان قابلة للنقر */}
        <div className="flex flex-col space-y-4 mt-2 items-center">
        <label className=" mx-auto font-bold text-white">Select Items:</label>
          <div
            onClick={() => setSelectedImage(image1)}
            className="w-12 h-12 rounded-full cursor-pointer"
            style={{
              backgroundColor: '#828483',
              border: selectedImage === image1 ? '2px solid black' : 'none',
            }}
          ></div>

          <div
            onClick={() => setSelectedImage(image2)}
            className="w-12 h-12 rounded-full cursor-pointer"
            style={{
              backgroundColor: '#1B1B1B',
              border: selectedImage === image2 ? '2px solid black' : 'none',
            }}
          ></div>

          <div
            onClick={() => setSelectedImage(image3)}
            className="w-12 h-12 rounded-full cursor-pointer"
            style={{
              backgroundColor: '#E8E8E8',
              border: selectedImage === image3 ? '2px solid black' : 'none',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
