$(document).ready(function() {
    $("#login-box").hide();
    $('#create-box').hide();
    
    // submitted login
    $('#submit-login').on('click', function() {
        window.location.replace("index.html");
    });
    
    // clicked button to pull up login
    $('#trigger-login-box').on('click', function() {
        $("#login-create-buttons").hide();
        $("#login-box").show();
    });
    
    // clicked button to pull up create account
    $('#trigger-create').on('click', function() {
        $("#login-create-buttons").hide();
        $("#create-box").show();
    });
    
    // clicked button to go back
    $('.back-to-choice').on('click', function() {
        $("#login-create-buttons").show();
        $("#create-box").hide();
        $("#login-box").hide();
    });
    
});