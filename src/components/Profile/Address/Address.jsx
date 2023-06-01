import React, { useState } from "react";
import { useAuth, useData } from "../../../context";
import AddressModal from "../../../pages/Checkout/Components/AddressModal";
import { ActionType } from "../../../reducers/constants";

const Address = () => {
  const {
    state: { addressList },
    dispatch
  } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const addressDeleteHandler = (id) => {
    dispatch({ type: ActionType.DELETE_ADDRESS, payload: id})
  }

  return (
    <div>
      <button className="button-theme bg-slate-900 blur-effect text-slate-200 w-full py-2"
      onClick={() => setIsOpen(true)}
      >
        Add New Address
      </button>{" "}
      
      {
      addressList.length > 0 ? (
        
        addressList?.map((address, index) => (
          <div className="border border-dotted border-blue-500 p-5 hover:bg-slate-100 cursor-pointer mt-5">
            <h1>{address.name}</h1>
            <p>
              {address.residence}, {address.state}
            </p>
            <p>Pincode: {address.pincode}</p>
            <p>Ph: {address.mobile}</p>
            <button className="bg-green-300 py-0.5 px-5 rounded-lg button-theme">Edit</button>
            <button className="bg-red-500 py-0.5 px-5 rounded-lg ml-5 button-theme"
            onClick={() => addressDeleteHandler(address.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
         <h1 className="text-2xl text-slate-900">No address found.</h1>
      )
      }
      
        {
        isOpen && (
          <AddressModal 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          />
        )
      }

    </div>
  );
};

export default Address;
