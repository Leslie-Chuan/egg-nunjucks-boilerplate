import { Controller } from 'egg';

export default class ListController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.list.getList('fuk');
  }
  async getList() {
    const { ctx } = this;
    // const res = await ctx.service.list.getList();
    console.log('res:', res);
    // await ctx.render('list/index.tpl', {name: 'view test'});
  }
}
