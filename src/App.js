import React, {Component} from 'react';
import Car from "./components/car/Car";

class App extends Component {
    render() {
        let cars = [
            {model: 'civic', year: 1988, power: 75, color: 'red', status: true},
            {model: 'accord', year: 2000, power: 130, color: 'white', status: true},
            {model: 'cr-v', year: 2002, power: 150, color: 'green', status: false},
            {model: 'sierra', year: 1989, power: 60, color: 'blue', status: true},
            {model: 'fusion', year: 2004, power: 65, color: 'green', status: false},
            {model: 'rav4', year: 2010, power: 130, color: 'silver', status: false},
            {model: 'corolla', year: 1997, power: 65, color: 'black', status: true},
            {model: 'camry', year: 2010, power: 150, color: 'white', status: true},
            {model: 'megane', year: 2015, power: 95, color: 'black', status: false},
            {model: 'clio', year: 2003, power: 55, color: 'silver', status: true}
        ];

        return (
            <div className="App">
                {
                    cars.map((value, index) => <Car car={value} key={index}/>)

                }
            </div>
        );
    }
}

export default App;

// import './App.css';
// import Car from "./components/car/Car";
//
// function App() {
//     // let msg = 'hello';
//     // let user = {name: 'Petro'};
//     let cars = [
//         {model: 'civic', year: 1988, power: 75, color: 'red', status: true},
//         {model: 'accord', year: 2000, power: 130, color: 'white', status: true},
//         {model: 'cr-v', year: 2002, power: 150, color: 'green', status: false},
//         {model: 'sierra', year: 1989, power: 60, color: 'blue', status: true},
//         {model: 'fusion', year: 2004, power: 65, color: 'green', status: false},
//         {model: 'rav4', year: 2010, power: 130, color: 'silver', status: false},
//         {model: 'corolla', year: 1997, power: 65, color: 'black', status: true},
//         {model: 'camry', year: 2010, power: 150, color: 'white', status: true},
//         {model: 'megane', year: 2015, power: 95, color: 'black', status: false},
//         {model: 'clio', year: 2003, power: 55, color: 'silver', status: true}
//     ];
//
//     return (
//         <div className="App">
//             {/*<h1>{msg}</h1>*/}
//             {/*<div>{msg} {user.name}</div>*/}
//
//             {
//                 ////1
//                 // cars.map(value => (<p>{value.model} - {value.year} - {value.power} - {value.color} - {value.status.toString()}</p>))
//
//                 ////2
//                 // cars.map(value => (
//                 //         <div>
//                 //             <h4>{value.model}</h4> -
//                 //             <p>{value.year} - {value.power} - {value.color} - {value.status.toString()}</p>
//                 //         </div>
//                 //     )
//                 // )
//
//                 ////3
//                 // cars.map(value => <Car car={value}/>)
//
//                 //4
//                 cars.map((value, index) => <Car car={value} key={index}/>)
//             }
//         </div>
//     );
// }
//
// export default App;
