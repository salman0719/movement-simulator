import React from "react";
import styles from "./input.module.css";
import classNames from "classnames";

interface PropType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null | undefined | false;
}

const Input: React.FC<PropType> = ({ label, error, ...rest }: PropType) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...rest}
        className={classNames(
          styles.input,
          rest.className,
          error && styles["error-input"],
        )}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
