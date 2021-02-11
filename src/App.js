import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>ReactJS props validation example</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>{this.props.propArray}</td>
              <td>{this.props.propArray ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "true" : "False"}</td>
              <td>{this.props.propBool ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNum}</td>
              <td>{this.props.propNum ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{this.props.propFunc("Yuri")}</td>
              <td>{this.props.propFunc("Yuri") ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "true" : "False"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propNum: PropTypes.number,
  propFunc: PropTypes.func,
  propString: PropTypes.string
}

App.defaultProps = {
  propArray: [],
  propBool: false,
  propNum: "-1",
  propFunc: function(name){ return "Hello"+name},
  propString: "asdasdasdasdas"
}



export default App;
