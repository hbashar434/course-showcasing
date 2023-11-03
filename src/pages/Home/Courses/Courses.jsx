import React, { useState, useEffect } from "react";
import { useGetAllCoursesQuery } from "../../../redux/features/course/courseApi";
import Loading from "../../Shared/Loading/Loading";
import Error from "../../Error/Error";
import CourseCard from "../../../components/CourseCard/CourseCard";

const Courses = () => {
  const [searchInput, setSearchInput] = useState(""); // State variable for search input
  const [filteredCourses, setFilteredCourses] = useState([]); // State variable for filtered courses
  const [showAllCourses, setShowAllCourses] = useState(true); // State variable to control display

  const { data: courses, isLoading, isError } = useGetAllCoursesQuery();

  // Use useEffect to set filteredCourses initially
  useEffect(() => {
    if (courses) {
      setFilteredCourses(courses);
    }
  }, [courses]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error />;
  }

  // Function to handle search and filter courses
  const handleSearch = () => {
    // Filter courses based on searchInput (name and instructor)
    const filteredCourses = courses.filter((course) => {
      const courseName = course.name.toLowerCase();
      const instructorName = course.instructor.toLowerCase();
      const searchValue = searchInput.toLowerCase();
      return (
        courseName.includes(searchValue) || instructorName.includes(searchValue)
      );
    });

    // Set the filtered courses and hide all courses if no results
    setFilteredCourses(filteredCourses);
    setShowAllCourses(filteredCourses.length > 0);
  };

  // Function to reset the search and show all courses
  const handleBackToAllCourses = () => {
    setSearchInput(""); // Clear search input
    setFilteredCourses(courses); // Reset filtered courses
    setShowAllCourses(true); // Show all courses
  };

  return (
    <section>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex justify-center gap-4 mb-8"
        >
          <input
            type="text"
            required
            placeholder="Search here"
            className="h-10 w-48 px-2 py-1 rounded focus:outline-none focus:ring focus:border-teal-300 ring-2 ring-teal-300 ring-inset"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white font-semibold px-4 py-2 rounded mr-2"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showAllCourses ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <div className="">
            <div className=" bg-teal-500 w-80 h-48 rounded-sm shadow-md drop-shadow-lg flex flex-col justify-center items-center gap-3">
              <p className=" text-xl font-semibold text-white">
                <span className="text-red-600 font-bold text-2xl"> Sorry,</span>{" "}
                no results found.
              </p>
              <button onClick={handleBackToAllCourses} className="my-btn">
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
