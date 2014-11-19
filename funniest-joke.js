/**
 *
 *
 * @author Sebastian Sandoval <sbsandoval42@gmail.com
 */

function changeText()	{
	// set fColor element to textChange
	var textChange = document.getElementById("fColor");
	var textColor = document.getElementById("fTextColor").value;
	var highlightColor = document.getElementById("fHighlightColor").value;

	// check style color for black
	if(textChange.style.color == "black") {
		// it is black; style to pink
		textChange.style.color			= textChange.style.color = textColor;
		textChange.style.background	= textChange.style.background = highlightColor;
	}	else	{
		// not black; style to black
		textChange.style.color			= textChange.style.color = "black";
		textChange.style.background = textChange.style.background = "#ff00ff";
	}
}

function findReplace()	{
	// get base HTML text
	var textChange = document.getElementById("fText").innerHTML;
	var buttonChange = document.getElementById("fTruth").innerHTML;
	if(buttonChange == "Truth") {
		// search and replace in HTML
		textChange = textChange.replace("a punch line", "ur mom");
		buttonChange = buttonChange.replace("Truth", "Lie");
		// change text in displayed HTML
		document.getElementById("fText").innerHTML = textChange;
		document.getElementById("fTruth").innerHTML = buttonChange;
	}	else	{
		// search and replace in HTML
		textChange = textChange.replace("ur mom", "a punch line");
		buttonChange = buttonChange.replace("Lie", "Truth");
		// change text in displayed HTML
		document.getElementById("fText").innerHTML = textChange;
		document.getElementById("fTruth").innerHTML = buttonChange;
	}
}

function highlightWord()	{
	var textLight = document.getElementById("fTextSelect").value;
	var wordLight = document.getElementById("fWordSelect").value;
	var colorLight = document.getElementById("fWordColor").value;
	var fullString = "<span style=\"background: " + colorLight + ">" + wordLight + "</span>";
	textLight = textLight.replace(wordLight , fullString);
	document.getElementById("fOutput").innerHTML = textLight;
}