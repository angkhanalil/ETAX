import React, { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import CardActions from "@mui/material/CardActions";
import CustomerInvoice from "../../components/CustomerInvoice/CustomerInvoice";
import { Link } from "react-router-dom";
import ConditionsTaxInv from "../../Pages/ConditionsTaxInv/ConditionsTaxInv";

const TaxInvoice = () => {
  const [state, setState] = useState({
    pono: "",
    invoiceno: "",
  });
  const searchinvoice = (event) => {
    console.log("searchinvoice");
    alert("A name was submitted: " + state.pono + " " + state.invoiceno);
    // alert("A name was submitted: " + props.name);
    event.preventDefault();
  };
  const handlechange = (event) => {
    setState({ pono: event.target.value });
  };

  return (
    <div>
      {/* <Container maxWidth="xl" sx={{ paddingBottom: "70px" }}> */}
      <Box sx={{ p: 5 }}>
        {/* <Grid rowSpacing={1} container spacing={2}>
          <Grid item xs={12}> */}
        <Card sx={{ borderRadius: "15px" }} variant="outlined">
          {/* minWidth: 275, */}
          <CardHeader
            className="f-header"
            title="ค้นหาใบกำกับภาษี"
            subheader="กรุณาเลือกช่องทางการขาย และระบุเลขที่คำสั่งซื้อ หรือ Tracking No.
              ของท่าน"
          ></CardHeader>
          {/* <Typography variant="h5">ค้นหาใบกำกับภาษี</Typography> */}
          <CardContent>
            <Link className="tax-conditions" to={"/conditions"}>
              เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
            </Link>
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
                        value={state.pono}
                        onChange={handlechange}
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
                        //value={state.invoiceno}
                        //onChange={handlechange_invoice}
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
        {/* </Grid>
        </Grid> */}
      </Box>
      <CustomerInvoice />
      {/* </Container> */}
    </div>
  );
};

export default TaxInvoice;
