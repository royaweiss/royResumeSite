$(document).ready(function () {
    
    var category = "Profile";
    displayContent(category); 
    
    $("a").on("click", function() {
        category = $(this).text();
        displayContent(category);
        resetDefaults();
        $(this).css('color', 'brown');
    }); 

/*
    $(function() {
        $( "#tabs" ).tabs();
    }); 
*/      
});


function resetDefaults()
{
    $('a').each(function() {
        $(this).css('color','navy');    
    });
}

function slideShow()
{
    var picNames = new Array('KaraokeRoy2.jpg', 'CoffeeBoyRoy.jpg', 'HoneymoonRoy.jpg');
    var src, i
    
    //$("#pics").fadeOut(600, function(){
        $.each(picNames, function(i) {
            src = 'graphics/' + picNames[i];
            //alert(i + ": " + src);
            $('#pics').attr('src', src).delay(100).fadeIn(400);            
        });
    //$('#pics').attr('src', src).fadeIn(1000);
}

function displayContent(category)
{
    switch (category)
    {
        case "Profile" :
        contents =
        "<p>" +
            "I am a programmer and web developer with skills and experience in a wide variety of technologies, " +
            "including open source, Microsoft and others. Having tackled a myriad of positions and projects, " +
            "I’m always learning new skills and seeking to improve my knowledge of web development." +
        "</p>";        
        break;
    
        case "Programming Languages/Technologies" :
        contents =
        "<ul class='contents'>" +
            "<li>" +
                "PHP4/5, MVC, OOP, MySql-5.0, Ajax" +
            "</li>" +
            "<li>" +
                "JavaScript, JQuery, JSON, HTML4/5, CSS2/3" +
            "</li>" +
            "<li>" +
                "AngularJS, Node.js, MongoDB" +
            "</li>" +
        "</ul>" +
        "<ul class='contents'>" +
            "<li>" +
                "ASP, ASP. Net, VB.Net, Visual Studio, Visual Interdev" +
            "</li>" +
            "<li>" +    
                "VBScript, VB 6.0, VBA, Microsoft Office Automation, ActiveX" +
            "</li>" +
            "<li>" +
                "SQL-Server-2000, MS-Access, Transact SQL, Oracle" +
            "</li>" +
        "</ul>";
        break;
    
        case "Positions/Consulting Assignments" :
        contents =
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Central Westchester Tenants Association, Hartsdale, NY" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "Free-Lance Web Developer/Consultant" +
                "<span class='jobDate'>2014 - present</span>" +
            "</li>" +
            "<li>" +
                "Designed and coded front and back end of an informational, member-based website " +
                "for coop shareholders to allow viewing, searching for and printing documents and forms. " +
            "</li>" +
            "<li>" +
                "Provided extensive, user-friendly tools for uploading documents and administering user accounts." +
            "</li>" +    
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Champions of Leisure, Bridgeport, CT" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "Free-Lance Web Developer/Consultant" +
                "<span class='jobDate'>2014</span>" +
            "</li>" +
            "<li>" +
                "Designed and coded front and back end of e-commerce website " +
                "for selling fantasy gaming materials and scheduling games." +
            "</li>" +
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Restaurant Menu Design, Stamford, CT" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "Free-Lance Web Developer/Consultant" +
                "<span class='jobDate'>2013</span>" +
            "</li>" +
            "<li>" +
                "Developed prototype with HTML5, CSS3, JavaScript and JQuery " +
                "for an informational web site to promote menu designer’s business." +
            "</li>" +
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Barclays Bank, New York, NY" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "PHP Developer/Consultant" +
                "<span class='jobDate'>2012</span>" +
            "</li>" +
            "<li>" +
                "Designed and performed back-end coding, of web-based reports for Barclay’s Hedge Fund Symposium." +
            "</li>" +
            "<li>" +
                "Coded system for email registration, notification and administration." +
            "</li>" +
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Yourlongboard.com" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "Free-Lance Web Developer/Consultant" +
                "<span class='jobDate'>2012</span>" +
            "</li>" +
            "<li>" +
                "Developed a complete website and shopping cart application " +
                "for selling  skate boards and athletic equipment." +
            "</li>" +
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "ArtNeighbor.com, Chappaqua, NY" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "PHP/JavaScript Developer/Consultant" +
                "<span class='jobDate'>2011</span>" +
            "</li>" +
            "<li>" +
                "Clarified membership sign-up procedure.  As a result, about 50% more users, " +
                "who started the process, completed the steps to become members." +
            "</li>" +
            "<li>" +
                "Added search functionality to the website." +
            "</li>" +
        "</ul>" +
        
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "NYCityliving.com, New York, NY" +
            "</li>" +
            "<li class='jobHeading2'>" +
                "Free-Lance Web Developer/Web Designer" +
                "<span class='jobDate'>2011</span>" +
            "</li>" +
            "<li>" +
                "Redesigned real estate website with CSS/2 to create consistent look." +
            "</li>" +
            "<li>" +
                "Added email response and calendar functions with PHP and JavaScript." +
            "</li>" +
        "</ul>";        
        break;
    
        case "Education" :
        contents =
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Lynda.com - Online Training" +
            "</li>" +
            "<li>" +
                "JavaScript Essential Training" +
            "</li>" +
            "<li>" +
                "JavaScript and JSON" +
            "</li>" +            
            "<li>" +
                "JQuery for Web Developers" +
            "</li>" +
            "<li>" +
                "JQuery Data with AJAX" +
            "</li>" +
            "<li>" +
                "Up and Running with AngularJS" +
            "</li>" +
            "<li>" +
                "PHP with MySQL Essential Training" +
            "</li>" +
            "<li>" +
                "Object-Oriented Programming with PHP" +
            "</li>" +
            "<li>" +
                "PHP for Web Designers" +
            "</li>" +            
        "</ul>" +
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "THE TRAINING CAMP, Bushkill, PA" +
            "</li>" +
            "<li>" +
                "Microsoft Certified Professional in Developing Windows Applications with ASP.Net." +
            "</li>" +    
        "</ul>" +
        "<ul class='contents'>" +
            "<li class='jobHeading1'>" +
                "Pace University, School of Computer Science, White Plains, NY" +
            "</li>" +
            "<li>" +
                "B.S. in Computer Science" +
            "</li>" +    
        "</ul>";       
        break;
    
        case "Contact Information" :  
        contents =
        "<ul class='contents'>" +
            "<li class='contactHeading'>" +
                "Phone" +
            "</li>" +
            "<li class='contactHeading'>" +
                "Email" +
            "</li>" +
            "<li class='contactHeading'>" +
                "Linked-In" +
            "</li>" +
            "<li class='contactHeading'>" +
                "Git Hub" +
            "</li>" +
        "</ul>" +;    
        break;
        
        case "Contact Information with Tabs" :
        contents =
        "<ul class='contents'>" +
            "<li class='contactHeading'>" +
                "<a href='#tabs-1'>Phone</a>" +
            "</li>" +
            "<li class='contactHeading'>" +
                "<a href='#tabs-2'>Email</a>" +
            "</li>" +
            "<li class='contactHeading'>" +
                "<a href='#tabs-3'>Linked-In</a>" +
            "</li>" +
            "<li class='contactHeading'>" +
                "<a href='#tabs-4'>Git Hub</a>" +
            "</li>" +
        "</ul>" +;    
        break;
    }
    
    $("#content").slideUp(300, function(){
        $('#content').html(contents).slideDown();        
    });
}