import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Cards(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 140,
              width: "100%", // Adjust the width as needed
              objectFit: "contain", // To maintain the aspect ratio and cover the entire space
            }}
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p className="text-sm">{props.name}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expanded
                ? props.description
                : props.description.substring(0, 70)}
            </Typography>
            {props.description.length > 100 && (
              <Button onClick={handleExpandClick} size="small" color="primary">
                {expanded ? "Read Less" : "Read More"}
              </Button>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className="w-full ">
            <p className="font-extrabold text-lg">
              Buy At! <span className="text-[red]">{props.price}</span>
            </p>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
