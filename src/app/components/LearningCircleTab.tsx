import React from "react";

const LearningCircleTab: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Learning Circle</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Horizontal Video */}
        <div className="relative w-full h-64">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Horizontal Video"
            allowFullScreen
          />
        </div>

        {/* Vertical Video */}
        <div className="relative w-full h-96 md:h-auto">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="Vertical Video"
            allowFullScreen
          />
        </div>
      </div>

      {/* More Videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="Video 1"
            allowFullScreen
          />
        </div>
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video 2"
            allowFullScreen
          />
        </div>
        <div className="relative w-full h-48">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/someVideoID"
            title="Video 3"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default LearningCircleTab;
