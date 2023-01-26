import React from "react";
import "./Conditions.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
const Conditions = () => {
  return (
    <Box>
      <Card
        sx={{
          opacity: "1",
          background: "rgb(248, 249, 250);",
          color: "rgb(52, 71, 103);",
          borderRadius: "0.75rem;",
          boxShadow: "none",
          p: 5,
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} lg={12}>
              {/* <Typography variant="h4">Read More About Us</Typography> */}
              <Typography
                variant="subtitle2"
                sx={{ fontFamily: "NotoSansThai" }}
              >
                เว็บไซต์นี้เป็นเว็บไซต์เพื่ออำนวยความสะดวกให้แก่ลูกค้า
                เพื่อขอใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax Invoice)
                สำหรับบุคคลธรรมดา ในรูปแบบ PDF
                <br />
                สำหรับผู้ซื้อสินค้าจากผู้ประกอบการ :
                <span className="tax-red">บริษัท ไทยวาโก้ จำกัด (มหาชน) </span>
                <br />
                เลขประจำตัวผู้เสียภาษีอากร :
                <span className="tax-red">0107537001455</span>
              </Typography>
            </Grid>
            {/* <Grid
              item
              xs={12}
              lg={6}
              sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
            >
              <Stack>
                <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <Box
                    sx={{
                      width: "3rem",
                      height: "3rem",
                      bgcolor: "info",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileDownloadIcon />
                  </Box>
                  <Typography variant="body2">
                    แบรนด์ที่สามารถออกใบกำกับภาษีอิเล็กทรอนิกส์ เช่น B’me,
                    Sgarlet, Presea, Enfant, Amusant ฯลฯ
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <Box
                    sx={{
                      width: "3rem",
                      height: "3rem",
                      bgcolor: "info",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileDownloadIcon />
                  </Box>
                  <Typography variant="body2">
                    ***ยกเว้น สินค้าแบรนด์ Wacoal, CW-X, Wienna เนื่องจาก
                    ไม่ได้จัดจำหน่ายโดยผู้ประกอบการ บริษัท ไทยวาโก้ จำกัด
                    (มหาชน)
                  </Typography>
                </Box>
              </Stack>
            </Grid> */}
            <Grid item xs={12} lg={12} sx={{ display: "flex" }}>
              <br />
              <Typography variant="body2"> กรุณาอ่าน : </Typography>
              <Link className="tax-conditions" to={"/conditions"}>
                เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </Box>
  );
};

export default Conditions;
