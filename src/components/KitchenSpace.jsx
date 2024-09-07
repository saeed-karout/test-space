import React, { useState } from 'react';
import Faucet from './Faucet';
// استيراد الصور
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';

const KitchenSpace = () => {
  // الصورة الافتراضية هي الصورة الأولى
  const [selectedImage, setSelectedImage] = useState(image1);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">Select Image for Faucet</h1>

      {/* مكون الحنفية مع الصورة المختارة */}
      <Faucet selectedImage={selectedImage} />

      {/* قوائم منسدلة لاختيار الصورة */}
      <div className="mt-4">
        <label className="mr-2 font-bold">Select Image:</label>
        <select
          value={selectedImage}
          onChange={(e) => setSelectedImage(e.target.value)}
          className="border rounded p-1"
        >
          <option value={image1}>Image 1</option>
          <option value={image2}>Image 2</option>
        </select>
      </div>
    </div>
  );
};

export default KitchenSpace;
