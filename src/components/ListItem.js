import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/ListItem.css'

const useStyles = makeStyles((theme) => ({
  carPrice: {
    color: 'red'
  },
}));

class ListItem extends Component {

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={this.props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" >
              {this.props.brand} {this.props.model}
            </Typography>
            <Typography variant="subtitle2">
            {this.props.year} | {this.props.km}km | Transmissão {this.props.fuel}
            </Typography>
            <Typography className="carPrice" variant="body2" color="textSecondary" component="p">
              R$ {this.props.price ? this.props.price.toFixed(2) : "0,00" } 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default ListItem;
