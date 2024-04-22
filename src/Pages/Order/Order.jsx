import React, { useContext } from "react"
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/Data/myContext";

function Order() {

    const context = useContext(myContext);
    const {name,rollno}=context;

    return (
      <>
        <Layout>
            Order
           {/* <h1>name : {name}</h1>
           <h1>Roll No : {rollno}</h1> */}
        </Layout>
      </>
    )
  }
  
  export default Order;
  