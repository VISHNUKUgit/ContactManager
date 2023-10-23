import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { TextField, Stack, Button } from '@mui/material';
import { addContact } from '../Server/allRequsets';

function AddContact() {
  const [uname, setUname] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [mob, setMob] = useState("");
  const [errorMob, setErrorMob] = useState(false);
  const [url, setUrl] = useState("");
  const [errorUrl, setErrorUrl] = useState(false)
  const [data,setData] = useState({
    "name":"",
    "email":"",
    "mob":"",
    "imgURL":""
  })
  const validate = (event) => {
    const { value, name } = event.target
    if (name === "uname") {
      if (value === "") {
        // Handle empty input separately
        setUname(value);
        setErrorName(true)
      } else if (value.match(/^[a-zA-Z\s]{6,20}$/)) {
        setUname(event.target.value)
        setErrorName(false)
        setData({...data,name:value})
      } else {
        setUname(event.target.value)
        setErrorName(true)
      }
    }
    else if (name === "email") {
      if (value === "") {
        // Handle empty input separately
        setEmail(value);
        setErrorEmail(false)
      } else if (value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
        setEmail(event.target.value)
        setErrorEmail(false)
        setData({...data,email:value})

      } else {
        setEmail(event.target.value)
        setErrorEmail(true)

      }
    }
    else if (name === "imgUrl") {
      if (value === "") {
        // Handle empty input separately
        setUrl(value);
        setErrorUrl(true)

      }
      else {
        setUrl(event.target.value)
        setData({...data,imgURL:value})
        setErrorUrl(false)

      }

    }
    else {
      if (value === "") {
        // Handle empty input separately
        setMob(value);
        setErrorMob(false)
      } else if (value.match(/^[0-9]{10}$/)) {
        setMob(event.target.value)
        setData({...data,mob:value})
        setErrorMob(false)

      } else {
        setMob(event.target.value)
        setErrorMob(true)

      }
    }

  }
  console.log(errorEmail,errorName,errorMob,errorUrl);
  const display = async(event) => {
    event.preventDefault();
    if (!uname || !email || !mob || !url) {
      alert("Please Fill all....")

    } 
    else {
      alert(`Name : ${uname} \n Email : ${email} \n Mob: ${mob} \n imgUrl:${url}`)
      const reponse = await addContact(data)

    // console.log(reponse.statusText);
      if(200<reponse.status||300>reponse.status){
        alert('Success fully uploaded')
      }else{
        alert("reponse.statusText")
      }

    }
    

      reset()
  }
  const reset = () => {
    setUname("")
    setMob("")
    setEmail("")
    setUrl("")
  }
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
  return (
    <div>
      <div className='w-100 position-fixed' style={{ backdropFilter: 'sepia(10%)',zIndex:'1' }}>
        <Navbar />
      </div>
      <div className='w-100   bg-dark' style={{ height: '90px' }}>
      </div>
      <div className='w-100 p-3 d-flex justify-content-center'>
        <div className={`${screenSize>600?'w-50 border rounded p-2':'w-75 border rounded p-2'}`}>
        
          <div className='text-center'><h1>Enter details</h1></div>
          <form>
            <div >
              <TextField style={{ width: "100%" }} id="standard-basic" label="Name..." variant="standard" name='uname' onChange={(event) => validate(event)} value={uname || ""} />
              {errorName && <div className="invalid">*Invalid Input</div>}
            </div>

            <div className="">
              <TextField style={{ width: "100%" }} id="standard-basic" label="Mobile number" variant="standard" type="text" name='mob' onChange={(event) => validate(event)} value={mob || ""} />
              {errorMob && <div className="invalid">*Invalid Input</div>}
            </div>

            <div className="">
              <TextField style={{ width: "100%" }} id="standard-basic" label="Email address" variant="standard" type="email" name='email' onChange={(event) => validate(event)} value={email || ""} />
              {errorEmail && <div className="invalid">*Invalid Input</div>}
            </div>
            <div>
              <TextField style={{ width: "100%" }} id="standard-basic" label="Image Url" variant="standard" type="url" name='imgUrl' onChange={(event) => validate(event)} value={url || ""} />
              {errorUrl && <div className="invalid">*Invalid Input</div>}
            </div>
            <div className='my-3'>
              <Stack direction="row" spacing={2}>
                <Button type="button" onClick={(event) => display(event)} variant="contained" disabled={errorMob || errorEmail || errorName || errorUrl}>Add</Button>
                <Button variant="outlined" onClick={reset}>Reset</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddContact