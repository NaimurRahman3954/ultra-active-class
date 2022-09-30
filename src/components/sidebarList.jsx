import React, { Component } from "react";
class Sidebar extends Component {
  state = {
    time:10
  };

  render() {
    return (
      <div className="m-3">
        <div >
          <img src="pic.jpg" className="profile" alt="" srcset="" />

          <p className="h5">Naimur Rahman</p>
          <p className="text-secondary">Dhanmondi, Dhaka</p>

          
        </div>
        <div className="row bg-light bg-gradient p-3 rounded">
          <div className="col">
            <div className="h5">67 kg</div>
            <div className="h6 text-secondary">Weight</div>
          </div>
          <div className="col">
            <div className="h5">5'6"</div>
            <div className="h6 text-secondary">Height</div>
          </div>
          <div className="col">
            <div className="h5">
              25<span className="fs-6 text-secondary">yrs</span>
            </div>
            <div className="h6 text-secondary">Age</div>
            </div>
        </div>
        <h3 className="mt-4">Add A Break</h3>
        <div className="row bg-light bg-gradient p-3 rounded">
          <div className="col">
            <button  onClick={() => this.setState({time:10})} className="btn rounded-5 btn-secondary"> 10s</button>
          </div>
          <div className="col">
          <button  onClick={() => this.setState({time:20})} className="btn rounded-5 btn-secondary"> 20s</button>
          </div>
          <div className="col">
          <button  onClick={() => this.setState({time:30})} className="btn rounded-5 btn-secondary"> 30s</button>
          </div>
          <div className="col">
          <button  onClick={() => this.setState({time:40})} className="btn rounded-5 btn-secondary"> 40s</button>
          </div>
          <div className="col">
          <button  onClick={() => this.setState({time:50})} className="btn rounded-5 btn-secondary"> 50s</button>
          </div>
        </div>
        <h3 className="mt-4">Exercise Details</h3>
        <div className="row h5 bg-light bg-gradient p-3 rounded">
            <div className="col">Exercise time</div>
            <div className="col text-secondary">200 seconds</div>
        </div>
        <div className="row h5 bg-light bg-gradient p-3 rounded">
            <div className="col">Break time</div>
            <div className="col text-secondary">{this.state.time} seconds</div>
        </div>
        <a href="#" class="btn btn-primary mt-5">Activity Completed</a>
      </div>
    );
  }
}

export default Sidebar;
