import React, { ReactNode } from "react";
import styles from "./Box.module.css";

const Box = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: ReactNode;
}) => {
  return (
    <div className={styles.box}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Box;
