

window.onscroll= function (){ok()
}
function ok (){
	if (document.body.scrollTop>500 || document.documentElement.scrollTop > 500) {
		document.getElementById("navbar").style.background = "red"
	}else{
		document.getElementById("navbar").style.background = "none"
	}
}
	
function oknuon(phanx){
	var b= document.getElementById(phanx).offsetTop;
	 window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: b
    });
	var a=document.getElementsByClassName("nav-link");
	for(i=0;i<a.length;i++){
		
		a[i].className=a[i].className.replace(" active","")
	}
	 event.currentTarget.className += " active";
	 
}
