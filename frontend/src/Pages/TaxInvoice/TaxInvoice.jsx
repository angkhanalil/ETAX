import React, { useState } from "react";
import axios from "axios";
import "./TaxInvoice.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import CardActions from "@mui/material/CardActions";
// import CustomerInvoice from "../../components/CustomerInvoice/CustomerInvoice";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";
// import Stack from "@mui/material/Stack";
// import Pagination from "@mui/material/Pagination";
const TaxInvoice = () => {
  const [data, setData] = useState([]);
  const [ponum, setPonum] = useState("");
  const [invoiceno, setInvoiceno] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [err, setErr] = useState("");

  const searchinvoice = (event) => {
    // try{
    //   const response = await  axios.get('http://localhost:5000/api/order');
    //   console.log(response)
    //   if(!response.ok){
    //     throw new Error(`Error! status: ${response.status}`);

    //   }

    //   const result =  await response.json();
    //   console.log('result is: ', JSON.stringify(result, null, 4));
    //   setData(result);
    //   console.log(data)
    //   setIsShown(current => !current)
    // }catch (err) {
    //   setErr(err.message);
    // } finally {
    //   //setIsLoading(false);
    //   //setIsShown(current => false)
    // }

    axios
      .get("http://localhost:5000/api/order")
      .then((response) => {
        console.log(response.data);
        console.log(JSON.stringify(response.data));
        setData(response.data);
        setIsShown((current) => !current);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  const downloadinvoice = (info) => {
    console.log(info);
    console.log("download");
  };

  return (
    <div>
      <Box sx={{ p: 5 }}>
        <Card sx={{ borderRadius: "15px" }} variant="outlined">
          <CardHeader
            className="f-header"
            title="ค้นหาใบกำกับภาษี"
            subheader="กรุณาระบุเลขที่คำสั่งซื้อหรือเลขที่ใบกำกับภาษีของท่าน"
          ></CardHeader>
          {/* <Typography variant="h5">ค้นหาใบกำกับภาษี</Typography> */}
          <CardContent>
            <Box>
              <Link className="tax-conditions" to={"/conditions"}>
                เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
              </Link>
            </Box>
            <Box>
              <Container>
                <Grid container spacing={2} direction="row">
                  <form onSubmit={searchinvoice} className="form-invoice">
                    <Grid container spacing={3}>
                      {/* <Grid item xs={12}></Grid> */}
                      <Grid item xs={4}>
                        <TextField
                          label="เลขที่คำสั่งซื้อ (Order No.)"
                          variant="outlined"
                          focused
                          size="small"
                          fullWidth
                          name="po"
                          value={ponum}
                          onChange={(e) => setPonum(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          label="เลขที่ใบกำกับภาษี/Invoice No."
                          variant="outlined"
                          size="small"
                          fullWidth
                          focused
                          name="invoiceno"
                          value={invoiceno}
                          onChange={(e) => setInvoiceno(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} className="bt-submit">
                        <Button
                          startIcon={<SearchIcon />}
                          type="submit"
                          value="Submit"
                          variant="contained"
                          //onClick={searchinvoice}
                        >
                          Search
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Container>
            </Box>
          </CardContent>
          <CardActions>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontFamily: "NotoSansThai",
                color: "#ff7272",
                fontSize: "12px",
              }}
            >
              *** สามารถดาวน์โหลดใบกำกับภาษี E-TAX
              ได้หลังจากท่านได้รับสินค้าเรียบร้อยแล้ว
            </Typography>
          </CardActions>
        </Card>
      </Box>
      {/* <CustomerInvoice invoice={data}/> */}
      {isShown && (
        <Box sx={{ p: 5 }}>
          <Card sx={{ borderRadius: "15px" }} variant="outlined">
            <CardHeader
              className="f-header"
              title="ข้อมูลใบกำกับภาษี"
            ></CardHeader>
            <CardContent>
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
                    {data.map((inv) => {
                      return (
                        <TableRow key="{inv.BILL_NO}">
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center">
                            {" "}
                            {inv.DOCUMENT_ISSUE_DTM}
                          </TableCell>
                          <TableCell align="center">{inv.BILL_NO}</TableCell>
                          <TableCell align="center">
                            {inv.DOCUMENT_NAME}
                          </TableCell>
                          <TableCell align="center">
                            {inv.BUYER_ORDER_ASSIGN_ID}
                          </TableCell>
                          <TableCell align="center">D</TableCell>
                          <TableCell align="center">
                            <IconButton
                              aria-label="print"
                              onClick={() => {
                                downloadinvoice(inv);
                              }}
                            >
                              <PrintIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
      )}
    </div>
  );
};

export default TaxInvoice;
