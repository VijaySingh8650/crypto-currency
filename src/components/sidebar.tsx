import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import SidebarChild from "./sidebar-child";

const Sidebar = () => {
  const [hideMenuBurger, setHideMenuBurger] = useState<boolean>(false);

  return (
    <>
      <div className={styles.sidebar_fullScreen}>
        <SidebarChild />
      </div>

      <div
        className={
          hideMenuBurger
            ? styles.sidebar_floatingScreen
            : styles.sidebar_smallScreen
        }
      >
        <div className={styles.showMenuBurger}>
          {hideMenuBurger ? (
            <div className={styles.closeIcon}>
              <IoMdClose onClick={() => setHideMenuBurger(false)} />
            </div>
          ) : (
            <CiMenuBurger onClick={() => setHideMenuBurger(true)} />
          )}
        </div>

        {hideMenuBurger && <SidebarChild />}
      </div>
    </>
  );
};

export default Sidebar;
