import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: null
    };
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    fetch('api/getCars')
      .then(res => res.json())
      .then(cars => console.log(cars));
  }

  componentDidMount() {
    this.getCars();
  }

  render() {

    if (!this.state.inventory) return null;

  }
}
