import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.jsx';

const DummyTable = lazy(() => import('./components/tabs/_tabs_table/_tabs_table.jsx'));
const DummyChart = lazy(() => import('./components/tabs/_tabs_chart/_tabs_chart.jsx'));
const DummyList = lazy(() => import('./components/tabs/_tabs_list/_tabs_list.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dummyTable" element={<DummyTable />} />
        <Route path="/dummyChart" element={<DummyChart />} />
        <Route path="/dummyList" element={<DummyList />} />
      </Route>
    </Routes>
  );
}
export default App;
