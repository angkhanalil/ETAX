import React from "react";

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
const TaxInvoice = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 5 }}>
        {/* <Grid rowSpacing={1} container spacing={2}>
          <Grid item xs={12}> */}
        <Card sx={{ borderRadius: "15px" }} variant="outlined">
          {/* minWidth: 275, */}
          <CardHeader
            title="ค้นหาใบกำกับภาษี"
            subheader="กรุณาเลือกช่องทางการขาย และระบุเลขที่คำสั่งซื้อ หรือ Tracking No.
              ของท่าน"
          ></CardHeader>
          {/* <Typography variant="h5">ค้นหาใบกำกับภาษี</Typography> */}
          <CardContent>
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

              <Button variant="contained">
                {/* endIcon={<SendIcon />} */}
                Send
              </Button>
            </Container>
          </CardContent>
        </Card>
        {/* </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
};

export default TaxInvoice;
