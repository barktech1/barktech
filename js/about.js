$(document).ready(function() {
    $('#logout-btn').on('click', function() {
       window.location.replace("login.html"); 
    });
    
    $('#user-prof').on('click', function() {
       window.location.replace("account.html"); 
    });
    
    $('#logo-and-name-link').on('click', function() {
       window.location.replace("index.html"); 
    });
});