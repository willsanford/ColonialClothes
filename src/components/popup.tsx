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
  width: 1300,
  height: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface PopupPropsType {
  item: any;
  open: boolean;
  handleClose: any;
  close: any;

}
const Popup: NextComponentType = (props: PopupPropsType) => {
  let get_location = () => {
    if((props.item.loc_origin_town === "N/A") & (props.item.loc_origin_colony === "N/A")){
      return props.item.loc_origin_country; 
    }else if ((props.item.loc_origin_town === "N/A")){
      return props.item.loc_origin_colony + ", " + props.item.loc_origin_country;
    }else{
      return props.item.loc_origin_town + ", " +  props.item.loc_origin_colony+ ", " + props.item.loc_origin_country
    }
  }

const Separator = () => {
  return (
    <Box my={2} border={0} borderBottom={1} borderColor="grey.400" />
  );
};
const TextContainer = ({ children }) => {
  return (
    <Box p={2} border={1} borderColor="grey.400">
      {children}
    </Box>
  );
};

const BoldText = ({ boldText, nonBoldText }) => {
  return (
    <Typography variant="h6" component="h2">
      <strong>{boldText}</strong> {nonBoldText}
    </Typography>
  );
};
const get_date_range = () =>{
return props.item.start_date + " - " + props.item.end_date;
}
  return (
    <>
      <Modal
        open={props.open}
        onClose={() => {
          props.onClose()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row justify-between">
            <div style={{ height: '400px', width: '100%', position: 'relative' }}>
              <Image
                src={"/imgs/" + props.item.fname + ".jpg"}
                alt="My Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-around border-double">
  
	     <TextContainer>
	     <BoldText boldText={"Title: "} nonBoldText={props.item.title}/>
             <Separator />	      
	     <BoldText boldText={"Date: "} nonBoldText={get_date_range()}/>
             <Separator />	      
	     <BoldText boldText={"Location of Origin: "} nonBoldText={get_location()}/>
             <Separator />	      
	     <BoldText boldText={"Creator/Artist/Designer: "} nonBoldText={props.item.creator}/>
             <Separator />	      
	     <BoldText boldText={"Orginization: "} nonBoldText={props.item.orginization}/>
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
	      </TextContainer>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Popup;
