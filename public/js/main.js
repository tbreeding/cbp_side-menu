const HAMBURGER = $("#hamburger");
const NAVBAR = $("nav");
const MENU_ITEMS = $('#menuItems');

$(document).ready(function() {
   
    HAMBURGER.click(function() {
        if (NAVBAR.hasClass("menuOpen")) {
            NAVBAR.addClass("menuClose");
            NAVBAR.removeClass("menuOpen");

            MENU_ITEMS.removeClass("showMenuItems");
            MENU_ITEMS.addClass("hideMenuItems");
            
        } else if($(NAVBAR).hasClass("menuClose")) {
            NAVBAR.removeClass("menuClose");
            NAVBAR.addClass("menuOpen");    
            setTimeout(() => {
                MENU_ITEMS.removeClass("hideMenuItems");
                MENU_ITEMS.addClass("showMenuItems");
            }, 500);        
        } else {
            NAVBAR.addClass("menuOpen");
            setTimeout(() => {
                MENU_ITEMS.removeClass("hideMenuItems");
                MENU_ITEMS.addClass("showMenuItems");
            }, 500);
        }
    })
});