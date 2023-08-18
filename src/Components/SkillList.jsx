import React from "react";

const SkillList = ({ skillName, currentScore, maxScore, bgColor }) => {
  return (
    <li className={`flex justify-between rounded-lg p-2 text-xs ${bgColor}`}>
      <div className="flex gap-1">
        <img src={`/icon-${skillName.toLowerCase()}.svg`} alt="icon" />
        <span className="text-gray-800 text-xs">{skillName}</span>
      </div>
      <div>
        {currentScore}/<span className="text-gray-500">{maxScore}</span>
      </div>
    </li>
  );
};

export default SkillList;
