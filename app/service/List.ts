import { Service } from 'egg';

export default class List extends Service {

  public async getList(name: string) {
    return `hi, ${name}`;
  }
}