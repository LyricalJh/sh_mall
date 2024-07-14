import React from "react";

const ContentBody = ({ poemTitle, poemContent, size }) => {
  return (
    <div
      className="felx rounded justify-center mt-3 border-solid border-2 p-10"
      style={{ width: size, backgroundColor: "black", borderColor: "#262626" }}
    >
      <h2 className="font-[GowunBatang] text-white">{poemTitle}</h2>
      <pre className="font-[GowunBatangR] text-white">{poemContent}</pre>
    </div>
  );
};

export default ContentBody;
