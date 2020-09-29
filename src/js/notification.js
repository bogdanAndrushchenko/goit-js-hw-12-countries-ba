import {
  error,
  defaultModules
} from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

import {
  defaults
} from '@pnotify/core';


defaults.styling = 'material';

defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});




export default error;
