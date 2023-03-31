import type { NextPage } from "next";

import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import { PropaneSharp } from "@mui/icons-material";

const ImageCard = ({
  item,
  f
}) => {
  return (
    <CardActionArea onClick={() => f(item.id)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 280 }}
          image={"/imgs/" + item.fname + ".jpg"}
          title="green iguana"
        />
      </Card>
    </CardActionArea>
  );
};

const Browse: NextPage = (props) => {
  return (
    <>
      <main className="container p-4 f-full w-full">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ maxHeight: '70vh', overflow: 'auto' }}>
          {props.items.map((el) => (
            <Grid xs={2} sm={4} md={4} key={el.id}>
              <ImageCard item={el} f={props.onClick} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};



export default Browse;
