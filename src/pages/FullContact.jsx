import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactCard from '../Components/ContactCard'
import { useState,useEffect } from 'react'
import { getAllContact } from '../Server/allRequsets'

function FullContact() {
  const[data,setData] = useState()
  const[deleteStatus,setDeleteStatus] =useState(true)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', function () {
            const screenWidth = window.innerWidth;
            setScreenSize(screenWidth);
        });

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', () => { });
        };
    }, []);
    // API call
    const getData = async()=>{
      const response = await getAllContact()
      setData(response.data)
    }
    useEffect(()=>{
      
      getData()
    },[deleteStatus])
    // console.log(data);
  return (
    <>
<div className='w-100 position-fixed' style={{ backdropFilter: 'sepia(10%)',zIndex:'1' }}>
                <Navbar />
</div>
<div className='w-100   bg-dark' style={{height:'90px'}}>
  <h1>
    h
  </h1>
</div>
<h1 className='text-center'>All contacts</h1>
<div className={`${screenSize>600?'d-flex flex-wrap':'d-flex flex-column  align-items-center'}`}>
  {
    data?data.map((contact)=>(<ContactCard contact={contact} deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus}/>)):<p>no contact added</p>
  }
  
  
</div>
<Footer/>
    </>
  )
}

export default FullContact