import './App.css';
import React from 'react'
import logo from './logo.svg';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import RotateRightIcon from '@mui/icons-material/RotateRight';

function Site1() {
  return (
    <div className="App">
      <Shop></Shop>
    </div>
  );
}

class Shop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Sklep internetowy",
      details: "",
      location: "ul. Kolorowa 23",
      _changeItems: true
    };
  }
  changeTitle = () => {
    this.setState({details: "- Części komputerowe"});
  };
  changeItems = () => {
    this.setState({ _changeItems: !this.state._changeItems })
    this.setState({ _changeItems: !this.state._changeItems })
  };
  render() {
    return (
      <div className="App-header">
        <header>
          <img src= {logo} className="App-logo" alt="logo" />
        </header>
        <div>
            <h1> {this.state.name} {this.state.details} </h1>
            <h3> {this.state.location} </h3>
        </div>
        <div>
            <Container class="itemsContainer">
              <Items _state={this.state._changeItems} />
            </Container>
            <Button variant="contained" color="primary" onClick={this.changeTitle}>Szczegóły</Button>
            <Button variant="contained" color="primary" onClick={this.changeItems}>Zmień kategorie<RotateRightIcon></RotateRightIcon></Button>
        </div>
      </div>
    )
  };
}
const Items = props => {
  const computerParts = ['Procesory', 'Karty graficzne', 'Płyty główne', 'Pamięci RAM', 'Zasilacze']
  const compPartsList = computerParts.map(part => <li key={part}>{part}</li>)
  const gamingEquipment = ['Konsole', 'Pady', 'Słuchawki', 'Klawiatury', 'Myszki']
  const gamingEqList = gamingEquipment.map(equipment => <li key={equipment}>{equipment}</li>)
  return (
    <div>
      {props._state ? 
        <div>
          <h3 class="itemsHeader">Podzespoły komputerowe:</h3>
          <ol>{compPartsList}</ol>
        </div> : 
        <div>
          <h3 class="itemsHeader">Sprzęt dla graczy:</h3>
          <ol>{gamingEqList}</ol>
        </div>}
    </div>
  )
}

export default Site1;