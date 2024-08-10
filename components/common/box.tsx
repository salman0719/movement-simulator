import React, { CSSProperties } from "react";
import styles from "./box.module.css";
import classNames from "classnames";

interface ActivePropType {
  active: true;
  rowIndex: number;
  colIndex: number;
}

interface InactivePropType {
  active: false;
}

type PropType = ActivePropType | InactivePropType;

const Box: React.FC<PropType> = (props: PropType) => {
  const { active } = props;

  let rowIndex: ActivePropType["rowIndex"] = 0;
  let colIndex: ActivePropType["colIndex"] = 0;

  if (active) {
    rowIndex = props.rowIndex;
    colIndex = props.colIndex;
  }

  let style: CSSProperties | undefined = undefined;

  if (active) {
    style = {
      position: "absolute",
      top:
        "calc(var(--box-height) * " +
        rowIndex +
        " + var(--gap) * " +
        rowIndex +
        ")",
      left:
        "calc(var(--box-width) * " +
        colIndex +
        " + var(--gap) * " +
        colIndex +
        ")",
    };
  }

  return (
    <div
      style={style}
      className={classNames(styles.container, active && styles.active)}
    >
      {active && <div />}
    </div>
  );
};

export default Box;
