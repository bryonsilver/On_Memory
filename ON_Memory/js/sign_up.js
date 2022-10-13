$(document).ready(function(){
    $("#agree_all_checked").click(function() {
		if($("#agree_all_checked").is(":checked")) $("input[name=chk_box]").prop("checked", true);
		else $("input[name=chk_box]").prop("checked", false);
	});

	$("input[name=chk_box]").click(function() {
		var total = $("input[name=chk_box]").length;
		var checked = $("input[name=chk_box]:checked").length;

		if(total != checked) $("#agree_all_checked").prop("checked", false);
		else $("#agree_all_checked").prop("checked", true); 
	});
})