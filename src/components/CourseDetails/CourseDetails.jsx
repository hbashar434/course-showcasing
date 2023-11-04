import React, { useState } from "react";
import { useGetCourseQuery } from "../../redux/features/course/courseApi";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);
  const { id } = useParams();
  const { data: course } = useGetCourseQuery(id);
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = course || {};

  const handleEnrollClick = () => {
    console.log("Enroll button clicked");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-gray-600">Instructor: {instructor}</p>
        <p className="text-gray-600">Enrollment Status: {enrollmentStatus}</p>
        <p className="text-gray-600">Course Duration: {duration}</p>
        <p className="text-gray-600">Schedule: {schedule}</p>
        <p className="text-gray-600">Location: {location}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{description}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Pre-requisites</h2>
          <ul className="list-disc list-inside">
            {prerequisites?.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Syllabus</h2>
          <button
            onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}
            className="text-blue-500 hover:underline"
          >
            {isSyllabusExpanded ? "Collapse Syllabus" : "Expand Syllabus"}
          </button>
          {isSyllabusExpanded && (
            <ul className="list-disc list-inside mt-2">
              {syllabus?.map((item) => (
                <li key={item.week}>
                  <h3 className="font-semibold">{`Week ${item.week}: ${item.topic}`}</h3>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleEnrollClick}
          className="mt-4 bg-emerald-500 text-white font-semibold px-4 py-2 rounded"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
