Template.todos.helpers({
	todo : function(){
		return Todos.find({},{sort: {createdAt: -1}});
	}
});