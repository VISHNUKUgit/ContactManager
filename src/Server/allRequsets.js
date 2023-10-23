import { serverURL } from "./baseURL";
import { commonRequest } from "./CommonRequest";

export const addContact = async(body)=>{
    return await commonRequest("POST", `${serverURL}/contacts` ,body)
}
export const getAllContact = async ()=>{
        return await commonRequest("GET", `${serverURL}/contacts` ,"")
}
export const getAcontact = async (idToGet)=>{
    return await commonRequest('Get',`${serverURL}/contacts/${idToGet}`,"")
}
export const editContact = async(id,body)=>{
    return await commonRequest("PATCH", `${serverURL}/contacts/${id}` ,body)
}
export const deleteAcontact = async (idToDelete)=>{
    return await commonRequest('DELETE',`${serverURL}/contacts/${idToDelete}`,{})
}
export const createCategory = async(body)=>{
    return await commonRequest("POST", `${serverURL}/categories` ,body)
}
export const showAllCategory = async ()=>{
    return await commonRequest('GET',`${serverURL}/categories`,"")
}
export const addAcontactToCategory = async (id,body)=>{
    return await commonRequest("PUT",`${serverURL}/categories/${id}`,body)
}
// Delete Category
export const deleteCategory = async(idToDelete)=>{
    return await commonRequest('DELETE',`${serverURL}/categories/${idToDelete}`,{})
}
// Remove Contact from Category
export const removeContactFromCategory = async(idToRemove)=>{
    return await commonRequest('DELETE',`${serverURL}/categories/${idToRemove}`,{})
}