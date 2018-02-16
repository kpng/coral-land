$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 488, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/*

    We are using the following attributes on anchors in order to collapse the responsive menu when an item is clicked:
    
        data-toggle="collapse"
        data-target=".in"

*/
$(document).ready(function () {
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});

function makeThankText(){
    var newFriendName="";
    var newFriendEmail="";
    var acknowText="";

    newFriendName = document.getElementById("name").value;
    newFriendEmail = document.getElementById("email").value;

    document.getElementById("ackText").innerHTML = newFriendName + ", thanks for contacting!"+"<br>"+"We shall get in touch soon via email "+newFriendEmail ;

    // acknowText = newFriendName + ", nice to have you as a new friend!"+"\n"+"I shall contact you via email "+newFriendEmail ;
    // alert(acknowText);
}

$(function () {
    
        // on submitting the form
        $('form').submit(function (event) {
            // prevent the default action of reloading the page
            event.preventDefault();
    
            var sendData = {};
            $(event.target.nodeName + ' :input').each(function () {
                sendData[this.name] = $(this).val();
            });
            console.log(sendData);
    
            var posting = $.ajax({
                type: 'POST',
                url: $(event.target.nodeName).prop('action'),
                data: sendData
            });
    
            posting.done(function (response) {
                console.log(response);
                $('#alert-id').prop('hidden', false);
                $('form :input').each(function () {
                    $(this).val('');
                })
            });
            posting.fail(function (response) {
                console.log(response);
            });
        });
    
        // RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
        /* include the following HTML to use:
        <div class="form-group">
            <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
            <div class="alert alert-danger alert-dismissible fade in" hidden id="alert-id">
                <button type="button" class="close" id="close-id"><span>&times;</span></button>
                Thank you! We'll get in touch.
            </div>
        </div>
        */
    
        // on clicking the X button
        $('#close-id').click(function () {
            // hide the alert panel by adding the hidden property
            $('#alert-id').prop('hidden', true);
        });
    
    });
    
    // When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


function myFunction(x) {
    x.classList.toggle("change");
}