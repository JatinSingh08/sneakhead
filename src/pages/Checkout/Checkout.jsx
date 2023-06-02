import React, { useState } from "react";
import { useData } from "../../context";
import Address from "./Components/Address.jsx";
import AddressModal from "./Components/AddressModal";
import BillSummary from "./Components/BillSummary";
import { useEffect } from "react";
import { Loader } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [addressSelected, setAddressSelected] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    if (!state.cart.length) {
      navigate("/productlist");
    }
  }, []);

  if(isLoading) return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Loader />
    </div>
  )

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-1 justify-items-center items-start m-auto">
          <div className="flex flex-col items-center justify-center m-auto gap-4">
            {state.addressList.map((address, idx) => (
              <Address address={address} 
              // setAddressSelected={setAddressSelected}
              // addressSelected={addressSelected}
              />
            ))}
            <button 
            onClick={() => setIsOpen(true)}
            className="button-theme bg-slate-900 blur-effect text-slate-200 w-full py-2">
              Add New Address
            </button>
          </div>
          <BillSummary 
          />
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
