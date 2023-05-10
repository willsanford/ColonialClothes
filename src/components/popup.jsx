import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 1300,
  // height: 1000,
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
              
const Popup = (props) => {
  
  let n_files = props.item.add_files.length;
  let [currentImageId, setCurrentImageId] = React.useState(0)

  const get_date_range = (item) => {
    return item.start_date + " - " + item.end_date;
  };
  let get_location = (item) => {
    if (
      item.origin_town === "N/A" &&
      item.origin_colony === "N/A"
    ) {
      return item.origin_country;
    } else if (item.origin_town === "N/A") {
      return item.origin_colony + ", " + item.origin_country;
    } else {
      return (
        item.origin_town +
        ", " +
        item.origin_colony +
        ", " +
        item.origin_country
      );
    }
  };

  const Separator = () => {
    return <Box my={2} border={0} borderBottom={1} borderColor="grey.400" />;
  };
  const TextContainer = ({ children }) => {
    return (
      <Box  p={2} border={1} borderColor="grey.400">
        {children}
      </Box>
    );
  };

  const BoldText = ({ boldText, nonBoldText }) => {
    return (
      <Typography variant="h6" component="h2" sx={{maxHeight: '150px', overflow: 'auto'}}>
        <strong>{boldText}</strong> {nonBoldText}
      </Typography>
    );
  };

  const ItemInfo = ({ item }) => {
    return (
      <TextContainer>
        <BoldText boldText={"Title: "} nonBoldText={item.title} />
        <Separator />
        <BoldText boldText={"Date: "} nonBoldText={get_date_range(item)} />
        <Separator />
        <BoldText
          boldText={"Location of Origin: "}
          nonBoldText={get_location(item)}
        />{" "}
        <Separator />{" "}
        <BoldText
          boldText={"Creator/Artist/Designer: "}
          nonBoldText={item.creator}
        />{" "}
        <Separator />
        <BoldText
          boldText={"Museum/Artist/Source: "}
          nonBoldText={item.mas}
        />
        <Separator />
        <BoldText boldText={"Proveance: "} nonBoldText={item.prov} />
        <Separator />
        <BoldText boldText={"Notes: "}  nonBoldText={item.notes} /> 
        <Separator />
        <Typography color="primary" id="modal-modal-title" variant="h6" component="a">
        <Link href={item.link}>
            Link to fasion
        </Link>
        </Typography>
      </TextContainer>
    );
  };
  return (
    <>
      <Modal
        open={props.open}
        onClose={() => {
          props.onClose();
          setCurrentImageId(0);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      {/* Render based on how many additional files there are */}
      <div>
          <Box sx={style}>
            <div className="flex flex-row h-full justify-between">
                <div
                  style={{ height: style.height * 0.7, width: "100%", position: "relative" }}
                >
                  <Image
                    src={"/imgs/" + props.item.add_files[currentImageId] + ".jpeg"}
                    alt="My Image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              <div className="flex flex-col w-1/3 justify-around border-double">
                <ItemInfo item={props.item} />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <BoldText boldText={"Viewing: "} nonBoldText={(currentImageId + 1) + " of " + props.item.add_files.length} />
                <Button variant="outlined" style={{ color: "blue" }}  onClick={()=>{setCurrentImageId((currentImageId + 1) % (props.item.add_files.length))}}>Next Image</Button>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
