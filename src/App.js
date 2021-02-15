import React, { Component } from 'react';
import api from './Api';
import ListItem from './components/ListItem';
import Grid from '@material-ui/core/Grid';

class App extends Component {

  state = {
    carros: [],
  }

  async componentDidMount() {
    const response = await api.get('/product/listAllProductsByIdObj/a8282920-5eb3-4a52-ae63-7557f8a69dfb')
    //console.log(response.data);

    this.setState({ carros: response.data });
  }


  render() {
    const { carros } = this.state;

    return (
      <div>
        <h1>Listar os carros</h1>
        {console.log(carros)}
        <Grid container spacing={3}>
          {carros.map(carro => (
            <Grid item xs={3}>

              <ListItem
                brand={carro.nameBrand}
                model={carro.nameModel}
                km={carro.km}
                price={carro.price}
                image="https://weneedfun.com/wp-content/uploads/2017/09/Bugatti-Veyron-Car-9.jpg"
                year={carro.yearModel}
                fuel={carro.fuel}
              ></ListItem>
              {/* <Paper className={classes.paper}>xs=3</Paper> */}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
