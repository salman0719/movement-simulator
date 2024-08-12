"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/button/primaryButton";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Dialog from "../dialog/dialog";
import { DEFAULT_GRID_ROWS, DEFAULT_GRID_COLS } from "@/utilities/constants";
import styles from "./controls.module.css";
import ConfigurationModal from "./configurationModal";

const Controls: React.FC = () => {
  const [showInstructionModal, setShowInstructionModal] =
    useState<boolean>(false);
  const [showConfigurationModal, setShowConfigurationModal] =
    useState<boolean>(false);

  const onInstructionBtnClick = () => {
    setShowInstructionModal(!showInstructionModal);
  };

  const onConfigureBtnClick = () => {
    setShowConfigurationModal(!showConfigurationModal);
  };

  return (
    <div className={classNames(styles.container, "mb-4")}>
      <PrimaryButton onClick={onConfigureBtnClick}>Configure</PrimaryButton>
      <PrimaryButton onClick={onInstructionBtnClick}>
        Instructions
      </PrimaryButton>
      {showInstructionModal &&
        createPortal(
          <Dialog
            onClose={() => {
              setShowInstructionModal(false);
            }}
            bodyClassName={styles["instruction-modal-body"]}
          >
            <h1 className={styles.h1}>Instructions</h1>
            <article className={styles.article}>
              <h2 className={styles.h2}>About</h2>
              <p>
                This is a simulator that allows you to control a bot to move
                around the grid system. Grid dimension by default is{" "}
                {DEFAULT_GRID_ROWS} * {DEFAULT_GRID_COLS}.
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
        )}

      {showConfigurationModal && (
        <ConfigurationModal
          onClose={() => {
            setShowConfigurationModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Controls;
