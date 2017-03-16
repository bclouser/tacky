
/*
$(function() {
    $('#toggle-one').bootstrapToggle('off');
});
*/

var mqtt = require('mqtt')
var client = {}

$(function() {
    $('#shades').bootstrapToggle({
        on: 'Open',
        off: 'Closed'
    });
})

$(function() {
    $('.back').click(function(){
        window.location = "index.html"
    });
});

$(function(){
    addPwrButtonChangeEvents()
    
    client = mqtt.connect('mqtt://192.168.1.199')
     
    client.on('connect', function () {
        //client.subscribe('presence')
        console.log("Oh man, connected. howbowdah")
    })
     
    client.on('message', function (topic, message) {
      // message is Buffer 
      console.log("Got message")
      console.log(message.toString())
      client.end()
    })
})

function addPwrButtonChangeEvents()
{
    $(".power-button").change( function(event){
        itemValue = 0;
        // Set the new value of the button
        if(event.target.checked){
            itemValue = 1;
        }

        console.log("Passing element name: " + event.target.id); 
        var control_str="toggle"
        client.publish('/bensRoom/light1', "{\"command\":\""+control_str+"\"}")
        
    });
}








