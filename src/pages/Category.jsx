import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import { createCategory, deleteCategory, getAllContact, showAllCategory } from '../Server/allRequsets';
import ContactCard from '../Components/ContactCard';
import CatconCard from '../Components/CatconCard';

function Category() {
    const [categoryName, setCategoryName] = React.useState('');
    const [categoryData, setCategoryData] = useState('')
    


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    // create a category
    const handleAddCategory = async () => {
        if (categoryName) {

            const body = {
                categoryName, allContact: []
            }
            //Make Api call
            const response = await createCategory(body)
            console.log(response.status)
            handleClose()
            setCategoryName("")
            showCategories()

        } else {
            alert('Upload error')
        }

    }
    const showCategories = async () => {
        const response = await showAllCategory()
        setCategoryData(response.data)
    }
    useEffect(() => {
        showCategories()
    }, [])
    // Delete Category
    const handleDeleteCategory = async (id)=>{
        const response = await deleteCategory(id)
        console.log(response);
        showCategories()
    }
    
      
    //   console.log(data);
    //   console.log(objectWithId5);

    return (
        <div>
            <div className='w-100 position-fixed' style={{ backdropFilter: 'sepia(10%)', zIndex: '1' }}>
                <Navbar />
            </div>
            <div className='w-100   bg-dark' style={{ height: '90px' }}>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-2 mx-4'> <h1 className=''>All Category</h1>
                {/* add Category */}
                <div>
                    <div className='d-flex'>
                        <h3>Add</h3>
                        <Button variant="primary" onClick={handleShow}>
                            <i class="fa-solid fa-plus fa-beat fa-2xl"></i>
                        </Button>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TextField id="outlined-basic" label="Category" variant="outlined" className='w-100' onChange={(e) => setCategoryName(e.target.value)} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleAddCategory}>Add</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
            {
                categoryData ? categoryData.map((category, index) => (
                    <div className='m-3' key={category.id}>
                        <div className='w-100  rounded border'>
                            <div className='d-flex justify-content-between align-items-center'><h3 className='m-3'>{category.categoryName}</h3> <i class="fa-solid fa-trash fa-2xl m-3" style={{cursor:'pointer'}} onClick={()=>handleDeleteCategory(category.id)}></i></div>
                            <div className={screenSize>600?'d-flex':'d-flex flex-column align-items-center'}>

                        {
                        category ? category.allContact.map((contact) => (
                            <CatconCard contact={contact} cat={true} />
                            // <ContactCard contact={contact} cat={true}  />
                        )) :''
                        }
                        </div>
                        </div>
                        
        </div>
    )): ''
}
<Footer />
        </div >
    )
}

export default Category

