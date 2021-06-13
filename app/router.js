import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rooms', function(){
    this.route('room', { path: '/:room_id' });
    this.route('index', { path: '/' });
  });
});

export default Router;
