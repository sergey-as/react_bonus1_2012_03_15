import React, {Component} from 'react';

class Car extends Component {

    // state = {
    //     car: this.props.car
    // };

    constructor(props) {
    super(props);
    let {car} = props;
    this.state = {car};
    }

    render() {
        let {car} = this.props;
        // console.log(this.props.car);
        console.log(car);
        return (
            <div>
                <h4>{car.model}</h4> -
                <p>{car.year} - {car.power} - {car.color} - {car.status.toString()}</p>

                <button onClick={() => {
                    this.setState()
                    car.status = !car.status;
                    console.log(car.status);
                    this.setState({car});
                }}>change status
                </button>
            </div>
        )
    }
}

export default Car;