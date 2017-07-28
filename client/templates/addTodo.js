Template.addTodo.events({
	'submit form': function(event){
		event.preventDefault();
		var todoName = $('[name="todoName"]').val();
		var currentList = this._id;
		Todos.insert({
			name: todoName,
			completed: false,
			createdAt: new Date(),
			listId: currentList
		});
		$('[name="todoName"]').val('');
	}
});