import React from "react";
// import "./ConditionsTaxInv.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/joy/Typography";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const ConditionsTaxInv = () => {
  return (
    <div>
      <Box sx={{ p: 5 }}>
        <Card variant=" ">
          <Typography level="h2" fontSize="lg" sx={{ mb: 0.5, p: 5 }}>
            เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
          </Typography>
          {/* <Card sx={{ borderRadius: "15px" }} variant="outlined"> */}
          <CardContent>
            <Container>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <Stack>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <LibraryAddCheckIcon />
                      </Box>
                      <Typography variant="body2">
                        1.เว็บไซต์นี้สามารถขอ ใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax
                        Invoice) สำหรับบุคคลธรรมดา ในรูปแบบ PDF
                        <br /> สำหรับการซื้อสินค้าจากผู้ประกอบการ:{" "}
                        <strong>บริษัท ไทยวาโก้ จำกัด(มหาชน)</strong>{" "}
                        เลขประจำตัวผู้เสียภาษีอากร:
                        <strong>0107537001455</strong> เท่านั้น
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
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
                        <LibraryAddCheckIcon />
                      </Box>
                      <Typography variant="body2">
                        2.สามารถดาวน์โหลดใบกำกับภาษีหลังจากที่ท่านได้รับสินค้าเรียบร้อยแล้ว
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
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
                        <LibraryAddCheckIcon />
                      </Box>
                      <Typography variant="body2">
                        3.สามารถเรียกดูข้อมูลใบกำกับภาษีย้อนหลังได้{" "}
                        <strong> 12 เดือน</strong>
                        นับจากวันที่สั่งซื้อสินค้า
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
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
                        <LibraryAddCheckIcon />
                      </Box>
                      <Typography variant="body2">
                        4. การค้นหาด้วยเลขที่ใบกำกับภาษี
                        ลูกค้าสามารถดูเลขที่ใบกำกับภาษีได้จากใบส่งสินค้า
                        (Packing list)
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="outlined"
                        href="/"
                        sx={{ margin: "auto" }}
                      >
                        รับทราบ
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ConditionsTaxInv;
