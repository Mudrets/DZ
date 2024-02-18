import {ADD_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,STATUS_FILTER,IS_UPDATING,CHANGE_FAVORITE,SEARCH_CONTACT,ADD_STATUS,DELETE_STATUS,IS_ADDING}from './type'

export const addContact = (newContact) => {
    return{
        type: ADD_CONTACT,
        payload:newContact
    }
}
export const deleteContact = (id) => {
    return{
        type: DELETE_CONTACT,
        payload:id
    }
}
export const updateContact = (id,contact) => {
    return{
        type: UPDATE_CONTACT,
        payload:{id,contact}
    }
}
export const statusFilter = (status) => {
    return{
        type: STATUS_FILTER,
        payload:status
    }
}
export const searchContact = (name) => {
    return{
        type: SEARCH_CONTACT,
        payload:name
    }
}
export const isUpdating = (bool,id) => {
    return{
        type: IS_UPDATING,
        payload:[bool,id]
    }
}
export const changeFavorite = (id) => {
    return{
        type: CHANGE_FAVORITE,
        payload:id
    }
}
export const addStatus = (status) => {
    return{
        type: ADD_STATUS,
        payload:status
    }
}
export const deleteStatus = (status) => {
    return{
        type: DELETE_STATUS,
        payload:status
    }
}
export const isAdding = (bool) => {
    return{
        type: IS_ADDING,
        payload:bool
    }
}