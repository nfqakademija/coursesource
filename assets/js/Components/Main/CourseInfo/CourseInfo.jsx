import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import PageHeader from "../../common/PageHeader";
import { fetchCourse } from "../../../modules/courses";
import user2img from "../../../../Resources/img/user2-160x160.jpg";

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      submitted: false,
      activeTab: 1
    };
  }

  componentWillMount() {
    this.props.fetchCourse(this.props.match.params.course);
  }

  render() {
    if (this.props.course.loading === true) {
      return <h3>Loading...</h3>;
    } else if (
      this.props.course.loading === false &&
      this.props.course.error === true
    ) {
      return <h3>Error</h3>;
    }
    return (
      <div>
        <PageHeader
          title={this.props.course.item.title}
          links={[
            {
              name: "Home",
              url: `/`
            },
            {
              name: "Browse courses",
              url: `/main/browse-courses`
            }
          ]}
        />
        <div className="content">
          <h1>{this.props.course.item.title}</h1>
          {/*<img />*/}
          <h5>{this.props.course.item.slogan}</h5>
          <div className="nav-tabs-custom">
            <ul className="nav nav-tabs">
              <li
                className={this.state.activeTab === 1 ? "active" : ""}
                onClick={() => this.setState({ ...this.state, activeTab: 1 })}
              >
                <a>Description</a>
              </li>
              <li
                className={this.state.activeTab === 2 ? "active" : ""}
                onClick={() => this.setState({ ...this.state, activeTab: 2 })}
              >
                <a>Stats</a>
              </li>
              <li
                className={this.state.activeTab === 3 ? "active" : ""}
                onClick={() => this.setState({ ...this.state, activeTab: 3 })}
              >
                <a>Lectors</a>
              </li>
              <li
                className={this.state.activeTab === 4 ? "active" : ""}
                onClick={() => this.setState({ ...this.state, activeTab: 4 })}
              >
                <a>Other info</a>
              </li>
            </ul>
            <div className="tab-content">
              {this.state.activeTab === 1 && (
                <h3>{this.props.course.item.description}</h3>
              )}

              {this.state.activeTab === 2 && (
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-green">
                        <i className="ion-ios-information-outline" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Sales</span>
                        <span className="info-box-number">760</span>
                      </div>
                      {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-green">
                        <i className="ion ion-ios-book-outline" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Lectures</span>
                        <span className="info-box-number">54</span>
                      </div>
                      {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-green">
                        <i className="ion ion-ios-person-outline" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Lectors</span>
                        <span className="info-box-number">18</span>
                      </div>
                      {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                  </div>
                </div>
              )}

              {this.state.activeTab === 3 && (
                <div className="row">
                  {[1, 3, 4].map((lector, i) => (
                    <div className="col-sm-3" key={i}>
                      <div className="box box-primary">
                        <div className="box-body box-profile">
                          <img
                            className="profile-user-img img-responsive img-circle"
                            src={user2img}
                            alt="User profile picture"
                          />
                          <h3 className="profile-username text-center">
                            Nina Mcintire
                          </h3>
                          <p className="text-muted text-center">
                            Software Engineer
                          </p>
                          <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                              <b>Followers</b>{" "}
                              <a className="pull-right">1,322</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {this.state.activeTab === 4 && (
                <h3>{this.props.course.item.creationDate}</h3>
              )}
            </div>
          </div>

          {!this.state.showMore && (
            <button
              onClick={() =>
                this.setState({
                  ...this.state,
                  showMore: true
                })
              }
            >
              Join course
            </button>
          )}
          {(this.state.showMore || this.state.submitted) && (
            <div>
              <h3>
                In order to join this course you have to submit a solution for
                the following task:
              </h3>
              {!this.state.submitted ? (
                <div>
                  <input />
                  <button
                    onClick={() =>
                      this.setState({
                        ...this.state,
                        submitted: true
                      })
                    }
                  >
                    Submit a solution
                  </button>
                </div>
              ) : (
                <h3>You have already submitted a solution</h3>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  course: state.courses.course
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCourse
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CourseInfo);
