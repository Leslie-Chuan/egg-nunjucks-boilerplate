import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.list.index.getList);

  // router.get('/list', controller.list.index.getList)
};
