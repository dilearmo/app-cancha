/* global $ */
/* global toastr */
/* global localStorage */

$(document).ready(function() {
    $(".button-collapse").sideNav();
    
    toastr.options = {
        "progressBar": true,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
    }
    
    
});