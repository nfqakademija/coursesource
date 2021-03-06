import React from "react";
import { Link } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  render() {
    const isLoggedIn = window.localStorage.getItem("userToken");
    if (isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/main/dashboard",
            state: { from: this.props.location }
          }}
        />
      );
    }
    return (
      <div className="landingpage">
        {/* Nav Menu */}
        <header className="bg-gradient" id="home">
          <div id="landing-header--margin-top" className="container mt-5">
            <h1 className="landing-page-header">CourseSource</h1>
            <p className="tagline">
              We optimise your learning experience.
            </p>
            <Link
              to="/register"
              id="landing-button"
              className="btn btn-primary landing-button"
            >
              Register
            </Link>
            <Link to="/login" id="landing-button" className="btn btn-primary">
              Login
            </Link>
            <Link to="/main/browse-courses" id="landing-button" className="btn btn-primary">
              Courses
            </Link>
          </div>
          <div className="img-holder mt-3">
            <img
              src="https://www.odoo.com/apps/modules/8.0/project_task_repetition/task_scheduling.png"
              className="img-fluid"
            />
          </div>
        </header>
        <div className="section light-bg" id="features">
          <div className="container">
            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Features you love</h3>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-face-smile gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Unified experience</h4>
                        <p className="card-text">
                          A single platform for your learning and personal development 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-settings gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Time management</h4>
                        <p className="card-text">
                          Entire learning plan in a single place
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-lock gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Stay engaged</h4>
                        <p className="card-text">
                          Be notified about all the events important just to you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section light-bg">
          <div className="container">
            <div className="section-title">
              <small>FEATURES</small>
              <h3>Do more with our app</h3>
            </div>
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a
                  className={
                    "nav-link " + (this.state.activeTab === 1 ? "active" : "")
                  }
                  onClick={() => this.setState({ activeTab: 1 })}
                  data-toggle="tab"
                  href="#schedule"
                >
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "nav-link " + (this.state.activeTab === 2 ? "active" : "")
                  }
                  onClick={() => this.setState({ activeTab: 2 })}
                  data-toggle="tab"
                  href="#messages"
                >
                  Mentoring
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "nav-link " + (this.state.activeTab === 3 ? "active" : "")
                  }
                  onClick={() => this.setState({ activeTab: 3 })}
                  data-toggle="tab"
                  href="#livechat"
                >
                  Scheduling
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade active in" id="schedule">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Notifications</h2>
                    <p className="lead">
                      Get real time notifications about new events
                    </p>
                    <p>
                      With CourseSource you won't miss any events. Get information about all new
                      lectures, assignments or even new grades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="messages">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Mentoring</h2>
                    <p className="lead">
                      Better tools - easier learning
                    </p>
                    <p>
                      With CourseSource mentors can create new courses, invite lectors, students and start teaching. 
                    </p>
                    <p>
                      Should you want only the most clever and motivated students to attend, you can create an entry task and invite students based on their knowledge.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="livechat">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Scheduling when you want</h2>
                    <p className="lead">Check schedule at any time</p>
                    <p>
                      With CourseSource you can check your schedule at any time.
                      This way you can make plans more easily.
                    </p>
                    <p>
                      Every course has it's dedicated schedule that includes
                      lectures and assignment dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
