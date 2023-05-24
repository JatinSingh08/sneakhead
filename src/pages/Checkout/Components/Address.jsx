import React from 'react'

// {
//   residence: '8505 Christina Ridges',
//   alternatemobile: 4878794411,
//   city: 'West Cooper',
//   id: '2364c34d-7645-49cb-8b74-4bc5cb09711d',
//   mobile: 1293452481,
//   name: 'Vicki McDermott',
//   pincode: '820598',
//   state: 'Arunachal Pradesh'
// },
const Address = ({address}) => {
  const { residence, city, mobile, pincode, state, name} = address;
  return (
    <div className='border border-blue-400 rounded-md px-10 py-4 cursor-pointer hover:bg-blue-100'>
      <label className='flex flex-row-reverse gap-4 cursor-pointer'>
        <div className='text-start'>
          <h1 className='text-2xl font-semibold'>{name}</h1>
          <p>{residence}, {city}, {state}</p>
          <p>Mobile: {mobile}</p>
          <p>Pin: {pincode}</p>

        </div>
       <input type="radio" name='address'/>
      </label>
    </div>
  )
}

export default Address
