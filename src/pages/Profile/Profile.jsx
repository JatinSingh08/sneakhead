import React, {useEffect, useState} from 'react';
import './profile.css'
import { Address, Information, OrderHistory } from '../../components';
const items = [
  {
    title: 'Profile Information',
    content: <Information />
  },
  {
    title: 'Address',
    content: <Address />
  },
  {
    title: 'Order History',
    content: <OrderHistory />
  }
]
 const Profile = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  // const [content ,setContent] = useState();
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    setIsLoading(false);
    // setContent("");
    
    const controller = new AbortController();
    // const signal = controller.signal;

    // const fetchData = async () => {

    //   setTimeout(async () => {

    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/posts/${activeTab + 1}`
    //     , {signal});
    //     const data = await response.json();
    //     setIsLoading(false);
    //     setContent(data.body);

    //   }, 1000);

    // };
    // fetchData();

    return () => {
      controller.abort(); // cleanup 
    }

  }, [activeTab]);

  return (
    <section className='h-[100vh] grid items-center justify-center'>
      <div className="tabs__container ">
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
                <b>{items[activeTab].title}: </b>
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