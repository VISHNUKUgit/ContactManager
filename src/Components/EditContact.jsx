import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField, Stack } from '@mui/material';
import { editContact } from '../Server/allRequsets';
function EditContact({contact,deleteStatus,setDeleteStatus}) {
    const {name,email,imgURL,mob,id} = contact
    
  const [uname, setUname] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [cmob, setMob] = useState(mob);
  const [url, setUrl] = useState(imgURL);
  const [data,setData] = useState({
    "name":name,
    "email":email,
    "mob":cmob,
    "imgURL":url
  })
 
  const validate = (event) => {
    const { value, name } = event.target
    if (name === "uname") {
      if (value === "") {
        // Handle empty input separately
        setUname(value);
        // setErrorName(false)
      } else if (value.match(/^[a-zA-Z\s]{6,20}$/)) {
        setUname(event.target.value)
        // setErrorName(false)
        setData({...data,name:value})
      } else {
        setUname(event.target.value)
        // setErrorName(true)
      }
    }
    else if (name === "email") {
      if (value === "") {
        // Handle empty input separately
        setEmail(value);
        // setErrorEmail(false)
      } else if (value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
        setEmail(event.target.value)
        // setErrorEmail(false)
        setData({...data,email:value})

      } else {
        setEmail(event.target.value)
        // setErrorEmail(true)

      }
    }
    else if (name === "imgUrl") {
      if (value === "") {
        // Handle empty input separately
        setUrl(value);
        // setErrorUrl(true)

      }
      else {
        setUrl(event.target.value)
        setData({...data,imgURL:value})
        // setErrorUrl(false)

      }

    }
    else {
      if (value === "") {
        // Handle empty input separately
        setMob(value);
        // setErrorMob(false)
      } else if (value.match(/^[0-9]{10}$/)) {
        setMob(event.target.value)
        setData({...data,mob:value})
        // setErrorMob(false)

      } else {
        setMob(event.target.value)
        // setErrorMob(true)

      }
    }

  }
  const display = async(event) => {
    event.preventDefault();
    if (!uname || !uemail || !cmob || !url) {
      alert("Please Fill all....")

    } else {
      alert(`Name : ${uname} \n Email : ${uemail} \n Mob: ${cmob} \n imgUrl:${url}`)

    }
    const response = await editContact(id,data)
    setDeleteStatus(!deleteStatus)
console.log(response);
   
      

setShow(false)
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   console.log("this",data);
  return (
    <div>
        <Button variant="btn btn-success" onClick={handleShow}>
        Make Change
      </Button>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div >
              <TextField style={{ width: "100%" }} id="standard-basic" label="Name..." variant="standard" name='uname' onChange={(event) => validate(event)} value={uname || ""} />
              {/* {errorName && <div className="invalid">*Invalid Input</div>} */}
            </div>

            <div className="">
              <TextField style={{ width: "100%" }} id="standard-basic" label="Mobile number" variant="standard" type="text" name='mob' onChange={(event) => validate(event)} value={cmob || ""} />
              {/* {errorMob && <div className="invalid">*Invalid Input</div>} */}
            </div>

            <div className="">
              <TextField style={{ width: "100%" }} id="standard-basic" label="Email address" variant="standard" type="email" name='email' onChange={(event) => validate(event)} value={uemail || ""} />
              {/* {errorEmail && <div className="invalid">*Invalid Input</div>} */}
            </div>
            <div>
              <TextField style={{ width: "100%" }} id="standard-basic" label="Image Url" variant="standard" type="url" name='imgUrl' onChange={(event) => validate(event)} value={url || ""} />
              {/* {errorUrl && <div className="invalid">*Invalid Input</div>} */}
            </div>
            <div className='my-3'>
              <Stack direction="row" spacing={2}>
                {/* <Button type="button" onClick={(event) => display(event)} variant="contained" disabled={cmob || uemail || uname || url}>Add</Button> */}
                {/* <Button variant="outlined" onClick={reset}>Reset</Button> */}
              </Stack>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => display(event)}>update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditContact