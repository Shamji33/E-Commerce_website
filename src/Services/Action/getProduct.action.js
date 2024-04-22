import { GETDATAREJ, GETDATAREQ, GETDATARES } from "../Const"
import {  collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebaseConfig";

export const getDataReq = () => { 
    return {
      type: GETDATAREQ
    }
  }
  export const getDataRes = (data) => {
    return {
      type: GETDATARES,
      payload: data
    }
  }
  export const getDataRej = (err) => {
    return {
      type: GETDATAREJ,
      payload: err
    }
  }
  
export const getData = () => {
  return (dispatch) => {
    dispatch(getDataReq());

    getDocs(collection(db, 'Products'))
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("E-commerce-for addmin panel",data);

        dispatch(getDataRes(data));
      })
      .catch((err) => {
        // Handle errors
        dispatch(getDataRej(err));
      });
  };
};

