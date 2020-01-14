import ROUTES from '../constants/routes';

import initRouter from './router';
import privated from './privated';

const routeSwitch = initRouter({
  [ROUTES.ADMIN]: privated,
});

export default async (data) => {
  await routeSwitch(data.ctx.pathname, data.ctx);
};
