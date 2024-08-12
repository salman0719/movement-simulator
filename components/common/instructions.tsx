"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/button/primaryButton";
import styles from "./instructions.module.css";
import { createPortal } from "react-dom";
import classNames from "classnames";

const Instructions: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={classNames(styles.container, "mb-4")}>
      <PrimaryButton>Configure</PrimaryButton>
      <PrimaryButton onClick={onClick}>Instructions</PrimaryButton>
      {showModal && createPortal(<div hidden>I am a modal</div>, document.body)}
    </div>
  );
};

export default Instructions;
