import { CardActions, Grid, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "45vh",
        backgroundColor: "#0a2342",
        color: "white",
      }}
    >
      <Grid container columns={{ xs: 3, md: 12 }}>
        <Grid
          item
          xs={3}
          style={{ paddingTop: 30, paddingRight: 10, paddingLeft: 10 }}
        >
          <Typography variant="h4" component="div">
            Tasty
          </Typography>
          <Typography variant="body2" color="silver">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <CardActions>
            <TwitterIcon />
            <FacebookOutlinedIcon />
            <InstagramIcon />
          </CardActions>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingTop: 30, paddingRight: 10, paddingLeft: 10 }}
        >
          <Typography variant="h5" component="div">
            Opening Hours
          </Typography>
          <Typography variant="body2" color="silver">
            Monday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Tuesday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Wednesday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Thursday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Friday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Saturday: 08: - 22:00
          </Typography>
          <Typography variant="body2" color="silver">
            Sunday: 08: - 22:00
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingTop: 30, paddingRight: 10, paddingLeft: 10 }}
        >
          <Typography variant="h5" component="div">
            Contact Information
          </Typography>
          <Typography variant="body2" color="silver">
            198 West 21th Street, Suite 721 New York NY 10016
          </Typography>
          <Typography variant="body2" color="silver">
            +923413549032
          </Typography>
          <Typography variant="body2" color="silver">
            smshoaib2001@gmail.com
          </Typography>
          <Typography variant="body2" color="silver">
            info@yoursite.com
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingTop: 30, paddingRight: 10, paddingLeft: 10 }}
        >
          <Typography variant="h5" component="div">
            News Letter
          </Typography>
          <Typography variant="body2" color="silver">
            Far far away, behind the word mountains, far from the countries.
          </Typography>
          <TextField id="filled-basic" label="SUBSCRIBE" variant="filled" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
