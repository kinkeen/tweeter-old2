

$(document).ready(function() {
    
       
});


  

function countChar(val) {
    var len = val.value.length;
    if (len > 140) {
        val.value = val.value.substring(0, 140);
    } else {
        $('.counter').text(140 - len);
    }
};


 