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
Router.route('/list/:_id', {
    template: 'listPage',
    data: function(){
        var currentList = this.params._id;
        return Lists.findOne({ _id: currentList });
    }
});