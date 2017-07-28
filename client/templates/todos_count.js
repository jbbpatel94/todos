Template.todosCount.helpers({
	'totalTodos': function(){
		return Todos.find().count();
	},
	'completedTodos': function(){
		return Todos.find({ completed: true }).count();
	}
});