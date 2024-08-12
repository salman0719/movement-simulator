import classNames from "classnames";
import { DialogHTMLAttributes, MouseEventHandler } from "react";
import styles from "./dialog.module.css";

type PropType = Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose" | "open"
> & {
  bodyClassName?: string;
  onClose?: MouseEventHandler;
};

const Dialog: React.FC<PropType> = ({
  className,
  children,
  bodyClassName,
  onClose,
  ...rest
}: PropType) => {
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
          <path d="M0 7 14 7M7 0 7 14" stroke-linecap="square"></path>
        </svg>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
