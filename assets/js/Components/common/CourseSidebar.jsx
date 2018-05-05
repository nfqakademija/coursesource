import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CourseSidebarHeader from './CourseSidebarHeader'
import user2img from '../../../Resources/img/user2-160x160.jpg'

class CourseSidebar extends React.Component {
  render() {
    return (
      <div>
        <CourseSidebarHeader />
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src={user2img} className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#">
                  <i className="fa fa-circle text-success" /> Online
                </a>
              </div>
            </div>
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li>
                <Link to={`/course/${this.props.match.params.course}`} className="navigation-item">
                  <i className="fas fa-home fa-fw" />
                  <span> Home</span>
                </Link>
              </li>
              <li>
                <Link to={`/course/${this.props.match.params.course}/notifications`} className="navigation-item">
                  <i className="fas fa-bell fa-fw" /> <span>Notifications</span>
                </Link>
              </li>

              <li>
                <Link to={`/course/${this.props.match.params.course}/schedule`} className="navigation-item">
                  <i className="fas fa-calendar-alt fa-fw" /> <span>Schedule</span>
                </Link>
              </li>

              <li>
                <Link to={`/course/${this.props.match.params.course}/lectures`} className="navigation-item">
                  <i className="fas fa-id-badge fa-fw" /> <span>Lectures</span>
                </Link>
              </li>

              <li>
                <Link to={`/course/${this.props.match.params.course}/assignments`} className="navigation-item">
                  <i className="fas fa-briefcase fa-fw" /> <span>Assignments</span>
                </Link>
              </li>

              <li>
                <Link to="/main/my-courses" className="navigation-item">
                  <i className="fas fa-sign-out-alt fa-fw" /> <span>Back to main</span>
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    )
  }
}

export default CourseSidebar
