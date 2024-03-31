import React from 'react'
import { IListType } from '../types/list.interface.types';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";
import { list } from "../common/sidebar-list";



const SidebarChild:React.FC = () => {

  return (
    list?.map((item: IListType, index: number) => {
    const Icon: IconType = item.icon;

    return (
      <NavLink
        to={item.route}
        key={item.page}
        className={({ isActive, isPending }) =>
          isActive ? styles.active : styles.pending
        }
      >
        <Icon />
        <p className={styles.navbar_name}>{item.page}</p>
      </NavLink>
    );
  })
  );
}

export default SidebarChild;
