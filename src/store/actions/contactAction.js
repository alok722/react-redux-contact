import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

// actions
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// update a contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
