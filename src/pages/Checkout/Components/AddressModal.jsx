import React, { useState } from "react";
import { useData } from "../../../context/data/data-context";
import { states } from "./states";
import { ActionType } from "../../../reducers/constants";
import { v4 as uuid } from 'uuid';


const AddressModal = ({ isOpen, setIsOpen }) => {
  const {
    dispatch
  } = useData();
  const [address, setAddress] = useState({
      id: uuid(),
      name: '',
      mobile: null,
      pincode: '',
      city: '',
      residence: '',
      alternatemobile: null,
      state: '',
      isSelected: false
  });



  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ActionType.ADD_ADDRESS, payload: address});
    setAddress("");
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-600 bg-opacity-75">
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white w-[40vw] p-6 rounded-lg shadow-lg md:w-[60vw] md:h-[80vh] md:overflow-y-scroll sm:w-[80vw] ">
            <h2 className="text-xl font-semibold mb-4 md:mb-2 underline underline-offset-4">Enter Your Address</h2>
            <div></div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 md:grid-cols-1 sm:gap-1 gap-2 ">
                <label htmlFor="address" className="block mb-2">
                  Name:
                  <input
                    id="address"
                    type="text"
                    value={address.name}
                    placeholder="Enter your Name"
                    onChange={(e) => setAddress({...address, name: e.target.value})}
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                    required
                  />
                </label>

                <label htmlFor="address" className="block mb-2">
                  Mobile No.:
                  <input
                    id="address"
                    type="number"
                    value={address.mobile}
                    placeholder="Mobile no."
                    onChange={(e) => setAddress({...address, mobile: e.target.value})}
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                    required
                  />
                </label>

                <label htmlFor="address" className="block mb-2">
                  Pincode:
                  <input
                    id="address"
                    type="number"
                    placeholder="Pincode"
                    value={address.pincode}
                    onChange={(e) => setAddress({...address, pincode: e.target.value})}
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                    required
                  />
                </label>

                <label htmlFor="address" className="block mb-2">
                  City:
                  <input
                    id="address"
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({...address, city: e.target.value})}
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                    required
                  />
                </label>
              </div>
              <label htmlFor="address" className="block mb-2">
                Address:
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={address.residence}
                  onChange={(e) => setAddress({...address, residence: e.target.value})}
                  className="border border-gray-300 rounded-lg p-5 w-full mt-1"
                  required
                />
              </label>
              <div className="grid grid-cols-2 md:grid-cols-1 md:gap-1 gap-2">
                <label htmlFor="address" className="block mb-2">
                  Alternate Ph:
                  <input
                    id="address"
                    type="text"
                    placeholder="Alternate Ph."
                    value={address.alternatemobile}
                    onChange={(e) => setAddress({...address, alternatemobile: e.target.value})}
                    className="border border-gray-300 rounded-lg p-2 w-full mt-1"
                  />
                </label>
                <label htmlFor="state">
                  State
                  <select
                    name=""
                    id="state"
                    required
                    className="border border-gray-300 rounded-lg p-2 w-full block mb-2 mt-1"
                    onChange={(e) => setAddress({...address, state: e.target.value})}
                  >
                    <option
                      disabled
                      selected
                      required
                      // className="border border-gray-300 rounded-lg p-2 w-full"
                    >
                      Choose State
                    </option>
                    {states.map((state, index) => (
                      <option value={state}>{state}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressModal;
