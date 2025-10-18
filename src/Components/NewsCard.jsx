import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="card w-full bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
            {/* Author Info */}
            <div className="flex items-center justify-between bg-base-200 p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author?.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(author?.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-primary flex items-center gap-2">
                    <CiBookmark size={24} />
                    <FaShareAlt />
                </button>
            </div>

            {/* Title */}
            <div className="px-4 pt-3">
                <h3 className="font-bold text-lg text-gray-800 leading-snug hover:text-primary cursor-pointer">
                    {title}
                </h3>
            </div>

            {/* Thumbnail */}
            <figure className="px-4 py-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-lg w-full object-cover"
                />
            </figure>

            {/* Description */}
            <div className="px-4">
                <p className="text-sm text-gray-600">
                    {details.slice(0, 200)}...
                    <span className="text-primary font-semibold cursor-pointer">
                        Read More
                    </span>
                </p>
            </div>

            {/* Footer */}
            <hr className="border-gray-300 mt-4 w-[95%] mx-auto"/>
            <div className="flex items-center justify-between px-4 py-5">
                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating.number ? "text-yellow-500" : "text-gray-300"}
                        />
                    ))}
                    <span className="text-gray-700 text-sm ml-1">{rating.number}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaEye /> {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
