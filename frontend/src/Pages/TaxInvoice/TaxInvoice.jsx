import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TaxInvoice.css";
import Conditions from "../../components/Condition/Conditions";
import Moment from "moment";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
    fontSize: "18px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#933155",
    },
    "& legend": {
      fontSize: "0.85em",
    },
  },
}));

const StyleSelect = styled(Select)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#933155",
    fontFamily: "NotoSansThai",
    fontSize: "18px",
  },
  "& fieldset.MuiOutlinedInput-notchedOutline ": {
    borderColor: "#933155!important",
    borderWidth: "2px!important",
  },

  "& legend": {
    fontSize: "1.4em",
  },

  // },.Mui-focused
}));

const TaxInvoice = () => {
  Moment.locale("en");
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [checkedAccept, setcheckedAccept] = useState(false);
  const [data, setData] = useState([]);
  const [ponum, setPonum] = useState("");
  const [year, setYear] = useState("");
  const [invoiceno, setInvoiceno] = useState("");
  const [invdate, setinvdate] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [listyear, setlistYear] = useState([]);
  const [messageInfo, setMessageInfo] = useState("");
  const [severity, setseverity] = useState("warning");
  const [downlaod, setDownload] = useState(true);
  useEffect(() => {
    lyear();
  }, []);

  const lyear = () => {
    axios
      .get("/api/order/year")
      .then((response) => {
        setlistYear(response.data.year);
        setYear(response.data.year[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const searchinvoice = (event) => {
    setIsShown(false);
    if (ponum === "" && invoiceno === "") {
      setseverity("error");
      setMessageInfo("กรุณาระบุเลขที่คำสั่งซื้อหรือเลขที่ใบกำกับภาษีของท่าน");
      setOpen(true);
    } else {
      axios({
        method: "put",
        url: "/api/order",
        data: {
          inv_year: year,
          orderno: ponum,
          invoice: invoiceno,
        },
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.statusText === "OK") {
            if (response.data.length === 0) {
              setOpen(true);
              setIsShown(false);
              setseverity("warning");
              setMessageInfo("ไม่พบใบกำกับภาษี");
            } else {
              setData(response.data);
              setOpen(false);
              setIsShown((current) => !current);
            }
          }
        })
        .catch(function (error) {
          // handle error
          setseverity("error");
          setOpen(true);
          setMessageInfo(error.message);
        })
        .finally(function () {
          // always executed
        });
    }

    event.preventDefault();
  };
  const acceptConditions = (info) => {
    setInvoiceno(info.DOCUMENT_ID);
    setinvdate(Moment(info.DOCUMENT_ISSUE_DTM).format("yyyyMMDD"));
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleAcceptConditions = (event) => {
    setcheckedAccept(event.target.checked);
    setDownload(!downlaod);
  };
  const downloadinvoice = (info) => {
    axios({
      method: "put",
      url: "/api/downlaod",
      data: {
        invoice: invoiceno,
        invoicedate: invdate,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        window.open(response.data.pdfURL, "_blank");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setIsShown(false);
        throw new Error(`Error! status: ${error}`);
      });
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={(e) => setOpen(false)}
      >
        <Alert
          severity={severity}
          onClose={(e) => setOpen(false)}
          autoHideDuration={6000}
        >
          <AlertTitle>Error</AlertTitle>
          {messageInfo}
          {/* — <strong>----</strong> */}
        </Alert>
      </Snackbar>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ fontFamily: "NotoSansThai" }}
        >
          เงื่อนไข ข้อตกลง/Conditions
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "NotoSansThai" }}>
            <Checkbox
              checked={checkedAccept}
              //onChange={(e) => setcheckedAccept(!checkedAccept)}
              onChange={handleAcceptConditions}
              // defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
            ข้าพเจ้าได้อ่าน
            <Link to={"./conditions"} target="_blank">
              เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
            </Link>{" "}
            (e-Tax Invoice) เรียบร้อยแล้ว.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="btn-search"
            startIcon={<FileDownloadIcon />}
            type="submit"
            value="Submit"
            variant="contained"
            autoFocus
            disabled={downlaod}
            onClick={() => {
              downloadinvoice();
            }}
          >
            {/*onClick={handleClose} */}
            Download
          </Button>
        </DialogActions>
      </Dialog>
      {/* <AlertValidate open={open} /> */}
      {/* {open && <AlertValidate />} */}
      <Box sx={{ p: 5, pb: 2 }}>
        <Conditions />
      </Box>

      <Box sx={{ p: 5 }}>
        <Card sx={{ borderRadius: "15px" }} variant="">
          <CardHeader
            className="f-header"
            title={
              <Typography className="f-header" variant={"h6"}>
                ค้นหาใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax Invoice)
                {/* <Typography
                  sx={{ paddingLeft: "10px" }}
                  variant="subtitle2"
                  className="f-header"
                  display="inline"
                >
                  ผู้ประกอบการ บริษัท ไทยวาโก้ จำกัด (มหาชน)
                  เลขประจำตัวผู้เสียภาษีอากร 0107537001455
                </Typography> */}
              </Typography>
            }
            subheader=" ผู้ประกอบการ บริษัท ไทยวาโก้ จำกัด (มหาชน)
            เลขประจำตัวผู้เสียภาษีอากร 0107537001455 "
          ></CardHeader>
          {/* <Typography variant="h5">ค้นหาใบกำกับภาษี</Typography> {<Typography variant={"h6"}>ค้นหาใบกำกับภาษี </Typography>}*/}
          <CardContent>
            <Box sx={{ pt: 5 }}>
              <Container>
                {/* <Grid container spacing={3} direction="row"> กรุณาระบุเลขที่คำสั่งซื้อหรือเลขที่ใบกำกับภาษีของท่าน*/}
                <form onSubmit={searchinvoice} className="form-invoice">
                  <Grid container spacing={3} direction="row">
                    <Grid alignItems="flex-start" item xs={12} md={6} lg={6}>
                      <Typography
                        sx={{ paddingLeft: "10px", color: "#c50000" }}
                        variant="subtitle2"
                        className="f-header"
                        display="inline"
                      >
                        ***
                        กรุณาระบุเลขที่คำสั่งซื้อหรือเลขที่ใบกำกับภาษีของท่าน
                        ***
                      </Typography>
                    </Grid>
                    <Grid alignItems="flex-end" item xs={12} md={6} lg={6}>
                      {/* <Link className="tax-conditions" to={"/conditions"}>
                        เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
                      </Link> */}
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                      <FormControl fullWidth>
                        <InputLabel id="inv-year">ปี/Year</InputLabel>
                        <StyleSelect
                          className="inv-year"
                          labelId="inv-year"
                          name="year"
                          size="small"
                          value={year}
                          label="Year"
                          fullWidth
                          onChange={(e) => setYear(e.target.value)}
                        >
                          {listyear.map((y, index) => {
                            return (
                              <MenuItem key={index} value={y}>
                                {y}
                              </MenuItem>
                            );
                          })}
                          {/* <MenuItem value={2023}>2023</MenuItem>
                          <MenuItem value={2022}>2022</MenuItem> */}
                        </StyleSelect>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                      <StyleTextField
                        label="เลขที่คำสั่งซื้อ/Order No."
                        variant="outlined"
                        focused
                        size="small"
                        fullWidth
                        name="po"
                        value={ponum}
                        onChange={(e) => setPonum(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        className="typo-center"
                      >
                        หรือ
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
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
                    <Grid
                      className="bt-submit"
                      alignItems="flex-end"
                      item
                      xs={12}
                      md={12}
                      lg={12}
                    >
                      <Button
                        className="btn-search"
                        startIcon={<SearchIcon />}
                        type="submit"
                        value="Submit"
                        variant="contained"
                      >
                        ค้นหา/Search
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                {/* </Grid> */}
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
              หมายเหตุ
              1.ดาวน์โหลดใบกำกับภาษีได้หลังจากท่านได้รับสินค้าเรียบร้อยแล้ว
              2.เรียกข้อมูลใบกำกับภาษีย้อนหลังได้ 12 เดือน
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
              title={
                <Typography className="f-header" variant={"h6"}>
                  ข้อมูลใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax Invoice)
                </Typography>
              }
              subheader=" ผู้ประกอบการ บริษัท ไทยวาโก้ จำกัด (มหาชน)
              เลขประจำตัวผู้เสียภาษีอากร 0107537001455 "
            ></CardHeader>
            <CardContent>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">ลำดับ</StyledTableCell>
                      <StyledTableCell align="center">
                        วันที่ใบกำกับภาษี
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        เลขที่ใบกำกับภาษี
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">
                        ประเภทเอกสาร
                      </StyledTableCell> */}
                      <StyledTableCell align="center">
                        เลขที่คำสั่งซื้อ
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">
                        Tracking No.
                      </StyledTableCell> */}
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
                          {/* <TableCell align="center">
                            {inv.DOCUMENT_NAME}
                          </TableCell> */}
                          <TableCell align="center">
                            {inv.BUYER_ORDER_ASSIGN_ID}
                          </TableCell>
                          {/* <TableCell align="center"> </TableCell> */}
                          <TableCell align="center">
                            <IconButton
                              aria-label="print"
                              onClick={() => {
                                acceptConditions(inv);
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
        </Box>
      )}
    </div>
  );
};

export default TaxInvoice;
