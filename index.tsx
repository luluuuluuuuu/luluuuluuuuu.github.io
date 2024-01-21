/* istanbul ignore file */
import '~/styles/index.scss';
import { StrictMode } from 'react';
import reactDOMClient from 'react-dom/client';
import { LandingPage } from '~/views/LandingPage';

const rootContainer = document.createElement('div');
document.body.appendChild(rootContainer);
const root = reactDOMClient.createRoot(rootContainer);
root.render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
