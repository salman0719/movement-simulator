"use client";

import React, { useState } from "react";
import styles from "./network.module.css";
import { NETWORK_HEIGHT, NETWORK_WIDTH } from "@/utilities/constants";
import Box from "./box";

const Network: React.FC = () => {
  const [activeRowIndex] = useState<number>(0);
  const [activeColIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      {new Array(NETWORK_HEIGHT).fill(0).map((_, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {new Array(NETWORK_WIDTH).fill(0).map((_, colIndex) => {
              return <Box key={colIndex} active={false} />;
            })}
          </div>
        );
      })}
      {activeRowIndex > -1 &&
        activeRowIndex < NETWORK_HEIGHT &&
        activeColIndex > -1 &&
        activeColIndex < NETWORK_WIDTH && (
          <Box active rowIndex={activeRowIndex} colIndex={activeColIndex} />
        )}
    </div>
  );
};

export default Network;
