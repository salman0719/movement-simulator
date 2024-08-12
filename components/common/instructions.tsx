"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/button/primaryButton";
import styles from "./instructions.module.css";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Dialog from "../dialog/dialog";
import { NETWORK_HEIGHT, NETWORK_WIDTH } from "@/utilities/constants";

const Instructions: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={classNames(styles.container, "mb-4")}>
      <PrimaryButton>Configure</PrimaryButton>
      <PrimaryButton onClick={onClick}>Instructions</PrimaryButton>
      {showModal &&
        createPortal(
          <Dialog
            onClose={() => {
              setShowModal(false);
            }}
            bodyClassName={styles["instruction-modal-body"]}
          >
            <h1 className={styles.h1}>Instructions</h1>
            <article className={styles.article}>
              <h2 className={styles.h2}>About</h2>
              <p>
                This is a simulator that allows you to control a bot to move
                around the grid system. Grid dimension by default is{" "}
                {NETWORK_HEIGHT} * {NETWORK_WIDTH}.
              </p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.h2}>Move</h2>
              <p>
                You can move the robot using combination of direction arrows,
                Ctrl & Enter keys.
                <br />
                You can press the direction arrows (up, down, left, right) to
                change the direction of the robot. If the robot is already
                facing that direction, it will move one step forward on that
                direction.
                <br />
                You can press Ctrl + Direction Keys together to move the robot
                forcibly in one direction regardless of its previous direction.
                <br />
                Aforementioned behaviors are set by default. You will be able to
                modify some of the configurations on a limited scope.
              </p>
            </article>
            <article className={styles.article}>
              <h2 className={styles.h2}>Configuration</h2>
              <p>
                Click on the &quot;Configure&quot; button (placed above the
                grids) to modify available controls.
              </p>
            </article>
          </Dialog>,
          document.body,
        )}
    </div>
  );
};

export default Instructions;
