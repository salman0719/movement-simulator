"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/button/primaryButton";
import classNames from "classnames";
import styles from "./controls.module.css";
import ConfigurationModal from "./configurationModal";
import InstructionModal from "./instructionModal";

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
      {showInstructionModal && (
        <InstructionModal
          onClose={() => {
            setShowInstructionModal(false);
          }}
        />
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
