import React, { useState } from "react";
import axios from "axios";
import "./TaxInvoice.css";
import Moment from "moment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import CardActions from "@mui/material/CardActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d5446ca6",
    color: theme.palette.common.white,
    fontFamily: "NotoSansThai",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyleTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#933155",
    fontFamily: "NotoSansThai",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#933155",
    },
  },
}));

const StyleSelect = styled(Select)(({ theme }) => ({
  // "& .MuiOutlinedInput-root": {
  "& fieldset.MuiOutlinedInput-notchedOutline ": {
    borderColor: "#933155",
    borderWidth: "2px",
  },
  // },.Mui-focused
}));

const TaxInvoice = () => {
  Moment.locale("en");

  const [data, setData] = useState([]);
  const [ponum, setPonum] = useState("");
  const [year, setYear] = useState("2023");
  const [invoiceno, setInvoiceno] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [err, setErr] = useState("");

  const searchinvoice = (event) => {
    setIsShown(false);

    axios({
      method: "put",
      url: "/api/order",
      data: {
        pono: "ddd",
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        // console.log(response.data);
        // console.log(JSON.stringify(response.data));
        setData(response.data);
        setIsShown((current) => !current);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    event.preventDefault();
  };

  const downloadinvoice = (info) => {
    //get
    console.log(info.DOCUMENT_ID);
    console.log(Moment(info.DOCUMENT_ISSUE_DTM).format("yyyyMMDD"));

    axios
      .get("/api/downlaod")
      .then((response) => {
        console.log(response.data);
        // console.log(JSON.stringify(response.data));
        // console.log(response.data.pdfURL);
        window.open(response.data.pdfURL, "_blank");
      })
      .catch((error) => {
        console.log(error);
        setIsShown(false);
        throw new Error(`Error! status: ${error}`);
      });
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
                      <Grid item xs={3}>
                        <FormControl fullWidth>
                          <InputLabel id="inv-year">Year</InputLabel>
                          <StyleSelect
                            labelId="inv-year"
                            id="demo-simple-select"
                            name="year"
                            size="small"
                            value={year}
                            label="Year"
                            fullWidth
                            onChange={(e) => setYear(e.target.value)}
                          >
                            <MenuItem value={2023}>2023</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                          </StyleSelect>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <StyleTextField
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
                        <StyleTextField
                          label="เลขที่ใบกำกับภาษี/Invoice No."
                          variant="outlined"
                          size="small"
                          fullWidth
                          focused
                          name="invoiceno"
                          value={invoiceno}
                          onChange={(e) => setInvoiceno(e.target.value)}
                          className="input-inv"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={12} className="bt-submit">
                        <Button
                          className="btn-search"
                          startIcon={<SearchIcon />}
                          type="submit"
                          value="Submit"
                          variant="contained"
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
                      <StyledTableCell align="center">ลำดับ</StyledTableCell>
                      <StyledTableCell align="center">
                        วันที่เอกสาร
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        เลขที่เอกสาร
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        ประเภทเอกสาร
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        เลขที่คำสั่งซื้อ
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Tracking No.
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        ดาวน์โหลดเอกสาร
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((inv, index) => {
                      return (
                        <TableRow key="{index}">
                          <TableCell align="center">{index + 1} </TableCell>
                          <TableCell align="center">
                            {Moment(inv.DOCUMENT_ISSUE_DTM).format(
                              "DD MMM yyyy"
                            )}
                          </TableCell>
                          <TableCell align="center">{inv.BILL_NO}</TableCell>
                          <TableCell align="center">
                            {inv.DOCUMENT_NAME}
                          </TableCell>
                          <TableCell align="center">
                            {inv.BUYER_ORDER_ASSIGN_ID}
                          </TableCell>
                          <TableCell align="center"> </TableCell>
                          <TableCell align="center">
                            <IconButton
                              aria-label="print"
                              onClick={() => {
                                downloadinvoice(inv);
                              }}
                            >
                              <FileDownloadIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* </Container> */}
              <Box sx={{ paddingTop: "20px", display: "flex" }}>
                <Stack spacing={2} sx={{ margin: "auto" }}>
                  <Pagination count={1} color="secondary" variant="outlined" />
                </Stack>
              </Box>
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
