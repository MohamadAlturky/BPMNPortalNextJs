'use client'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
  // useEffect(() => {
  //   const myPromise = new Promise((resolve) =>
  //     fetch("https://jsonplaceholder.typicode.com/posts/1")
  //       .then((response) => response.json())
  //       .then((json) => setTimeout(() => resolve(json), 3000))
  //   );

  //   toast.promise(myPromise, {
  //     pending: "We are calling An API",
  //     success: "Success",
  //     error: "error",
  //   });
  // }, []);

  const Load = () => {
    const myPromise = new Promise((resolve) =>
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => setTimeout(() => resolve(json), 3000))
    );

    toast.promise(myPromise, {
      pending: "We are calling An API",
      success: "Greate",
      error: "Error",
    });
  }

  return (

    <div style={
      {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }
    }>
      <button style={{
        margin: "10",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        border: "none",
        borderRadius: "10px",
        color: "white"
      }}
        onClick={() => {

          toast.error('Wow so easy!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }}
      >Error</button>
      <button style={{
        display: "flex",
        margin: "10",
        justifyContent: "center",
        backgroundColor: "black",
        border: "none",
        borderRadius: "10px",
        color: "white"
      }}
        onClick={() => {

          toast.info('Wow Info!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }}
      >Info</button>

      <button style={{
        display: "flex",
        justifyContent: "center",
        margin: "10",
        backgroundColor: "black",
        border: "none",
        borderRadius: "10px",
        color: "white"
      }}
        onClick={() => {

          toast.warning('Wow Info!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }}
      >Warning</button>
      <button style={{
        display: "flex",
        justifyContent: "center",
        margin: "10",
        backgroundColor: "black",
        border: "none",
        borderRadius: "10px",
        color: "white"
      }}
        onClick={() => {

          toast.success('Wow Info!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }}
      >success</button>
      <button style={{
        display: "flex",
        justifyContent: "center",
        margin: "10",
        backgroundColor: "black",
        border: "none",
        borderRadius: "10px",
        color: "white"
      }}
        onClick={() => {
          Load()
        }}
      >load</button>
      <ToastContainer />
    </div >
  );
}
