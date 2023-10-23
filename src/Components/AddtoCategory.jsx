import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {  addAcontactToCategory, getAcontact, showAllCategory } from '../Server/allRequsets';
function AddtoCategory({idToAddToCat}) {
    const [show, setShow] = useState(false);
const [categorylist,setCategorylist] = useState("")
  const handleClose = () => {setShow(false)
    setSelectedCategoryDetails('')
};
  const handleShow = () => setShow(true);
// api call to get all categories  
useEffect(()=>
{const showCategories = async()=>{
    const response = await showAllCategory()
    setCategorylist(response.data)}
    showCategories()
},[])
  

//   select Category
  const [selectedCategoryDetails, setSelectedCategoryDetails] = useState('');

  const handleChange = (event) => {
    
    setSelectedCategoryDetails(event.target.value);
  };
// add contact to category
const handleAddContactToCat = async()=>{
    const {data} = await getAcontact(idToAddToCat)
    console.log(data);
    // get details category
// const selectedCategory = categorylist.find(item=>item.id===selectedCategoryId)
selectedCategoryDetails.allContact.push(data)
// console.log(selectedCategoryDetails.id);
const response = await addAcontactToCategory(selectedCategoryDetails.id,selectedCategoryDetails)
// console.log(response);

setShow(false)
}  
  return (
    <div>
        <Button variant="btn btn-primary w-100" onClick={handleShow}>
        Add to Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add to category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategoryDetails}
          label="category"
          onChange={handleChange}
        >{
            categorylist?categorylist.map((item,index)=>(<MenuItem key={item.id} value={item}>{item.categoryName}</MenuItem>)):''
        }
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddContactToCat}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddtoCategory