import React, { useState } from "react";
import { useData } from "../../context";
import { BillingBox } from "../../components";
import Address from "./Components/Address.jsx";
import AddressModal from "./Components/AddressModal";

const Checkout = () => {
  const { state } = useData();
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="grid grid-cols-2 justify-items-center items-start m-auto">
          <div className="flex flex-col items-center justify-center m-auto gap-4">
            {state.addressList.map((address, idx) => (
              <Address address={address} />
            ))}
            <button 
            onClick={() => setIsOpen(true)}
            className="button-theme bg-slate-900 blur-effect text-slate-200 w-full px-10 py-4">
              Add New Address
            </button>
          </div>
          <BillingBox />
        </div>
      </div>
      {
        isOpen && (
          <AddressModal 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          />
        )
      }
    </>
  );
};

export default Checkout;
