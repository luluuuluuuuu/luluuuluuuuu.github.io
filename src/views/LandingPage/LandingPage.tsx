import type { ReactElement } from 'react';
import { RandomNumber } from '~/components/RandomNumber';
import { TopBar } from '~/components/TopBar';
import { randomDefaults } from '~/config/constants';
import reactLogo from './react.svg';

export function LandingPage(): ReactElement {
  return (
    <div className="center">
      <TopBar />
      <img src={reactLogo} alt="React Logo" />
      <br />
      Hello World{' '}
      <RandomNumber min={randomDefaults.MIN} max={randomDefaults.MAX} />
    </div>
  );
}
