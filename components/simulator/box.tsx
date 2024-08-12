import React, { CSSProperties } from "react";
import styles from "./box.module.css";
import classNames from "classnames";
import { BOT_DIRECTIONS, DEFAULT_BOT_DIRECTION } from "@/utilities/constants";

interface ActivePropType {
  active: true;
  rowIndex: number;
  colIndex: number;
  direction: BOT_DIRECTIONS;
}

interface InactivePropType {
  active: false;
}

type PropType = ActivePropType | InactivePropType;

const Box: React.FC<PropType> = (props: PropType) => {
  const { active } = props;

  let rowIndex: ActivePropType["rowIndex"] = 0;
  let colIndex: ActivePropType["colIndex"] = 0;
  let direction: ActivePropType["direction"] = DEFAULT_BOT_DIRECTION;

  if (active) {
    rowIndex = props.rowIndex;
    colIndex = props.colIndex;
    direction = props.direction;
  }

  let style: CSSProperties | undefined = undefined;

  if (active) {
    style = {
      top: `calc(var(--box-height) * ${rowIndex} + var(--gap) * ${rowIndex})`,
      left: `calc(var(--box-width) * ${colIndex} + var(--gap) * ${colIndex})`,
    };
  }

  return (
    <div
      style={style}
      className={classNames(
        styles.container,
        active && styles.active,
        active && direction && styles["active-border-" + direction],
      )}
    >
      {active && <div />}
    </div>
  );
};

export default Box;
