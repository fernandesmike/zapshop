import React from "react";

// Styling
import "../../styles/typography.css";

const Tags = ({ txtContent }) => {
  return (
    <div className="tertiary uppercase rounded-full py-2 px-6 border-2 border-brand-accent inline-block text-brand-accent">
      {txtContent}
    </div>
  );
};

export default Tags;
