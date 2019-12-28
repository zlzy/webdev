$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	
	if(event.which == 13){
		var taskToAdd = $(this).val();
		$("#todos").append("<li><span><i class='fas fa-trash'></i></span> " + taskToAdd + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})