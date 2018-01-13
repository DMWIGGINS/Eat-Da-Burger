$(function () {
    $(".create-form").on("submit", function (event) {
        console.log("it clicked");
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var formatName = $("#yum").val().trim();
        var name = formatName.toUpperCase();
        var newBurger = {
            name: name
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
            alert("clicked");
            var id = $(this).data("id");
            var newMeal = $(this).data("newmeal");

            var newMealState = {
                devoured: newMeal
            };

            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newMealState
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