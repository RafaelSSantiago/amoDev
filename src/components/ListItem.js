import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../styles/ListItem.css'



class ListItem extends Component {

  render() {
    return (
      <Card style={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Carro"
            height="270"
            image={this.props.image}
            title="carro"
          />
          <CardContent>
              <Grid  container item xs sm>
                <Typography style={{marginBottom: "8px", marginTop: "-10px"}} className="titulo" label="Filled" variant="filled">
                  {this.props.brand} {this.props.model}
                </Typography>
              </Grid>
              <Grid container item xs spacing={1}>
                <Grid item xs sm>
                  <Typography className="info" variant="h7">
                    {this.props.year} | Transmissão {this.props.fuel === "gasolina" ? this.props.fuel : "flex"} | {this.props.km}km
                  </Typography>
                </Grid>
              <Grid item xs sm>
                <Typography  className="carPriceColor" variant="h6">
                  {this.props.price ? this.props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "0,00"}
                </Typography>
              </Grid>
              </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default ListItem;
