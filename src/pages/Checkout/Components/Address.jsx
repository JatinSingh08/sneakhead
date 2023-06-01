import React from 'react';
import { ActionType } from '../../../reducers/constants';
import { useData } from '../../../context';

const Address = ({ address,addressSelected, setAddressSelected }) => {
  const { id, residence, city, mobile, pincode, state, name } = address;
  const { dispatch } = useData();
  const addressSelectHandler = (e) => {
    dispatch({ type: ActionType.SELECT_ADDRESS, payload: {id, e}})
  }
  return (
    <div className="border border-blue-400 rounded-md px-10 py-3 w-full md:w-[80vw] cursor-pointer hover:bg-blue-100">
      <label className="flex items-start gap-4 cursor-pointer">
        <input type="radio" name="address" className='m-auto' required
        checked={addressSelected}
        onChange={addressSelectHandler}
        // onChange={(e) => e.target.checked ? setAddressSelected(true) : setAddressSelected(false)}
        />
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
