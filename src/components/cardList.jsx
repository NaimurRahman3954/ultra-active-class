import React, { Component } from "react";
import Sidebar from "./sidebarList";
class CardList extends Component {
  state = {};
  render() {
    return (
      <div className="m-2 col">
        <div class="card ">
          <div class="card-body">
          <img src="pic.jpg" alt="_" className="thum"/>
            <h5 class="card-title">Running</h5>
            <p class="card-text">
              Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an ...
            </p>
            <p className="h6">For Age: 30-40</p>
            <p className="h6">Time required : 30s</p>
            <button onClick={() => this.setState({time:10})}>Add to List</button>
            {/* <a href="#" class="btn btn-primary">Add to List</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
