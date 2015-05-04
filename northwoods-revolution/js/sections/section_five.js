function watchForm(){

	function checkCounter(form, loadCount) {
		if (loadCount === 1) {
			swapContent($(form));			
			return 0;
		} else {
			return 1;
		}
	};

	function swapContent(form){
		form.remove();
		$("#contact-form-container")
			.append('<div class="submitted-confirmation"><div class="contact-submission-text"><h1 class="page-header">Thanks!</h1><p>We\'ll be in touch with you soon!</p></div></div>')
			.delay(5000)
			.find('.submitted-confirmation')
			.fadeOut(300, function(){
				$("#contact-form-container").append('<iframe src="https://northwoodsrevolution.wufoo.com/forms/z1m6elu41wj15ac/" height="100%" width="100%" frameborder="0"></iframe>');
				watchForm();
			});
	};

	$(document).ready(function(){
		var loadCount = 0;
		$('#contact-form-container iframe').load(function(){
			loadCount += checkCounter(this, loadCount);
		});
	});

};

watchForm();