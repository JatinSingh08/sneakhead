import React, {useEffect, useState} from 'react';
import './profile.css'
import { Address, Information } from '../../components';
const items = [
  {
    title: 'Profile Information',
    content: <Information />
  },
  {
    title: 'Address',
    content: <Address />
  }
]
 const Profile = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  // const [content ,setContent] = useState();
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    setIsLoading(false);
    
    const controller = new AbortController();

    return () => {
      controller.abort(); // cleanup 
    }

  }, [activeTab]);

  return (
    <section className='min-h-screen grid items-center justify-center'>
      <div className="border border-black w-[60vw] h-[60vh] px-[5px] py-[15px] overflow-y-scroll md:w-[90vw]">
        <div className='tabs__button'>
          {
            items.map((item, idx) => {
            return (
              <button
              onClick={() => {
                setActiveTab(idx);
              }}
              className={idx === activeTab ? 'tab active' : 'tab'}
              >{item.title}</button>
            )})
          }

        </div>
        <div className="tabs__content">
          {
            isLoading ? (
            <>
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '6rem',
              width: '100%',
            }}
            >
              <div className="loader"></div>
            </div>
            </>
            )
            : (
              <>
                {
                  isLoading === false && items[activeTab].content
                }
              </>
              )
          }
        </div>
      </div>

    </section>
  )
}
export default Profile