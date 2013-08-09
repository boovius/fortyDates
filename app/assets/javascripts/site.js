$(function(){
	$('.box').on('click', function(){
		var clicked_box = $(this);
		path = clicked_box.attr('id');
		console.log(path);

		$.ajax({
			type: "GET",
			url: '../pieces/index',
			data: {term: path },
			success: function(html){
				clicked_box.after(html);
			}
		})


	})

})