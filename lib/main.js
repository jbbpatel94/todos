Todos = new Mongo.Collection('todos');
Lists = new Meteor.Collection('lists');
Router.route('/register');
Router.route('/login');
Router.route('/', {
    name: 'home',
    template: 'home'
});
Router.configure({
    layoutTemplate: 'main'
});