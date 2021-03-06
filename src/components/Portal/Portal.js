// https://blog.logrocket.com/learn-react-portals-by-example/
// maybnes: https://medium.com/@jc_perez_ch/dynamic-react-portals-with-hooks-ddeb127fa516

import { createPortal } from 'react-dom';

import { SELECTORS_MAIN } from '../../config/domSelectors';

const mount = document.getElementById(SELECTORS_MAIN.SITE_PORTAL);
const Portal = ({ children }) => createPortal(children, mount);

export default Portal;
