Template.addTodo.events({
'submit form' : function(evt){
	evt.preventDefault();
	var todoName = $('[name="todoName"]').val();
	Todos.insert({
		name:todoName,
		completed :false,
		createdAt :new Date()
	});
	$('[name="todoName"]').val('');
}
});