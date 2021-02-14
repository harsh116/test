var openbtn=document.getElementsByClassName("openpanel")[0];
var closebtn=document.getElementsByClassName("closebtn")[0];

function changewidth()
{
	var sidepanel=document.getElementsByClassName("sidepanel")[0];
	sidepanel.style.width="auto";
	sidepanel.style.paddingRight="10px";

}

function closepanel()
{
	var sidepanel=document.getElementsByClassName("sidepanel")[0];
	sidepanel.style.width="0px";
	sidepanel.style.paddingRight="0px";
}

openbtn.addEventListener("click",changewidth);
closebtn.addEventListener("click",closepanel);
