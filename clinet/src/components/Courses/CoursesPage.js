import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../Redux/actions/createCourse";
import PropType from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursePage.PropType = {
  courses: PropType.array.isRequired,
  actions: PropType.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(CoursePage);
