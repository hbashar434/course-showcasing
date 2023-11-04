import React from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

const CourseCard = ({ course }) => {
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    likes,
    _id,
  } = course || {};

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg md:text-2xl font-semibold">{name}</h2>
        <p className="text-gray-500">
          Instructor: <span className="font-semibold">{instructor}</span>
        </p>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500">
          Enrollment Status:{" "}
          <span className="font-semibold">{enrollmentStatus}</span>
        </p>
        <p className="text-gray-500">
          Course Duration: <span className="font-semibold">{duration}</span>
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <BiLike size={24} />
            <span className="text-gray-600 ml-2 font-semibold">{likes}</span>
          </div>
          <div>
            <button className="bg-teal-500 text-white font-semibold px-4 py-2 rounded mr-2">
              Enroll
            </button>
            <Link to={`/course/${_id}`}>
              <button className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
