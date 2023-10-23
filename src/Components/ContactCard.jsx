import React, { useEffect, useState } from 'react'
import { deleteAcontact, getAllContact } from '../Server/allRequsets'
import AddtoCategory from './AddtoCategory'
import EditContact from './EditContact'

function ContactCard({contact,deleteStatus,setDeleteStatus,cat}) {
    const [data,setData] = useState([]);
    
    const {name,email,imgURL,mob,id} = contact
    // const {id} = contact
    
    const handleDeleteContact = async (idToDelete)=>{
        // console.log("i got the id",idToDelete);
        const response = await deleteAcontact(idToDelete)
        // console.log(response);
        if(200<response.status||300>response.status){
            setDeleteStatus(!deleteStatus)
            // alert('Success fully deleted ')
            
          }else{
            alert("reponse.statusText")
          }
    }
    // useEffect(()=>{
    //     const getData = async()=>{
    //       const {data} = await getAllContact()
    //       setData(data)
    //     }
    //     getData()
    //   },[])
    //   console.log(data);
    // const objectWithId5 = data.find((item) => item.id === id);
    // console.log(objectWithId5);
    // const {name,email,imgURL,mob} = objectWithId5
    // console.log(name,email,mob,imgURL,id);
     // Remove contact from Category
    //  const handleRemoveContactfromCategory = ()=>{
    //     if (category) {
    //       // If the category is found, filter out the contact to remove.
    //       category.allContact = category.allContact.filter(
    //         (contact) => contact.id !== contactIdToRemove
    //       );
    //     }
        
    //  }
    return (
        <div className='m-4' key={id}>
            <div class="card" style={{width: "18rem"}}>
                <img className="card-img-top" style={{height:'280px'}} src={imgURL} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Name:{name}</h5>
                        <h5>Mob:{mob}</h5>
                        <h5>Email:{email}</h5>
                        {
                            cat?''
                            // <button className='btn btn-primary w-100' onClick={handleRemoveContactfromCategory}>Remove</button>
                            :<AddtoCategory idToAddToCat={id}/>
                        }
                        
                        {/* <button className='btn btn-primary w-100'>Add to favourites</button> */}
                        <div className='w-100 mt-2 d-flex justify-content-between'>
                            {
                                cat?"":<button className='btn btn-danger' onClick={()=>handleDeleteContact(id)}>
                                Remove
                            </button>
                            }
                            {
                                cat?"":<EditContact contact={contact} deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus} />
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactCard