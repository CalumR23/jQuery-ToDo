$(document).ready(function(){
        //make our button on click work
        //grab user input
        //turn input into elem
        //add elem to ul
        $("#button").on("click", function(){
            // console.log("hello")
           let userInput = $("#toDo").val()
            // console.log(userInput)
           let itemElem = $("<li></li>")
           itemElem.text(userInput)
           itemElem.attr("class","list-group-item")
           console.log(itemElem.attr("class"))
           $("#list").append(itemElem) 
        })

})