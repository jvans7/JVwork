sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	startSlider();

});
//count how many images
function startSlider(){
	count = $('#slider > img').size();
		//loop through images
	loop = setInterval(function(){
		//After four to restart at 1
		if(sliderNext > count){
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#'+sliderNext).fadeIn(300);
		//to continue moving after 2
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;

		}, 3000)
}

function prev(){
	newSlide = sliderInt -1;
	showSlide(newSlide);

}

function next(){
	newSlide = sliderInt +1;
	showSlide(newSlide);

}
//stops the loop
function stopLoop(){
	window.clearInterval(loop);
}
//copy and paste the loop and edit information 
function showSlide(id){
	stopLoop();
	if(id > count){
			id = 1;
		}else if(id < 1){
			id = count;

		}

	$('#slider > img').fadeOut(300);
	$('#slider > img#'+id).fadeIn(300);

	sliderInt = id;
	sliderNext = id + 1;
	startSlider();

}
//stop when mouse is over the image and starts running when mouse is off
$('#slider > img').hover(
function(){
	stopLoop();
},
function(){
	startSlider();

	}
)