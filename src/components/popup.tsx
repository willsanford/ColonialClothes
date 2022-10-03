import type { NextComponentType } from "next";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface PopupPropsType {
  item: any;
  open: boolean;
  handleClose: any;
}

const Popup: NextComponentType = (props:PopupPropsType) => {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >        
        <Box sx={style}>
          <div className="flex flex-row justify-around">
            <Image src={"/imgs/" + props.item.fname + ".jpeg"} layout="intrinsic" height={400} width={400} />
            <div className="flex flex-col justify-around">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Object name: {props.item.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title: {props.item.title}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Date: {props.item.start_date} - {props.item.end_date}
              </Typography>              
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Location of Origin: {props.item.loc_origin}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Location of Creation: {props.item.loc_creation}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Creator/Artist/Designer: {props.item.creator}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Proveance: {props.item.proveance}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Orginization: {props.item.organization}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <Link href={props.item.link}>
                  <a className="blue">Link to fasion</a>
                </Link>                
              </Typography>

            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Popup;
