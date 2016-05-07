//#slider div element
var div = "<div id='slider'></div>";

//anchors for photo forward and photo back
var photoForward = "<a class='photoForward'> <p> > </p> </a>";
var photoBackward = "<a class='photoBackward'> <p> < </p> </a>";

var photoDetails = [
  {
    location: "img/arrow.jpg",
    alt: "Picture of arrow marking on a cycle path"
  },
  {
    location: "img/cycle_lane.jpg",
    alt: "Picture of a fish and chips take away sign"
  },
  {
    location: "img/fish_n_chips.jpg",
    alt: "Picture of arrow marking on a cycle path"
  },
  {
    location: "img/pipe.jpg",
    alt: "Picture of a rusty pipe and junction box on an outdoor wall"
  },
    {
    location: "img/rubbish.jpg",
    alt: "Picture of a pile of rubbish"
  },
    {
    location: "img/wing.jpg",
    alt: "Picture of a planes wing through cabin window from inside plane."
  },
    {
    location: "img/type_building.jpg",
    alt: "Picture of a building with of fashioned type painted across them."
  },
    {
    location:"img/leaves.jpg",
    alt: "Picture of autumn leaves on grass."
  },
    {
    location: "img/christmas_tree.jpg",
    alt: "Picture of close up christmas tree pines."
  },
    {
    location: "img/road.jpg",
    alt: "Picture of a road side curb and double yellow lines."
  },
    {
    location: "img/tables.jpg",
    alt: "Picture of tables and chairs outside a cafe with a black ashtray on one of the tables."
  },
    {
    location: "img/chairs.jpg",
    alt: "Picture of tables and chairs in a row outside a resturant."
  },
    {
    location: "img/bridge.jpg",
    alt: "Picture of a bridge walkway with close up view of the pillars."
  },
    {
    location: "img/leaves_on_ground.jpg",
    alt: "Picture of a few leaves on a slabbed pavement."
  },
];

 var populateSlider = function() {
  for (i = 0; i < photoDetails.length; i += 1 ) {
    var image = "<img src='" + photoDetails[i].location + "'";
    image += " alt='" + photoDetails[i].alt + "'";
    image += ">";
    $("#slider").append(image);
  };
  
};

var showTest = function() {
    var findClassShow = $("#slider img").hasClass("show");
    if (findClassShow === false) {
        $("#slider img:first-of-type").addClass("show");
    }
}

var showTestBackward = function() {
    var findClassShow = $("#slider img").hasClass("show");
    if (findClassShow === false) {
        $("#slider img:last-of-type").addClass("show");
    }
}

//when image or forward arrow is clicked
var forward = function() {
    $(".show").removeClass("show").next().addClass("show");
    showTest();
}
    //apply show class to next img child
    //remove show class from first img child and apply right class

var backward = function() {
    $(".show").removeClass("show").prev().addClass("show");
    showTest;
    
}

//Create #slider div and amend appearance with some basic css properties.

$("#content").append(div);

$("#slider").css({
  "background": "rgba(0,0,0,)",
  "height": "calc(100vh - 68px - 88px)",
//  "max-height": "100%",
  "width": "90%",
  "margin": "auto",
  "max-width": "700px",
  "position": "relative",
  "overflow": "hidden",
//  "border": "2px solid white",
  "border-radius": "20px",
  
});



//append photo to slider div

populateSlider();

//append anchors into div
$("#slider").prepend(photoForward).prepend(photoBackward);

//first showtext upon load
showTest();



//check to see if class show is present
    //if not remove class of right from all img's
    //set show class to first img
$("#slider img").click(function() {
    showTest();
    console.log("slider click");
    forward();
    console.log("forward");
    showTest();
})

$(".photoForward").click(function() { 
    showTest();
    console.log("forward click");
    forward();
    console.log("forward");
    showTest();
})

$(".photoBackward").click(function() { 
    
    console.log("backward click");
    backward();
    console.log("backward");
    showTestBackward();
    
})


 $(window).on("keydown", function(e) {
        console.log(e.which)
        if (e.which === 32 || e.which === 39) {
            showTest();
            console.log("forward click");
            forward();
            console.log("forward");
            showTest();
        } else if (e.which === 37) {
            console.log("backward click");
            backward();
            console.log("backward");
            showTestBackward();
        }
    });

$("#slider").on("swipeleft", function(e) {
//  $(this).hide();
    console.log("swipeleft");
    showTest();
    console.log("forward click");
    forward();
    console.log("forward");
    showTest();
});
//$(window).on("swiperight", function(){
////  $(this).hide();
//    console.log("swiperight");
//    console.log("backward click");
//    backward();
//    console.log("backward");
//    showTestBackward();
//});