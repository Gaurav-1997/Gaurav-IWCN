import axios from "axios";
import {
  DELETE_LIST_DATA,
  EDIT_LIST_DATA_ROUTE,
  GET_LIST_DATA,
  POST_LIST_DATA,
} from "./ApiRoutes";
import { toast } from "react-hot-toast";

export const getNotesData = async () => {
  try {
    const { data } = await axios.get(GET_LIST_DATA);
    return data.data;
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};

export const postNotesData = async (notes) => {
  try {
    const { data, status } = await axios.post(POST_LIST_DATA, notes);
    toast.success("Note added successfully");
    return status;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

export const editNote = async (note) => {
  try {
    const { message,data } = await axios.put(EDIT_LIST_DATA_ROUTE, note);

    toast.success(message);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};

export const deleteNote = async (id) => {
  try {
    const { data, status } = await axios.delete(`${DELETE_LIST_DATA}/${id}`);
    console.log("deleteNote", data, status);

    return status;
  } catch (error) {
    console.log(error);
    toast.error(error);
  }
};
