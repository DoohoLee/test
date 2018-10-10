/**
 * 
 */
$(function($){
    var id = "";
    $(document).ready(function(){
	    if(sessionStorage.getItem("user_id") != null){
            if(sessionStorage.getItem("type") == "A"){
                //Admin_view
                //3D_Edit
                //Sign Out
                $("#admin").css("display", "block");
                $("#signOut").css("display", "block");
                $("#edit").css("display", "block");
                $("#signIn").css("display", "none");
            }else{
                //3D_Edit
                //Sign Out
                $("#admin").css("display", "none");
                $("#signOut").css("display", "block");
                $("#edit").css("display", "block");
                $("#signIn").css("display", "none");
            }
	    }else{
        
            $("#admin").css("display", "none");
            $("#signOut").css("display", "none");
            $("#edit").css("display", "none");
            $("#signIn").css("display", "block");
        }
        
        $("#signOut").on("click", function(){
            sessionStorage.clear();
            location.href = "/";
        });
    });
}(jQuery));