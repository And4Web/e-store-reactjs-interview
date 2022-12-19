import React, { Component } from 'react';
import './mainContainer.scss';
import Sidebar from '../sidebar';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <section name="" id="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4">
                <Sidebar/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainContainer;
