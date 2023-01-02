import React from "react";
import "./ConditionsTaxInv.css";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/material/CardContent";

import Container from "@mui/material/Container";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
const ConditionsTaxInv = () => {
  return (
    <div>
      <Box sx={{ p: 5 }}>
        <Card variant="outlined" className="card">
          <Typography level="h2" fontSize="lg" sx={{ mb: 0.5 }}>
            เงื่อนไขการออกใบกำกับภาษีสำหรับบุคคลธรรมดา
          </Typography>
          {/* <Card sx={{ borderRadius: "15px" }} variant="outlined"> */}
          <CardContent>
            <Container>
              <Typography
                level="body1"
                textTransform="uppercase"
                fontWeight="lg"
                mb={1}
              ></Typography>
              <List
                aria-labelledby="decorated-list-demo"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemDecorator>🧅</ListItemDecorator> 1
                  ใบกำกับภาษีสำหรับบุคคลธรรมดา
                  <Typography variant="soft">
                    ไม่จำเป็นต้องระบุเลขประจำตัวผู้เสียภาษีของผู้ซื้อสินค้าหรือบริการ
                  </Typography>
                  ( ตามข้อหารือภาษีอากรของกรมสรรพากร เลขที่ 0702/8755)
                </ListItem>
                <ListItem>
                  <ListItemDecorator>🍤</ListItemDecorator> 2 กรณีชื่อ-นามสกุล
                  ที่ปรากฏในใบกำกับภาษีไม่ตรงกับชื่อผู้ซื้อสินค้าหรือผู้รับบริการ
                  โดยมีตัวสะกด สระ วรรณยุกต์ การันต์ ผิดพลาด
                  แต่เป็นที่เห็นได้อย่างชัดเจน
                  และไม่ทำให้เกิดความเข้าใจผิดว่าเป็นผู้ซื้อรายอื่น
                  ถือว่าเอกสารได้ระบุชื่อครบถ้วนแล้ว (
                  ตามข้อหารือภาษีอากรของกรมสรรพากร เลขที่ กค 0811/2154 )
                </ListItem>
                <ListItem>
                  3 กรณีที่อยู่ที่ปรากฎในใบกำกับภาษีไม่ตรงกับบัตรประจำตัวประชาชน
                  ผู้ซื้อสินค้าหรือบริการยังสามารถใช้สิทธิประโยชน์ในการลดหย่อนภาษีได้
                  ( จากการสอบถามข้อมูล Call Center )
                </ListItem>
                <ListItem>
                  <ListItemDecorator> </ListItemDecorator> ***หมายเหตุ***
                </ListItem>
              </List>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ConditionsTaxInv;
