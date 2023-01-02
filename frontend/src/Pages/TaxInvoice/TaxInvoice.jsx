import React from "react";
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

import CardActions from "@mui/material/CardActions";
import CustomerInvoice from "../../components/CustomerInvoice/CustomerInvoice";
import { Link } from "react-router-dom";
import ConditionsTaxInv from "../../Pages/ConditionsTaxInv/ConditionsTaxInv";
const TaxInvoice = () => {
  const searchinvoice = () => {
    console.log("searchinvoice");
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
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      ช่องทางการสั่งซื้อ
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Marketplace"
                    >
                      <MenuItem value={10}>LAZADA</MenuItem>
                      <MenuItem value={20}>SHOPEE</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="เลขที่คำสั่งซื้อ (Order No.)"
                    variant="outlined"
                    focused
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Tracking No."
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button variant="contained" onClick={searchinvoice}>
                {/* endIcon={<SendIcon />} */}
                Send
              </Button>
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
              *** สามารถดาวน์โหลดใบกำกับภาษี e-TAX
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
