import React from "react";
import { CircularProgress } from "@nextui-org/react";

const ProgressCircle = () => {
  return (
    <>
      <CircularProgress
        size="lg"
        value={80}
        showValueLabel={true}
        color="primary"
        style={{ scale: "4", borderColor: "#1e00ff" }}
      />
    </>
  );
};

export default ProgressCircle;
