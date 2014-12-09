$(function () {
	$('.rating-enable').click(function () {
	    $('#example-a').barrating();

        $('#example-b').barrating('show', {
        });

        $('#example-c, #example-d').barrating('show', {
	        showValues:true,
            showSelectedRating:false
        });

        $('#example-e').barrating('show', {
     		initialRating:'A',                    
        	showValues:true,
        	showSelectedRating:false,
        	onSelect:function(value, text) {
        		alert('Selected rating: ' + value);
        	}
        });

        $('#example-f').barrating({ 
         	showSelectedRating:false});

        $('#example-g').barrating('show', {
            showSelectedRating:true,
            reverse:true
        });
                
        $('#example-h').barrating({ 
         	showSelectedRating:false,
           	readonly:true});
           	
        $('#example-i').barrating({ 
            showSelectedRating:false});

            $(this).addClass('deactivated');
            $('.rating-disable').removeClass('deactivated');
        });

        $('.rating-disable').click(function () {
       		$('select').barrating('destroy');
        	$(this).addClass('deactivated');
            $('.rating-enable').removeClass('deactivated');
        });

        $('.rating-enable').trigger('click');
});