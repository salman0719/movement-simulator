import { createPortal } from "react-dom";
import Dialog, { DialogPropType } from "../dialog/dialog";
import styles from "./instructionModal.module.css";
import { DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS } from "@/utilities/constants";

interface PropType {
  onClose: DialogPropType["onClose"];
}

const InstructionModal: React.FC<PropType> = ({ onClose }: PropType) => {
  return createPortal(
    <Dialog onClose={onClose} bodyClassName={styles.body}>
      <h1 className={styles.h1}>Instructions</h1>
      <article className={styles.article}>
        <h2 className={styles.h2}>About</h2>
        <p>
          This is a simulator that allows you to control a bot to move around
          the grid system. Grid dimension by default is {DEFAULT_GRID_ROWS} *{" "}
          {DEFAULT_GRID_COLS}.
        </p>
      </article>
      <article className={styles.article}>
        <h2 className={styles.h2}>Move</h2>
        <p>
          You can move the robot using combination of direction arrows, Ctrl &
          Enter keys.
          <br />
          You can press the direction arrows (up, down, left, right) to change
          the direction of the robot. If the robot is already facing that
          direction, it will move one step forward on that direction.
          <br />
          You can press Ctrl + Direction Keys together to move the robot
          forcibly in one direction regardless of its previous direction.
        </p>
      </article>
      <article className={styles.article}>
        <h2 className={styles.h2}>Configuration</h2>
        <p>
          Click on the &quot;Configure&quot; button to change the grid
          dimensions.
          <br />
          <small>
            <i>
              <b>N.B.</b> More control configuration to follow.
            </i>
          </small>
        </p>
      </article>
    </Dialog>,
    document.body,
  );
};

export default InstructionModal;
