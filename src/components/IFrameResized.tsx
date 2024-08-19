"use client";

import IframeResizer from "@iframe-resizer/react";
import React, { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./IFrameResized.module.css";

const IFrameResized = ({ src, className }: { src: string; className: string }) => {
  const iframeRef = useRef(null);
  const [ready, setReady] = useState(false);
  return (
    <>
      {!ready && <div className={styles.loading}>Chargement du contenu</div>}
      <IframeResizer
        license="GPLv3"
        src={src}
        className={classNames(className, { [styles.hidden]: !ready })}
        forwardRef={iframeRef}
        onReady={() => setReady(true)}
      />
    </>
  );
};

export default IFrameResized;
