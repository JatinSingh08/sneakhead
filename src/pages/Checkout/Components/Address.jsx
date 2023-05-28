import React from 'react';

const Address = ({ address }) => {
  const { residence, city, mobile, pincode, state, name } = address;
  return (
    <div className="border border-blue-400 rounded-md px-10 py-3 w-full cursor-pointer hover:bg-blue-100">
      <label className="flex items-start gap-4 cursor-pointer">
        <input type="radio" name="address" className='m-auto' required/>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p>
            {residence}, {city}, {state}
          </p>
          <p>Mobile: {mobile}</p>
          <p>Pin: {pincode}</p>
        </div>
      </label>
    </div>
  );
};

export default Address;
