import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
//import Gallery from './components/Gallery';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

ReactDOM.render(
  <App />, document.getElementById('root') as HTMLElement
);

let repsonsive = {
  0: {
      items: 3
  },
  1024: {
      items: 3
  }
}

ReactDOM.render(
  <div style={{padding: "5% 10% 0% 10%"}}>
  <Typography variant={"title"} gutterBottom={true}>Featured Projects</Typography>
  <AliceCarousel mouseDragEnabled responsive={repsonsive} buttonsDisabled={false} dotsDisabled={true}>

      <Card className={"cardFull"}>
      <CardActionArea>
        <CardMedia
          className={"cardMedia"}
          image="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
          title="Card 1"
        />
        <CardContent>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            >
          <Typography gutterBottom variant="h5" component="h2">
            Microsoft Imagine Cup 
          </Typography>
          <Chip label={"Beginner"} color={"primary"}/>
          </Grid>
          <Typography component="p">
            We are looking to recruit some members for the upcoming Microsoft Imagine Cup competition. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={"cardFull"}>
      <CardActionArea>
        <CardMedia
          className={"cardMedia"}
          image="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Microsoft Imagine Cup
          </Typography>
          <Typography component="p">
            We are looking to recruit some members for the upcoming Microsoft Imagine Cup competition. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={"cardFull"}>
      <CardActionArea>
        <CardMedia
          className={"cardMedia"}
          image="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg"
          title="Card 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Microsoft Imagine Cup
          </Typography>
          <Typography component="p">
            We are looking to recruit some members for the upcoming Microsoft Imagine Cup competition. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    </AliceCarousel></div>, document.getElementById('carousel') as HTMLElement
);
registerServiceWorker();
