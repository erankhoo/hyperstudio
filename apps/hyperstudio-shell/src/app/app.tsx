import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Hyperbooth = React.lazy(() => import('hyperbooth/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/hyperbooth">Hyperbooth</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="hyperstudio-shell" />} />

        <Route path="/hyperbooth" element={<Hyperbooth />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
