import React, { useEffect, useState } from 'react';
import {Chart as ChartJS,BarElement, CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { readApi } from '../apis/Userapi';

export default function ChartBar() {
  const [apiData, setApiData] = useState([]);
  
   useEffect(() => {
      getData();
   },[])

   const getData = async() => {
    try { const data = await readApi();
      setApiData(data);
}
catch(error){console.log(error); }
  }

   let names = apiData.map(ele =>{
    return ele.name;
  })

  let marks = apiData.map(ele =>{
    return ele.mark;
  })
   
   ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
   )
   const chartData = {
    labels: names,
    datasets: [
      {
        label: `Students Percentage Chart outof 600`,
        data: marks,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
   }
   const options = {

   }
  return (
    <div>Bar
      <Bar data = {chartData} options={options}></Bar>
    </div>
  )
}
