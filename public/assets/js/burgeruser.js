$(function () {
    $(".create-form").on("submit", function (event) {
        console.log("hi mom")
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            name: $("#yum").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );

        $(".eatBurger").on("click", function (event) {
            var id = $(this).data("id");
            alert("clicked");
            var condition = {
                devoured: true,
            };

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: condition
            }).then(
                function () {
                    console.log("You Ate It!");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });
    });
});