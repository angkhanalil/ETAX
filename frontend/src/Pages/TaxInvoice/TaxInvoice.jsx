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
import SearchIcon from "@mui/icons-material/Search";
import CardActions from "@mui/material/CardActions";
import CustomerInvoice from "../../components/CustomerInvoice/CustomerInvoice";
import { Link } from "react-router-dom";

const TaxInvoice = () => {
  const [ponum, setPonum] = useState('');
  const [invoiceno, setInvoiceno] = useState('');

  const searchinvoice = (event) => {
    console.log("searchinvoice");
    alert("A name was submitted: " +  ponum + " " + invoiceno);
    // alert("A name was submitted: " + props.name);
    event.preventDefault();
  };
  const handlechange = (event) => {
    setPonum(event.target.value);
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
                        value={ponum}
                        onChange={e => setPonum(e.target.value)}  
                        //onChange={handlechange}
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
                        onChange={e => setInvoiceno(e.target.value)}
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
