import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {
    const[data,setData]=useState([["Date","Prices"]])

    useEffect(()=>{
   let datacopy=[["Date","prices"]];
   if(historicalData?.prices){
    historicalData.prices.forEach((item) => {
        datacopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });
      setData(datacopy);
    
   }
    },[historicalData]);
  return (
    <Chart
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
    />
  )
}

export default LineChart
