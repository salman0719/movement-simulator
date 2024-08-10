"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./network.module.css";
import {
  BOT_DIRECTIONS,
  DEFAULT_BOT_DIRECTION,
  NETWORK_HEIGHT,
  NETWORK_WIDTH,
} from "@/utilities/constants";
import Box from "./box";

const Network: React.FC = () => {
  const [activeRowIndex, setActiveRowIndex] = useState<number>(0);
  const [activeColIndex, setActiveColIndex] = useState<number>(0);
  const [direction] = useState<BOT_DIRECTIONS>(DEFAULT_BOT_DIRECTION);

  const currentValueRef: {
    row: typeof activeRowIndex;
    col: typeof activeColIndex;
    direction: typeof direction;
  } = {
    row: activeRowIndex,
    col: activeColIndex,
    direction,
  };
  const valueRef = useRef<typeof currentValueRef>(currentValueRef);
  valueRef.current = currentValueRef;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      if (
        !["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Enter"].includes(
          key,
        )
      ) {
        return;
      }

      const value = valueRef.current;
      const { row, col } = value;

      let newActiveRowIndex: typeof activeRowIndex = row;
      let newActiveColIndex: typeof activeColIndex = col;

      if (key === "Enter") {
        if (direction === BOT_DIRECTIONS.TOP) {
          newActiveRowIndex--;
        } else if (direction === BOT_DIRECTIONS.LEFT) {
          newActiveColIndex--;
        } else if (direction === BOT_DIRECTIONS.RIGHT) {
          newActiveColIndex++;
        } else if (direction === BOT_DIRECTIONS.BOTTOM) {
          newActiveRowIndex++;
        }
      }

      if (newActiveRowIndex < 0 || newActiveRowIndex >= NETWORK_HEIGHT) {
        return;
      }
      if (newActiveColIndex < 0 || newActiveColIndex >= NETWORK_WIDTH) {
        return;
      }

      setActiveRowIndex(newActiveRowIndex);
      setActiveColIndex(newActiveColIndex);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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
          <Box
            active
            rowIndex={activeRowIndex}
            colIndex={activeColIndex}
            direction={direction}
          />
        )}
    </div>
  );
};

export default Network;
