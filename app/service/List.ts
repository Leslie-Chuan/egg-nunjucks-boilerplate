import { Service } from 'egg';

export default class List extends Service {
  public async getList() {
    const { baseUrl } = this.config;
    const { curl } = this.ctx;
    const resp = await curl(baseUrl, {
      method: 'POST',
      data: {
        api: '/api/l/owresource/getListRecommend',
        params: {
          gameId: 10000147,
          collectionIds: '322,323,324,325',
          page: 0,
          size: 50,
          orderCode: 1,
          orderDesc: true,
        },
      },
      dataType: 'JSON'
    });
    console.info('resp:', resp);
    return resp;
  }
}
