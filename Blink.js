function blink()
{
	var div = document.getElementById("video");
	if (div.style.visibility=="hidden")
	{
		div.style.visibility="visible";
	}
	else
	{
		div.style.visibility="visible";
	}
}

// blink every 500 ms

window.setInterval(blink, 500);
