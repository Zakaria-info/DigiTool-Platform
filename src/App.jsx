import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Rating from "./components/rating/rating";
import Featured from "./components/featured/Featured";
import { Suspense } from "react";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = fetchData();

  return (
    <>
      <Navbar />
      <Banner />
      <Rating />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Featured dataPromise={dataPromise} />
      </Suspense>
    </>
  );
}

export default App;
