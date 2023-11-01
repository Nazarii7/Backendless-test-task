import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './drop_down_list.module.scss';

function DropDownList({ data, handleChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const sortedData = data ? data.sort((a, b) => a.order - b.order) : [];

  return (
    <>
      <div className={styles.container}>
        <button onClick={() => setIsOpen((prev) => !prev)} className={styles.button}>
          _Backendless_List_
        </button>
        {isOpen && (
          <ul className={styles.list}>
            {sortedData &&
              sortedData.map((value) => {
                return (
                  <li className={styles.items} key={value.id} onClick={() => handleChange(value.order)}>
                    <div>
                      <NavLink to={`/${value.id}`}>{value.title}</NavLink>
                    </div>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
}

export { DropDownList };
