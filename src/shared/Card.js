import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

const CardMui = ({ title, description, imageUrl, video, url }) => {
  return (
    <Link href={`${url}`} underline="none" >
      <Card>
        <CardMedia
          component={video ? "iframe" : "img"}
          height= {video ? "220" : "140" }
          // image={imageUrl}
          src={imageUrl}
          alt={imageUrl}
        />
        {
          video ? null :
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>

        }
      </Card>
    </Link>

  );
};

export default CardMui