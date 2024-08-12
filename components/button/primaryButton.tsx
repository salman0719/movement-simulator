import { ReactNode } from "react";
import styles from "./primaryButton.module.css";
import classNames from "classnames";

export default function PrimaryButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>): ReactNode {
  return (
    <button
      className={classNames(styles["btn-primary"], className)}
      {...rest}
    />
  );
}
