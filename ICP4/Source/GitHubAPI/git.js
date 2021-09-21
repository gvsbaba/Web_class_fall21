function getGithubInfo(user) {
    console.log(user);
    //1. Created XMLHttpRequest class and send a GET request using it.
    // The function will finally give the object(it contains the response!)
    var xhttp =new XMLHttpRequest();
    var url = "https://api.github.com/users/"+user;

    xhttp.open('GET',url);

    xhttp.onload = function () {
        //if the response is done then show the user's details
        if (xhttp.status == 200) {
            console.log(xhttp);
            showUser(JSON.parse(xhttp.responseText));
            //else display error
        } else if(xhttp.status==404) {
            noSuchUser(user);
        }
    };
    xhttp.send()

}

function showUser(user) {

    //2. set the contents of the h2 and the two div elementsz in the div '#details' with the user content
    console.log(user);
// set the html  elements in page using jQuery
    $("#displayname").text(user.login);
    $(".icon").html("<img height='200' width='200' src='"+ user .icon_url+"'/>");
    var link = "<a target='_blank' href='"+user.html_url+"'> Github link </a>";
    $(".User_info").html("<label><u><strong>User_info</strong></u></label>" +
        "<br/><br/><label style='color: midnightblue'>Login Name : </label>"+ user.login
        +"<br/><label style='color: midnightblue'> Login ID : </label>"+ user.id
        +"<br/><label style='color: midnightblue'> Node ID : </label>"+ user.node_id
        +"<br/> <label style='color: midnightblue'>GitHub URL : </label>"+link
        +"<br/> <label style='color: midnightblue'>GitHub Repositories Of the User : </label>"+ user.public_repos);


    $("#details").show();

}

function noSuchUser(username) {
    //3. set the elements ss that a suitable message will display
    $("#displayname").text(" username " +username + "does not exists");
    console.log("no such user");
    // set the elementsz to blank
    $(".icon").text(" username " +username + " does not exists ");

    $(".User_info").html('');
    $("#details").show();

}


$(document).ready(function(){



    $(document).on('keypress', '#username', function(e){
        $("#profile").hide();

        //check if the search key is pressesd or not
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //remove the text in the input
            $(this).val("");
            //get the user's data and store the obtained data
            getGithubInfo(username);
        }
    })
});