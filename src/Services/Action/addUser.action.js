import { addDoc, collection, getDocs } from "firebase/firestore"
import { ADDUSERREJ, ADDUSERREQ, ADDUSERRES, GDRJ, GDRQ, GDRS } from "../Const"
import { db } from "../../firebaseConfig"

export const adduserReq = () => {
    return {
      type: ADDUSERREQ
    }
  }
  export const adduserRes = (data) => {
    return {
      type: ADDUSERRES,
      payload: data
    }
  }
  export const adduserRej = () => {
    return {
      type: ADDUSERREJ
    }
  }
  
  export const addUser = (data) => {
    return (dispatch) => {
      dispatch(adduserReq());
      addDoc(collection(db, "users"), data).then((res) => {
        dispatch(getData(res.data));
      }).catch((err) => {
        dispatch(adduserRej(err))
      })
  
    };
  };

  export const getDataReq = () => {
    return {
      type: GDRQ
    }
  }
  export const getDataRes = (data) => {
    return {
      type: GDRS,
      payload: data
    }
  }
  export const getDataRej = (err) => {
    return {
      type: GDRJ,
      payload: err
    }
  }
  
  
  export const getData = () => {
    return (dispatch) => {
      dispatch(getDataReq());
      getDocs(collection(db, "users"))
        .then((pro) => {
          let arr = [];
          pro.forEach((doc) => {
            arr = [...arr, { id: doc.id, ...doc.data() }];
          });
          // console.log('arr',arr);
          dispatch(getDataRes(arr));
        })
        .catch((err) => {
          dispatch(getDataRej(err));
        });
    };
  };