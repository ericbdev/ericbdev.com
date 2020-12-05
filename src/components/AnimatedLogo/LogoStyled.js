import styled from 'styled-components';
import { mix } from 'polished';
import colors from '../../styles/colors';
import Logo from '../Logo/NavigationLogo';

export const LogoStyled = styled(Logo).attrs(({ dX, dY, pct }) => ({
  className: pct > 0.5 && 'logo--short',
  style: {
    transform: `translate3d(${dX}px, ${dY}px, 0)`,
    color: mix(pct, colors.secondary.base, colors.neutral.darkest),
  },
}))`
  position: fixed;
  z-index: 100;
  transition: transform 0.3s ease;

  path {
    transform-origin: 50% 50%;
    transition: transform 300ms ease-in-out, opacity 200ms linear;
  }

  &.logo--short {
    .logo--letter-1,
    .logo--letter-2,
    .logo--letter-3,
    .logo--letter-4 {
      transform: translateX(60px);
      opacity: 0;
    }

    .logo--letter-5,
    .logo--letter-6,
    .logo--letter-7,
    .logo--letter-8 {
      transform: translateX(-158px);
    }
  }

  &:hover {
    color: currentColor;
  }
`;
