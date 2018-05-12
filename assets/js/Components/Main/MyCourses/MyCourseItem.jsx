import React from "react";
import { Link } from "react-router-dom";
import "./MyCourseItem.css";

const MyCourseItem = props => (
  <div className="box box-widget widget-user">
    <div className="box box-widget widget-user-2">
      {/* Add the bg color to the header using any of the bg-* classes */}
      <div className="widget-user-header bg-yellow">
        <img
          className="course-image"
          src="https://www.designrepublic.com/11094-cart_default/krossing-100x100-cm.jpg"
        />
        <div className="course-text">
          <h3 id="course-title" className="widget-user-username">{props.courseInfo.course.title}</h3>
          <p>{props.courseInfo.course.slogan}</p>
        </div>
      </div>
      <div className="box-footer no-padding">
        <ul className="nav nav-stacked">
          <li>
            <a>
              Status
              <span className="pull-right badge bg-green">
                {props.courseInfo.status}
              </span>
            </a>
          </li>
          <li>
            <a>
              Role
              <span className="pull-right badge bg-blue">
                {props.courseInfo.role}
              </span>
            </a>
          </li>
          <li>
            <a>
              Unread notifications:
              <span className="pull-right badge bg-aqua">5</span>
            </a>
          </li>
          <li>
            <Link to={`/course/${props.courseInfo.course.id}`}>
              <button className="btn btn-info">Join course</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default MyCourseItem;
