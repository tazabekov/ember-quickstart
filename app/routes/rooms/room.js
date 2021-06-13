import Route from '@ember/routing/route';

export default class Room extends Route {
  model(params, transition) {
    return {
      params,
      transition
    };
  }
}
