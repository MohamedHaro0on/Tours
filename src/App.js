import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Tours from "./Tours";


const URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchData = ()=>{
    axios.get(URL).then((response) => {
      setData(response.data);
      setLoading(false)
    })
  }
  useEffect(() => {
    FetchData();
  }, [])
  const ButtonHandler = (id) => {
    let NewList = Data.filter(element => element.id !== id);
    setData(NewList);
  }

  let Output = null;
  if (loading) {
    Output = <div className="MainHeading"> Loading..... !! </div>
  }
  else if (Data.length === 0) {
    Output = (
      <>
        <div className="MainHeading"> there is no Tours left .</div>
        <button className="ButtonDanger" onClick = {FetchData}> Refresh</button>
      </>
    )
  }
  else {
    Output = (
      <>
        <h1 className="MainHeading"> Our Tours </h1>
        <Tours data={Data} ButtonHandler={ButtonHandler} />
      </>
    )
  }
  return (
    <main>
      {Output}
    </main>
  );
}

export default App;
