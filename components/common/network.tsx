import React from "react";
import styles from "./network.module.css";
import { NETWORK_HEIGHT, NETWORK_WIDTH } from "@/utilities/constants";
import Box from "./box";

const Network: React.FC = () => {
  return (
    <div className={styles.container}>
      {new Array(NETWORK_HEIGHT).fill(0).map((_, index) => {
        return (
          <div key={index} className={styles.row}>
            {new Array(NETWORK_WIDTH).fill(0).map((_, subIndex) => {
              return <Box key={subIndex} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Network;
