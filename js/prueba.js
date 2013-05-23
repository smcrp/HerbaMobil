function shareFacebookLike(url)
{
    window.location="http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
}

function shareTwitter(url, text)
{
    window.location = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url);
}

function shareEmail(subject, body)
{
    window.location = "mailto:&subject=" + subject + "&body=" + body;
}

text = "Usando HerbaMobil para Android, puedes bajarlo en: ";
url ="http://www.prueba.com";

$(document).ready(function() {
	$("#test").click(function() {
  		shareTwitter("2", "text");
	});

	$(".socialTwitter").click(function() {
	  	shareTwitter(url, text);
	});

	$(".socialFaceBook").click(function() {
	  	shareFacebookLike(url);
	});

	$(".socialEmail").click(function() {
	  	shareEmail(url, text);
	});               

});