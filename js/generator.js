$('#target').submit(function() {
	// Get the value from the different input
	var title = $('input:radio[name=title]:checked').val();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var position = $('#position').val();
	var telOffice = $('#tel-office').val();
	var mobile = $('#mobile').val();

	// Prepare the HTML String (signature)
	var output = title + '. <strong>' + lastname + '</strong> ' + firstname + ' &#8226; '
			+ position + ' &#8226; <a href="http://www.mycompany.com">My Company.com</a><br>'
			+ '<strong>o</strong> ' + telOffice + ' &#8226; <strong>m</strong> ' + mobile;

	// Write the output to both the text area field and the WYSIWYG paragraph
	$('#result-html').html(output);
	$('#result-wysiwyg').html(output);

	// Prevent the form to be submitted (we don't need it)
	return false;
});