import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Rating from "./components/rating/rating";
import Featured from "./components/featured/Featured";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import GetStartedSection from "./components/getStarted/getStartedSection";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = fetchData();
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Navbar count={count}/>
      <Banner />
      <Rating />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Featured dataPromise={dataPromise}  setCount={setCount}/>
      </Suspense>
      <GetStartedSection/>

      <ToastContainer />
    </>
  );
}

export default App;
