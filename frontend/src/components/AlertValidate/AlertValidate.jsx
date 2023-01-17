import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogClasses } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertValidate = () => {
  const [open, setOpen] = useState(false);
  //   useEffect(() => {
  //     setOpen(props.open);

  //     console.log("useEffect logic ran");
  //   }, [props]);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open="true" aria-labelledby="responsive-dialog-title">
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ fontFamily: "NotoSansThai" }}
      >
        Error!!!
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontFamily: "NotoSansThai" }}>
          กรุณาระบุเลขที่คำสั่งซื้อหรือเลขที่ใบกำกับภาษีของท่าน
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertValidate;
