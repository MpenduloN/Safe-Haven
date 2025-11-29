import React from 'react';
import { createRoot } from 'react-dom/client';
import SafeGuardPlatform from './SafeGuardPlatform';
import './index.css'; // optional, if you want to add global styles

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SafeGuardPlatform />);
