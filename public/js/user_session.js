/**
 * 
 */
$(function($){
	var id = "";
	console.log(location.href);
	if(sessionStorage.getItem("user_id") != null){
        id = sessionStorage.getItem("user_id");
        if(location.href.split('/')[3] == "login"){
            location.href="/";
        };
	}else {
        if(location.href.split('/')[3] == ""){
        }else if(location.href.split('/')[3] == "login"){
        }else{
            location.href="/";
        }
        //location.href="/";
    }
}(jQuery));