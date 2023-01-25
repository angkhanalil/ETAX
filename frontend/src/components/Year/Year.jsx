import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

const Year = () => {
  const [listyear, setlistYear] = useState([]);
  //  const year = [];
  useEffect(() => {
    console.log("trigger use effect hook");
    lyear();
    console.log("year ", listyear);
  }, []);

  const lyear = () => {
    axios.get("/api/order/year").then((response) => {
      setlistYear(response.data.year);
      // year = response.data;
      console.log(response.data.year);
    });
  };
  return (
    <>
      {listyear.map((y, index) => {
        return (
          <MenuItem key={index} value={y}>
            {y}
          </MenuItem>
        );
      })}
    </>
  );
};

export default Year;
