import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { useState, useEffect } from "react" 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: '#D8C4B6',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '5%',
    textAlign: "center",
  }



const WinModal = ({ win }) => {

    const [open, setOpen] = useState(false)

   
    useEffect(() => {
        if (win) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }, [win]);

    const handleClose = () => setOpen(false)

  return (
    <div>
        {/* <Button onClick={handleOpen} >Open Modal</Button> */}
        <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt: 2, fontWeight: "600", fontSize: "40px"}}>
                    Congratulations 🎉🎉
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2, fontWeight: "400",fontSize: "50px"}}>
                    You Won🥇🚀🚀
                </Typography>
            </Box>

        </Modal>
    </div>
  )
}

export default WinModal
