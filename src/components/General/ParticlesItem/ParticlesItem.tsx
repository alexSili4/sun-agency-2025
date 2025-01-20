import { FC, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';

const ParticlesItem: FC = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'attract',
          },
        },
        modes: {
          attract: {
            distance: 100,
            duration: 0.2,
            speed: 5,
          },
        },
      },
      particles: {
        color: {
          value: '#FFCD33',
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 800,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.1, max: 1 },
        },
      },
      detectRetina: true,
      style: { width: '100%', height: '100%' },
    }),
    []
  );

  return init && <Particles id='tsparticles' options={options} />;
};

export default ParticlesItem;
