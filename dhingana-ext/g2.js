/** Author: TJ Aditya **/
/** Version: 0.2      **/

var data_module = $('#hidden-entity-data').attr('data-module');
var flag = false;
var i = 4;

$('div.right-header ul.nav').css('width', '366px');
var menub = $('<button/>', {
	'onClick'   : "location.reload();",
	'class'     : 'btn btn-blue',
	'html'		: "<b style='font-size:11px;'>DD It!</b>"
});
var listi = $('<li/>', { 
	'class' : 'nav-item'
});
$(listi).append(menub);
$('div.right-header ul.nav').prepend(listi);

if(data_module == 'top songs') {

	var data_type = $('#hidden-entity-data').attr('data-type');
	if(data_type == 'song') {
		$('div.actions').css('width', '270px');
		$('ul.listing-rows li.listing-row').each(function(index, ele) {
			var data_id = $(ele).attr('data-id');
			
			$.get("http://www.dhingana.com/xhr/getSongDetails", {id: data_id, count: '1'}, function(data){
					
					var tmp1 = '';
					var url = data.songs[data_id]['Streams']['Mp3'];
					var bb = $('<button/>', {
								'onClick'   : "window.open('" + url + "', '_blank');",
								'class'     : 'btn btn-blue',
								'html'		: "<i><b>Download</b></i>"
					});
					$(ele).children().eq(i-1).children().eq(4).after(bb);
					var tmp3 = 2345;
					
			}, "json");
				
		});
	}
}
else {
	if(data_module == 'playlist details') {	i -= 1; }
	$('div.actions').css('width', '320px');
	$('ul.listing-rows li.listing-row').each(function(index, ele) {
		var data_id = $(ele).attr('data-id');
		
		$.get("http://www.dhingana.com/xhr/getSongDetails", {id: data_id, count: '1'}, function(data){
				
				var tmp1 = '';
				var url = data.songs[data_id]['Streams']['Mp3'];
				var bb = $('<button/>', {
							'onClick'   : "window.open('" + url + "', '_blank');",
							'class'     : 'btn btn-blue',
							'html'		: "<i><b>Download</b></i>"
				});
				$(ele).children().eq(i).children().eq(4).after(bb);
				var tmp3 = 2345;
				
		}, "json");
			
	});

}


