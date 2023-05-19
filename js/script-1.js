function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
var a = 0;
$(window).scroll(function () {
    if (a == 0 && $(window).scrollTop() > 500) {
        $(".count").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
	$(window).ready(function(){
	var team=$('#team-img').height();
		$('.team-bg').height(team);		
});
	$(window).resize(function(){	
		var team=$('#team-img').height();
		$('.team-bg').height(team);
				
});
$('#MS-4').multislider({
			duration: 750,
			interval: 3000
		});

$(window).ready(function(){
$('.small-images img').click(function(){
	var image = $(this).attr('src');
	$('.big-images img').attr('src',image);	
});	
	$('.showing').click(function(){
	var show = $('.showing-content').css('display');
	if(show=='none')
	{	$('.showing-content').css('display','flex');
	 $('.showing i').removeClass('fa-plus');
	  $('.showing i').addClass('fa-minus');
		}
	if(show=='flex')
	{	$('.showing-content').css('display','none');
	 $('.showing i').removeClass('fa-minus');
	  $('.showing i').addClass('fa-plus');	}
});
});

$(document).ready(function () {
    $(".zoomsl").imagezoomsl({
        zoomrange: [3, 3],	
magnifycursor:'pointer',
		scrollspeedanimate: 2 , 
  zoomspeedanimate: 1,
  loopspeedanimate: 1,   
  magnifierspeedanimate: 350,


    });
});

$('#MS-5').multislider({
			duration: 250,
			interval: 0
		});
	function makeTimer() {

	
		var endTime = new Date("16 march 2023 23:59:59 GMT+07:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Day</span>");
			$(".hours").html(hours + "<span>Hour</span>");
			$(".minutes").html(minutes + "<span>Min</span>");
			$(".seconds").html(seconds + "<span>Sec</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);	
	
document.getElementById("color-a").addEventListener("click", function() {
  document.getElementById("color-overlay").style.transform = 'translateX(-0.5px)';
  document.getElementById("color-name").innerHTML = "grey";
  document.getElementById("color-name").style.color = 'grey'
})
document.getElementById("color-b").addEventListener("click", function() {
  document.getElementById("color-overlay").style.transform = 'translateX(45px)';
  document.getElementById("color-name").innerHTML = "BLUE";
  document.getElementById("color-name").style.color = '#457'
})
$(window).ready(function(){
$('.color-a').click(function(){
	var image = $('.color-a img').attr('src');
	$('.big-images img').attr('src',image);
});
$('.color-b').click(function(){
	var image2 = $('.color-b img').attr('src');
	$('.big-images img').attr('src',image2);
	
});	
});
document.getElementById("range-picker").addEventListener("click", function(e) {
  var sizeList = document.getElementById("range-picker").children;
  for (var i = 0; i <= sizeList.length - 1; i++) {
    console.log(sizeList[i].classList);
    if (sizeList[i].classList.contains("active")) {
      sizeList[i].classList.remove("active");
    }
  }
  e.target.classList.add("active");
});
function tang()
{
var sl=document.getElementById('soluong').value;
sl=parseInt(sl,10);
	sl=sl+1
document.getElementById('soluong').value(sl);
}
function tang()
{
var sl=document.getElementById('soluong').value;
sl=parseInt(sl,10);
	sl=sl+1;
document.getElementById('soluong').value=sl;
}
function giam()
{
var sl=document.getElementById('soluong').value;
sl=parseInt(sl,10);
	sl=sl-1;
if(sl<1)
	sl=1;
	else
		document.getElementById('soluong').value=sl;
}
$(window).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    

    
  });
  
  
});
