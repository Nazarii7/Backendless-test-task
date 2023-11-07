import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DropDownList } from '../drop_down_list/drop_down_list.jsx';

import styles from './layout.module.scss';

import data from '../../tabs.json';

function Layout() {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.substring(1);
    const tab = data.find((item) => item.id === id);
    if (tab) {
      setTabValue(tab.order);
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <DropDownList value={tabValue} handleChange={(value) => setTabValue(value)} data={data} />
      <main className={styles.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export { Layout };
