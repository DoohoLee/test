/**
 * 
 */
var ip= "";
var id = "";
$(document).ready(function(){
	
	
	$.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(json) {
    	//console.log("My public IP address is: ", json.ip);
        ip = json.ip
        console.log(ip);
    });
	$("#btn_login").on('click', function(){
		//console.log($("form[id=frm_login]").serialize());
		$.ajax({
			url : "login",
			type : "POST",
			data : {
				"user_id" : $("#id").val(),
				"user_pwd" : $("#pwd").val(),
				"user_ip" : ip
			},//$("form[id=frm_login]").serialize(),
			success : function(res){
                console.log(res);
				if(res.code == 1){
	    			id = $("#id").val();
	    		    sessionStorage.setItem("user_id", id);
	    		    sessionStorage.setItem("user_profile", res.profile);
	    		    sessionStorage.setItem("type", res.type);
	    		    location.href="3D_Edit";
				}else{
					alert(res.msg);
				}
			}
		});
	});
	
	$('#id').focus(function() {
	      $(this).keydown(function(key) {
	        if(key.keyCode == 13) {
	          $('#pwd').trigger('focus');
	        };
	      });
	    });
	
	$('#pwd').focus(function() {
	      $(this).keydown(function(key) {
	    	  if(key.keyCode == 13) {
	    		  $('#btn_login').trigger('click');
	    	  }
	      });
	});
	
	$('#su_eml').focus(function() {
	      $(this).keydown(function(key) {
	        if(key.keyCode == 13) {
	          $('#su_pwd').trigger('focus');
	        };
	      });
	    });

	    $('#su_pwd').focus(function() {
	      $(this).keydown(function(key) {
	        if(key.keyCode == 13) {
	          $('#submit').trigger('click');
	        };
	      });
	    });

	    $('#fg_eml').focus(function() {
	      $(this).keydown(function(key) {
	        if(key.keyCode == 13) {
	          $('#send').trigger('click');
	          console.log('hi');
	        };
	      });
	    });
	
	$('#signup_now').click(function() {
		$('[form=signin]').attr('style', 'display: none;');
	    $('[form=signup]').attr('style', 'display: block;');
		$('#su_eml, #su_pwd').val('');
		$('p.su_eml').html("이메일 주소를 입력해주세요.");
		$('p.su_pwd').html("비밀번호를 입력해주세요.");
		$('p.su_eml, p.su_pwd, #su_eml, #su_pwd').removeClass('alert_red');
	    $('#su_eml').trigger('focus');
	});
	
	 $('#forgot').click(function() {
	      $('[form=signin], .forgot_sucs').attr('style', 'display: none;');
	      $('[form=forgot], .forgot_main').attr('style', 'display: block;');
	      $('#fg_eml').val('');
	      $('p.fg_eml').html("이메일 주소를 입력해주세요.");
	      $('p.fg_eml, #fg_eml').removeClass('alert_red');
	      $('#fg_eml').trigger('focus');
	    });
	
	/*$('#back').click(function() {
		$('[form=signin]').attr('style', 'display: block;');
	    $('[form=signup]').attr('style', 'display: none;');
	    $('#id, #pwd').val('');
		$('p.user_id').html("이메일 주소를 입력해주세요.");
		$('p.user_pwd').html("비밀번호를 입력해주세요.");
		$('p.user_id, p.user_pwd, #id, #pwd').removeClass('alert_red');
	    $('#id').trigger('focus');
	});*/
	
	$('#back, #fg_back, #fg_ok').click(function() {
	      $('[form=signin]').attr('style', 'display: block;');
	      $('[form=signup], [form=forgot]').attr('style', 'display: none;');
	      $('#id, #pwd').val('');
	      $('p.user_id').html("이메일 주소를 입력해주세요.");
	      $('p.user_pwd').html("비밀번호를 입력해주세요.");
	      $('p.user_id, p.user_pwd, #id, #pwd').removeClass('alert_red');
	      $('.forgot_fail').attr('style', 'visibility: hidden;');
	      $('#id').trigger('focus');
	});
	
	//RedMessage
	var disabled = $('.dvlp'),
	msg = $('.message'),
	on = 'color: rgba(255, 0, 0, 0.5);',
	off = 'color: rgba(255, 0, 0, 0.0);';
	
	disabled.click(function() {
		msg.attr('style', on);
		msg.html('아직 준비중인 기능입니다.');
	});

	$('html').click(function(e) {
		if (msg.attr('style') === on) {
			if(!$(e.target).hasClass('dvlp')) {
				msg.attr('style', off);
				msg.html('');
			};
		};
	});
	
	$('#submit').click(function() {
		
		var getMail = RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/);
		var getCheck = RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/);
	    //console.log(ip);
		//var ip = "";
		var checkPassword = function() {
			//비밀번호가 비어있는지
	        if($("#su_pwd").val() == ""){
	        	$('p.su_pwd').html("비밀번호를 입력해주세요.");
	        	$('p.su_pwd, #su_pwd').addClass('alert_red');
	        	$("#su_pwd").focus();
	        }else if(/(\w)\1\1\1/.test($("#su_pwd").val())) { //4글자 반복
	        	$('p.su_pwd').html("같은 문자를 4번 이상 반복할 수 없습니다.");
	        	$('p.su_pwd, #su_pwd').addClass('alert_red');
	        	$("#su_pwd").focus();
	        }else if (!getCheck.test($("#su_pwd").val())) { //비밀번호가 정규표현식 조건에 맞는지
	        	$('p.su_pwd').html("영문과 숫자 또는 특수문자를 포함한 8~20자리.");
	        	$('p.su_pwd, #su_pwd').addClass('alert_red');
	        	$("#su_pwd").focus();
	        }else { //비밀번호가 맞음
	        	$('p.su_pwd').html("");
	        	$('p.su_pwd, #su_pwd').removeClass('alert_red');
	        	$("#su_pwd").focus();
	        	console.log("??");
	        	sign_ok();
	        }
		};

		if ($("#su_eml").val() == "") { //이메일 주소가 비어있는지
	        $('p.su_eml').html('이메일 주소를 입력해주세요.');
	        $('p.su_eml, #su_eml').addClass('alert_red');
	        $("#su_eml").focus();
	    }else if (!getMail.test($("#su_eml").val())) { //이메일 주소가 정규표현식 조건에 맞는지
	    	console.log("123123");
	        $('p.su_eml').html("이메일 주소를 형식에 맞게 입력해주세요.");
	        $('p.su_eml, #su_eml').addClass('alert_red');
	        $("#su_eml").focus();
	    }else { //이메일 주소가 맞음
            $('p.su_eml').html("");
            $('p.su_eml, #su_eml').removeClass('alert_red');
            $("#su_eml").focus();
            checkPassword();
	    };
	    
	    //var frmData = $("#frm_sign").serialize();
	    //frmData.push({name : "ma_mu_ipaddress", value : "sdfsdf"});
    });
    
    $("#fg_eml").focus(function(){
        $(".forgot_fail").css("visibility", "hidden");
        $(".forgot_message").css("visibility", "hidden");
    });
    
    $("#send").on('click', function(){
        if($("#fg_eml").val() == "" || $("#fg_eml").val() == null){
            $(".forgot_fail").focus();
            alert("이메일을 입력해주세요.");
        }else{
            console.log("else");
            console.log($("#fg_eml").val());
            $.ajax({
                url : "emailSend",
                type : "POST",
                data : {
                    "email" : $("#fg_eml").val()
                },
                success : function(res){
                    console.log("1");
                    if(res.code == 1){
                        $('.forgot_sucs').attr('style', 'display: block;');
	                    $('.forgot_main').attr('style', 'display: none;');
	                    $('.forgot_sucs span').html($('#fg_eml').val());
                    }else{
                        console.log("2");
                        $(".forgot_fail").css("visibility", "inherit");
                        $(".forgot_message").css("visibility", "hidden");
                    }
                }
            })
        }
    });

});

var sign_ok = function(){
    $.ajax({
    	url : "idCheck",
    	type : "POST",
    	data : {
    		"su_eml" : $("#su_eml").val()
    	},
    	success : function(res){
            console.log(res);
    		if(res.code == 1){
                console.log("code 111111");
    			$.ajax({
    				url : "signUp",
    				type : "POST",
    				data : {
    					"su_eml" : $("#su_eml").val(),
    					"su_pwd" : $("#su_pwd").val(),
    					"su_ip" : ip
    				},
    				success : function(res){
    					if(res.code == 1){
    		    			//id = $("input[name=user_id]").val();
    		    		    //sessionStorage.setItem("user_id", id);
    		    		    //sessionStorage.setItem("user_profile", res.profile);
    						alert("회원가입 완료.");
    		    		    location.href="/";
    					}else{
    						alert(res);
    					}
    				}
    			});
    			
    		}else{
    			$("#text_su_eml").html("중복된 이메일 입니다.");
    			$("#su_eml").focus();
    		}
    	}
    });

    
}