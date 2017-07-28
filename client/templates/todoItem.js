Template.todoItem.events({
	'click .delete-todo' :function(evt){
		evt.preventDefault();
		var documentId = this._id;
		var confirm = window.confirm("Delete this task?");
		if(confirm){
			Todos.remove({ _id: documentId });
		}
	}
});