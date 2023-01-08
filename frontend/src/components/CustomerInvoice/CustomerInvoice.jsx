import React, { useState } from "react";
import axios from 'axios';
import "./CustomerInvoice.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";


const CustomerInvoice = (props) => {
  
  const data1  = props.invoice.length;
  console.log(data1)
  //const data = JSON.stringify(data);
  return (
    <Box sx={{ p: 5 }}>
      {/* <Grid rowSpacing={1} container spacing={2}>
          <Grid item xs={12}> */}
      <Card sx={{ borderRadius: "15px" }} variant="outlined">
        {/* minWidth: 275, */}
        <CardHeader className="f-header" title="ข้อมูลใบกำกับภาษี"></CardHeader>
        <CardContent>
         
        
          
          {/* <Typography variant="h6">ข้อมูลใบกำกับภาษี</Typography> */}
          {/* <Container> */}
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ลำดับ</TableCell>
                  <TableCell align="center">วันที่เอกสาร</TableCell>
                  <TableCell align="center">เลขที่เอกสาร</TableCell>
                  <TableCell align="center">ประเภทเอกสาร</TableCell>
                  <TableCell align="center">เลขที่คำสั่งซื้อ</TableCell>
                  <TableCell align="center">Tracking No.</TableCell>
                  <TableCell align="center">ดาวน์โหลดเอกสาร</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>  
              {/* {data.map(inv => {
        return (
          <TableRow key="{inv.BILL_NO}">
                  <TableCell align="center"> </TableCell>
                  <TableCell align="center"> {inv.DOCUMENT_ISSUE_DTM}</TableCell>
                  <TableCell align="center">{inv.BILL_NO}</TableCell>
                  <TableCell align="center">{inv.DOCUMENT_NAME}</TableCell>
                  <TableCell align="center">{inv.BUYER_ORDER_ASSIGN_ID}</TableCell>
                  <TableCell align="center">D</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="print">
                      <PrintIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
        );
      })} */}
                
              </TableBody>
            </Table>
          </TableContainer>
          {/* </Container> */}
          {/* <Box sx={{ paddingTop: "20px", display: "flex" }}>
            <Stack spacing={2} sx={{ margin: "auto" }}>
              <Pagination count={10} color="secondary" variant="outlined" />
            </Stack>
          </Box> */}
        </CardContent>
      </Card>
      {/* </Grid>
        </Grid> */}
    </Box>
  );
};

export default CustomerInvoice;
