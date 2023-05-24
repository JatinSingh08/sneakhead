import React, { useState } from "react";

const AddressModal = ({ isOpen, setIsOpen}) => {
  const [address, setAddress] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform address submission logic here
    console.log("Address submitted:", address);
    setAddress("");
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-600 bg-opacity-75">
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Your Address</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="address" className="block mb-2">
                Address:
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                required
              />

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
