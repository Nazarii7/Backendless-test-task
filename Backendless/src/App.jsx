import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dummyTable" />
        <Route path="/dummyChart" />
        <Route path="/dummyList" />
      </Route>
    </Routes>
  );
}
export default App;
