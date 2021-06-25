import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { TutorCard } from "../../components/TutorCard/TutorCard";
import { StateContext } from "../../stateHandling/contexts/StateContext";
import {
  deleteCourseFromDB,
  fetchCreatedCoursesFromDB,
} from "../../stateHandling/utils/serverRequests";
import { Loader } from "../../components";
import "./TutorDashboard.scss";

export function TutorDashboard({ user }) {
  const [id, setId] = useState(null);
  const history = useHistory();

  const {
    state: { createdCourses },
    dispatch,
  } = useContext(StateContext);

  const [stats, setStats] = useState({
    enrolled: "",
    wishlist: "",
  });
  const [earning, setEarning] = useState(0);

  useEffect(() => {
    fetchCreatedCoursesFromDB(user, dispatch);
  }, [user, dispatch]);

  useEffect(() => {
    const { totalEarnings } = user?.user;
    setEarning(totalEarnings);
  }, [user]);

  const handleStats = (id) => {
    const { enrolledStudents, wishlistedBy } = createdCourses.filter(
      (e) => e._id === id
    )[0];
    setStats({
      enrolled: enrolledStudents.length,
      wishlist: wishlistedBy.length,
    });
    setId(id);
  };

  const deleteCourse = (courseId) => {
    console.log(courseId);
    if (window.confirm("Are you sure to delete your course?")) {
      deleteCourseFromDB(courseId, user, dispatch);
      history.push("/dashboard");
    }
  };

  return (
    <div className="tutor">
      <div className="applyFlex">
        <div className="tutor__row1">
          <Link className="tutor__row1-btn" to="/newcourse">
            Create a new Course
          </Link>
        </div>
        <div className="tutor__row1-1">
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              marginRight: ".5rem",
            }}
          >
            ${earning}
          </p>
          <p>Total Earnings</p>
        </div>
      </div>
      <div className="tutor__row2">
        <div className="tutor__row2__left">
          <h3 className="tutor__row2__left-header">Your courses</h3>
          <div className="tutor__row2__left-courseList">
            {user?.user.createdCourses.length > 0 ? (
              createdCourses.length > 0 ? (
                createdCourses.map((course) => (
                  <div
                    className="tutorCard"
                    key={course._id}
                    onClick={() => handleStats(course._id)}
                  >
                    <TutorCard course={course} />
                  </div>
                ))
              ) : (
                <Loader />
              )
            ) : (
              <div>You haven't created any courses</div>
            )}
          </div>
        </div>
        <div className="tutor__row2__right">
          {stats.enrolled === "" ? (
            <div className="tutor__row2__right-empty">Your Stats</div>
          ) : (
            <>
              <Link
                to={`/details/${id}`}
                className="tutor__row2__right-stats remove-style"
              >
                Course Details
              </Link>
              <Link
                to={`/updatecourse/${id}`}
                className="tutor__row2__right-stats remove-style"
              >
                Update Course
              </Link>
              <Link
                to="#"
                className="tutor__row2__right-stats remove-style"
                onClick={() => deleteCourse(id)}
              >
                Delete Course
              </Link>
              <Link to="/" className="tutor__row2__right-stats remove-style">
                Update Thumbnail
              </Link>
              <div className="tutor__row2__right-stats">
                <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>
                  {stats.enrolled}
                </p>
                <p>Enrolled Students</p>
              </div>
              <div className="tutor__row2__right-stats">
                <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>
                  {stats.wishlist}
                </p>
                <p>Wishlisted students</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
