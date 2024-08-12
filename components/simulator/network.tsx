"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./network.module.css";
import { BOT_DIRECTIONS, DEFAULT_BOT_DIRECTION } from "@/utilities/constants";
import Box from "./box";
import { useSimulatorContext } from "@/utilities/simulatorProvider";

const Network: React.FC = () => {
  const { gridRows, gridCols } = useSimulatorContext();

  const [activeRowIndex, setActiveRowIndex] = useState<number>(0);
  const [activeColIndex, setActiveColIndex] = useState<number>(0);
  const [direction, setDirection] = useState<BOT_DIRECTIONS>(
    DEFAULT_BOT_DIRECTION,
  );

  const currentValueRef: {
    row: typeof activeRowIndex;
    col: typeof activeColIndex;
    direction: typeof direction;
    gridRows: typeof gridRows;
    gridCols: typeof gridCols;
  } = {
    row: activeRowIndex,
    col: activeColIndex,
    direction,
    gridRows,
    gridCols,
  };
  const valueRef = useRef<typeof currentValueRef>(currentValueRef);
  valueRef.current = currentValueRef;

  useEffect(() => {
    activeRowIndex > gridRows && setActiveRowIndex(0);
    activeColIndex > gridCols && setActiveColIndex(0);
  }, [gridRows, gridCols, activeColIndex, activeRowIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { key, ctrlKey } = e;

      if (
        !["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Enter"].includes(
          key,
        )
      ) {
        return;
      }

      const value = valueRef.current;
      const { row, col, direction, gridRows, gridCols } = value;

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
      } else {
        if (key === "ArrowLeft") {
          if (ctrlKey || direction === BOT_DIRECTIONS.LEFT) {
            newActiveColIndex--;
          }
          setDirection(BOT_DIRECTIONS.LEFT);
        } else if (key === "ArrowUp") {
          if (ctrlKey || direction === BOT_DIRECTIONS.TOP) {
            newActiveRowIndex--;
          }
          setDirection(BOT_DIRECTIONS.TOP);
        } else if (key === "ArrowRight") {
          if (ctrlKey || direction === BOT_DIRECTIONS.RIGHT) {
            newActiveColIndex++;
          }
          setDirection(BOT_DIRECTIONS.RIGHT);
        } else if (key === "ArrowDown") {
          if (ctrlKey || direction === BOT_DIRECTIONS.BOTTOM) {
            newActiveRowIndex++;
          }
          setDirection(BOT_DIRECTIONS.BOTTOM);
        }
      }

      if (newActiveRowIndex < 0 || newActiveRowIndex >= gridRows) {
        return;
      }
      if (newActiveColIndex < 0 || newActiveColIndex >= gridCols) {
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
      {new Array(gridRows).fill(0).map((_, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {new Array(gridCols).fill(0).map((_, colIndex) => {
              return <Box key={colIndex} active={false} />;
            })}
          </div>
        );
      })}
      {activeRowIndex > -1 &&
        activeRowIndex < gridRows &&
        activeColIndex > -1 &&
        activeColIndex < gridCols && (
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
