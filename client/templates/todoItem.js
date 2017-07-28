Template.todoItem.events({
	'click .delete-todo' :function(evt){
		evt.preventDefault();
		var documentId = this._id;
		var confirm = window.confirm("Delete this task?");
		if(confirm){
			Todos.remove({ _id: documentId });
		}
	},
	'keyup [name=todoItem]': function(event){
		if(event.which == 13 || event.which == 27){
			$(event.target).blur();
		} else {
			var documentId = this._id;
			var todoItem = $(event.target).val();
			Todos.update({ _id: documentId }, {$set: { name: todoItem }});
		}
	}
});