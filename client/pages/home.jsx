import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: null
    };
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    fetch('api/getCars')
      .then(res => res.json())
      .then(cars => {
        console.log(cars);
        this.setState({ cars });
      });
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    if (!this.state.cars) return null;

    return (
      <>
        <h1 className="title">Car Catalog</h1>
        <div />
      </>
    );

  }
}
