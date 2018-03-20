// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var devourState = {
        devoured: devour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("changed state to", devour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $('.devour').on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        );
    });
  });
  