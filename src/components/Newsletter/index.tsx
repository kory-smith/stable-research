import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function Newsletter(): JSX.Element {
  return (
    <section className={styles.root}>
      <div className={clsx("container", styles.wrapper)}>
        <div>
          <h2 className={styles.heading}>Subscribe for updates</h2>
          <div className={styles.subheading}>
            By subscribing, you agree with our <Link href="/terms">Terms</Link>{" "}
            and <Link href="/privacy">Privacy Policy</Link>.
          </div>
        </div>
        <form
          action="https://stableresearch.xyz/subscription/form"
          method="post"
          target="_blank"
          className={styles.form}
        >
          <input
            placeholder="Email address"
            type="email"
            name="email"
            className={clsx(styles.input, "button")}
          />
          <input
            type="hidden"
            name="l"
            value="adbdd93a-f80a-4639-8e1e-1aa6cbfaa91f"
          />
          <input
            type="submit"
            value="Subscribe"
            className={clsx(styles.button, "button button--primary")}
          />
        </form>
      </div>
    </section>
  );
}
