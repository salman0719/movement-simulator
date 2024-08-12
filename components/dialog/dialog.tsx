import classNames from "classnames";
import { DialogHTMLAttributes } from "react";
import styles from "./dialog.module.css";

export type DialogPropType = Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose" | "open"
> & {
  bodyClassName?: string;
  onClose?: () => void;
};

const Dialog: React.FC<DialogPropType> = ({
  className,
  children,
  bodyClassName,
  onClose,
  ...rest
}: DialogPropType) => {
  return (
    <dialog className={classNames(styles.container, className)} {...rest}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={classNames(styles.body, bodyClassName)}>
        <svg
          className={styles.close}
          height="14"
          viewBox="0 0 14 14"
          width="14"
          onClick={onClose}
        >
          <path d="M0 7 14 7M7 0 7 14" strokeLinecap="square"></path>
        </svg>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
