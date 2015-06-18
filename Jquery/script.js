//function for drop-down menu
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        $("#initial").text( $("#initial").text() == 'Color Menu' ? "Hide" : "Color Menu");
    });
});



// Function for changing body / background color back to default
var defaultColor = function(a){
    $(a).hover(function () {
        $("body").css("background-color", "white");
        $("#first-header-word").css("color", "orangered");
        $("#second-header-word").css("color", "indigo");
    });
};

defaultColor("body");
defaultColor(".wrapper");



// Function for changing background color and h1 when specific box is hovered over

var hoverColor = function(a, b){
    $(a).click(function () {
        $("body").css("background-color", b);
        $("h1").css("color", b);
    });

};


hoverColor(".teal", "teal");
hoverColor(".blue", "blue");
hoverColor(".aqua", "aqua");
hoverColor(".navy", "navy");
hoverColor(".green", "green");
hoverColor(".olive", "olive");
hoverColor(".lime", "lime");
hoverColor(".yellow", "yellow");
hoverColor(".fuchsia", "fuchsia");
hoverColor(".red", "red");
hoverColor(".purple", "purple");
hoverColor(".maroon", "maroon");
hoverColor(".silver", "silver");
hoverColor(".gray", "gray");
hoverColor(".grey", "grey");
hoverColor(".black", "black");
hoverColor(".aliceblue", "aliceblue");
hoverColor(".antiquewhite", "antiquewhite");
hoverColor(".aquamarine", "aquamarine");
hoverColor(".azure", "azure");
hoverColor(".beige", "beige");
hoverColor(".bisque", "bisque");
hoverColor(".blanchedalmond", "blanchedalmond");
hoverColor(".blueviolet", "blueviolet");
hoverColor(".brown", "brown");
hoverColor(".burlywood", "burlywood");
hoverColor(".cadetblue", "cadetblue");
hoverColor(".chartreuse", "chartreuse");
hoverColor(".chocolate", "chocolate");
hoverColor(".coral", "coral");
hoverColor(".cornflowerblue", "cornflowerblue");
hoverColor(".cornsilk", "cornsilk");
hoverColor(".crimson", "crimson");
hoverColor(".cyan", "cyan");
hoverColor(".darkblue", "darkblue");
hoverColor(".darkcyan", "darkcyan");
hoverColor(".darkgoldenrod", "darkgoldenrod");
hoverColor(".darkgray", "darkgray");
hoverColor(".darkgreen", "darkgreen");
hoverColor(".darkkhaki", "darkkhaki");
hoverColor(".darkmagenta", "darkmagenta");
hoverColor(".darkolivegreen", "darkolivegreen");
hoverColor(".darkorange", "darkorange");
hoverColor(".darkorchid", "darkorchid");
hoverColor(".darkred", "darkred");
hoverColor(".darksalmon", "darksalmon");
hoverColor(".darkseagreen", "darkseagreen");
hoverColor(".darkslateblue", "darkslateblue");
hoverColor(".darkturquoise", "darkturquoise");
hoverColor(".darkviolet", "darkviolet");
hoverColor(".deepskyblue", "deepskyblue");
hoverColor(".dimgray", "dimgray");
hoverColor(".dodgerblue", "dodgerblue");
hoverColor(".firebrick", "firebrick");
hoverColor(".floralwhite", "floralwhite");
hoverColor(".forestgreen", "forestgreen");
hoverColor(".gainsboro", "gainsboro");
hoverColor(".ghostwhite", "ghostwhite");
hoverColor(".gold", "gold");
hoverColor(".goldenrod", "goldenrod");
hoverColor(".greenyellow", "greenyellow");
hoverColor(".honeydew", "honeydew");
hoverColor(".hotpink", "hotpink");
hoverColor(".indianred", "indianred");
hoverColor(".indigo", "indigo");
hoverColor(".ivory", "ivory");
hoverColor(".khaki", "khaki");
hoverColor(".lavender", "lavender");
hoverColor(".lavenderblush", "lavenderblush");
hoverColor(".lawngreen", "lawngreen");
hoverColor(".lemonchiffon", "lemonchiffon");
hoverColor(".lightblue", "lightblue");
hoverColor(".lightcoral", "lightcoral");
hoverColor(".lightcyan", "lightcyan");
hoverColor(".lightgoldenrodyellow", "lightgoldenrodyellow");
hoverColor(".lightgray", "lightgray");
hoverColor(".lightgreen", "lightgreen");
hoverColor(".lightpink", "lightpink");
hoverColor(".lightsalmon", "lightsalmon");
hoverColor(".lightseagreen", "lightseagreen");
hoverColor(".lightskyblue", "lightskyblue");
hoverColor(".lightslategray", "lightslategray");
hoverColor(".lightsteelblue", "lightsteelblue");
hoverColor(".lightyellow", "lightyellow");
hoverColor(".limegreen", "limegreen");
hoverColor(".linen", "linen");
hoverColor(".magenta", "magenta");
hoverColor(".mediumaquamarine", "mediumaquamarine");
hoverColor(".mediumblue", "mediumblue");
hoverColor(".mediumorchid", "mediumorchid");
hoverColor(".mediumpurple", "mediumpurple");
hoverColor(".mediumseagreen", "mediumseagreen");
hoverColor(".mediumslateblue", "mediumslateblue");
hoverColor(".mediumspringgreen", "mediumspringgreen");
hoverColor(".mediumturquoise", "mediumturquoise");
hoverColor(".mediumvioletred", "mediumvioletred");
hoverColor(".midnightblue", ",midnightblue");
hoverColor(".mintcream", "mintcream");
hoverColor(".mistyrose", "mistyrose");
hoverColor(".moccasin", "moccasin");
hoverColor(".navajowhite", "navajowhite");
hoverColor(".oldlace", "oldlace");
hoverColor(".olivedrab", "olivedrab");
hoverColor(".orange", "orange");
hoverColor(".orangered", "orangered");
hoverColor(".orchid", "orchid");
hoverColor(".palegoldenrod", "palegoldenrod");
hoverColor(".palegreen", "palegreen");
hoverColor(".paleturquoise", "paleturquoise");
hoverColor(".palevioletred", "palevioletred");
hoverColor(".papayawhip", "papayawhip");
hoverColor(".peachpuff", "peachpuff");
hoverColor(".peru", "peru");
hoverColor(".pink", "pink");
hoverColor(".plum", "plum");
hoverColor(".powderblue", "powderblue");
hoverColor(".rebeccapurple", "rebeccapurple");
hoverColor(".rosybrown", "rosybrown");
hoverColor(".royalblue", "royalblue");
hoverColor(".saddlebrown", "saddlebrown");
hoverColor(".salmon", "salmon");
hoverColor(".sandybrown", "sandybrown");
hoverColor(".seagreen", "seagreen");
hoverColor(".seashell", "seashell");
hoverColor(".sienna", "sienna");
hoverColor(".skyblue", "skyblue");
hoverColor(".slateblue", "slateblue");
hoverColor(".slategray", "slategray");
hoverColor(".snow", "snow");
hoverColor(".springgreen", "springgreen");
hoverColor(".steelblue", "steelblue");
hoverColor(".tan", "tan");
hoverColor(".thistle", "thistle");
hoverColor(".tomato", "tomato");
hoverColor(".violet", "violet");
hoverColor(".wheat", "wheat");
hoverColor(".whitesmoke", "whitesmoke");
hoverColor(".yellowgreen", "yellowgreen");


//Functions for grouping colors and hiding colors when color is chosen from the menu
var menuShowHide = function (a,b){
    $(a).click(function () {
        $(".all").hide();
        $(b).show();
    });
};

menuShowHide("#blue_link", ".blues");
menuShowHide("#brown_link", ".browns");
menuShowHide("#green_link", ".greens");
menuShowHide("#gray_link", ".grays");
menuShowHide("#white_link", ".whites");
menuShowHide("#orange_link", ".oranges");
menuShowHide("#pink_link", ".pinks");
menuShowHide("#purple_link", ".purples");
menuShowHide("#red_link", ".reds");
menuShowHide("#yellow_link", ".yellows");










