import React, { Component } from "react";
import axios from "axios";

class AddCar extends Component {

  constructor(props) {
    super(props)

    this.state = {
        Car_ID: '',
        Year: '',
        Make: '',
        Model: '',
        Judge_ID: '',
        Judge_Name: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)

    axios.post('http://localhost:3001/api/car/', this.state)
    .then(response => {
      console.log(response)
      this.setState({
        Car_ID: '',
        Year: '',
        Make: '',
        Model: '',
        Judge_ID: '',
        Judge_Name: ''
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    
    const { Car_ID, Year, Make, Model, Judge_ID, Judge_Name } = this.state

    return (
        
      <div>
        <div className="addCarDisplay">
          <form onSubmit={this.submitHandler}>
          <label>Car ID: </label>
          <input 
            type="number" 
            name="Car_ID" 
            value={Car_ID} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Year: </label>
          <input 
            type="number" 
            name="Year" 
            value={Year} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Make: </label>
          <input 
            type="text" 
            name="Make" 
            value={Make} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Model: </label>
          <input 
            type="text" 
            name="Model" value={Model} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Judge ID: </label>
          <input 
            type="text" 
            name="Judge_ID" 
            value={Judge_ID} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Judge Name: </label>
          <input 
            type="text" 
            name="Judge_Name" 
            value={Judge_Name} 
            onChange={this.changeHandler} />
          <br></br>
            <button
              onClick={() => this.setState({ editing: false })}>
              Cancel
            </button>
            <button 
                onClick={() => alert("Insert Successful")} >
                Submit
            </button>
           </form>
         </div>
       </div>
    )
  }
}
export default AddCar