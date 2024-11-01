import { useState } from "react";
import "./App.css";
import { Button } from "./componets/atom/button/Button";
import Typography from "./componets/atom/typography/Typography";

function App() {
  const [loading,setLoading]=useState(false)
  
  const handleClick = () => {
    alert("handleClick");
  };

  const handlePayment=()=>{
setLoading(true)
   setTimeout(()=>{
      setLoading(false)
    },1000)

    

  }
  console.log(loading)

  return (
    <>
      <Typography tag="h1" text="Button with icon at right side"></Typography>

      <Button
        variants="tertiary"
        variantType="fill"
        className=" "
        autoFocus
        onClick={handleClick}
      >
        <img src="vite.svg" className="w-3" alt="" />
        <span className="">submit</span>
      </Button>

      <hr className="h-3 my-9" />

      <Typography tag="h1" text="Button with icon at left side"></Typography>

      <Button
        variants="secondary"
        variantType="fill"
        autoFocus
        onClick={() => alert("button clicked")}
      >
        click
        <img src="vite.svg" className="w-3" alt="" />
      </Button>

      <Button  loading={loading} onClick={handlePayment}>make Payment</Button>
    </>
  );
}

export default App;
