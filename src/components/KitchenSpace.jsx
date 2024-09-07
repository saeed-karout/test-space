// src/components/KitchenSpace.jsx
import React, { useState } from 'react';
import Chair from './Chair';
import Table from './Table';

const KitchenSpace = () => {
const [chairColor, setChairColor] = useState('bg-red-500');
const [tableColor, setTableColor] = useState('bg-blue-500');

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'];

return (
<div className="flex flex-col items-center space-y-4">
    <h1 className="text-xl font-bold">Kitchen Space</h1>

    <div className="flex space-x-4 ">

        <div className='flex flex-col gap-5'>
            <Chair color={chairColor} />
            <Chair color={chairColor} />

        </div>
        <div className='mt-2'>

            <Table color={tableColor} />

        </div>
        <div className='flex flex-col gap-5'>
            <Chair color={chairColor} />

            <Chair color={chairColor} />
        </div>
    </div>

    <div className="mt-4">
        <label className="mr-2 font-bold">Select Chair Color:</label>
        <select onChange={(e)=> setChairColor(e.target.value)}>
            {colors.map((color) => (
            <option key={color} value={color}>
                {color.replace('bg-', '').replace('-500', '')}
            </option>
            ))}
        </select>
    </div>

    <div className="mt-4">
        <label className="mr-2 font-bold">Select Table Color:</label>
        <select onChange={(e)=> setTableColor(e.target.value)}>
            {colors.map((color) => (
            <option key={color} value={color}>
                {color.replace('bg-', '').replace('-500', '')}
            </option>
            ))}
        </select>
    </div>
</div>
);
};

export default KitchenSpace;
