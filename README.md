# Rock-Paper-Scissors
An RPS game built with html css and JS.


This was a really fun build. 


HTML & CSS for the UI. 


JS for game functionality:
Set variables, Cached the DOM.


A function for getting the Computers Choice in which i set an Array of choices and used the in-built object Math.floor and Math.random to return a random choice.


A function to convert letter to words which takes 'letter' as an argument and i used two if statements to return Rock + Paper instead of 'r' and 'p' and if its neither of those to return 'scissors'.


Three game functions Win, Lose, Draw.


Win - 2 constants for the small words indicating who won in which i used the fontsize method to set it to a smaller font size and the sup method which pushes it up. 'UserScore++' makes the score go up when you win. Then using the constants in which i stored the html Id's user-score and comp-score to set the value of the innerHTML to the updated scores. Then changing the value of the innerHTML of the result_p constant which takes the p tag in the result div by using the letterToWord function as well as adding the smallerwords. Finally adding a CSS class which makes the ring glow green if you win and using the setTimout method to remove the glow after a second.


lose - 'computerScore++' makes the score go down you lose against the computer. CSS class is red.


draw - CSS class is grey.


Then theres a game function which takes in 'UserChoice' which is the choice of the player. And i've also set a const called compChoice which brings in the getComputerChoice function. And instead of using an if statement i used a switch statement in which if a case is 'rs' which rock and scissors and so on then run the win function and the same for the losses and draw. Win(), lose(), draw() all take in userChoice and compChoice to see who won or lost.

Finally theres a main function which takes the the rock,paper,scissors divs and listens for a click and then runs the function game passing through either r p or s. 


![RPS](https://github.com/Amrit-PennySoft/Rock-Paper-Scissors/blob/master/rps.png)
