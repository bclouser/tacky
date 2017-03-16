var d = new Date();


$(function() {
    $('.back').click(function(){
        window.location = "index.html"
    });
    var hour = d.getHours();
    var meridiem = "am";
    console.log("Current hour is " + hour)
    if(hour >= 12)
    {
    	hour -= 12;
    	meridiem = "pm"
    }
    if(hour === 0)
    {
    	hour = 12;
    }
    $(".container .clock .hours").text(hour)
    $(".container .clock .minutes").text(d.getMinutes())
    $(".container .clock .meridiem").text(meridiem)

});