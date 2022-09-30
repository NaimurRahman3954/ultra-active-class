import React, { Component } from "react";
import Sidebar from "./sidebarList";
import CardList from "./cardList";
class Body extends Component {
  state = {
    count:10
  };

  handleTime = (count) => {
    console.log('clicked',this.state.count)
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 bg-light bg-gradient p-5">
              <div className="row text-primary">
                <span></span>
                <h1 className="heading">💪 ULTRA-ACTIVE-CLASS</h1>
              </div>
              <p>Select today’s exercise</p>

              <div className="row ">
                <CardList />
                <CardList />
                <CardList />
              </div>
              <div className="row ">
                <CardList />
                <CardList />
                <CardList />
              </div>
            </div>
            <div className="col-3">
              <Sidebar 
               increment={this.handleTime(this.props.count)}/>
            </div>
          </div>
        </div>
        <div class="container-fluid blog">
          <h1 className="heading">🔥 Blog</h1>
          <div class="card mt-2 p-2">
              <h3>How does React work?</h3>
              <p>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
              </p>
          </div>
          <div class="card mt-2 p-2">
              <h3>What is the difference between props and state?</h3>
              <p>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
              </p>
          </div>
          <div class="card mt-2 p-2 mb-5">
              <h3>Where else useEffect is used other than loading data from API?</h3>
              <p> ➜ Running on state change: validating input field <br></br>
                  ➜ Running on state change: live filtering <br></br>
                  ➜ Running on state change: trigger animation on new array value <br></br>
                  ➜ Running on props change: update paragraph list on fetched API data update<br></br>
                  ➜ Running on props change: updating fetched API data to get BTC updated price<br></br>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
