import React from "react";
import styled from "styled-components";

const Plus = styled.svg`
  cursor: pointer;
`;

const LightPlus = () => {
  return (
    <Plus
      width="40"
      height="40"
      viewBox="0 0 45 45"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 9.375V35.625"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.375 22.5H35.625"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Plus>
  );
};

export default LightPlus;
