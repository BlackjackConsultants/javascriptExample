# USER STORY
## As a user i want to guess the letters until game over, which happens when i win or loose
* Show a textbox so that the user can enter the letter
* Show label so user knows what textbox issues.
* Show submit button.
* when user enters letter, if letter is right then show in top of line
* when user is wrong show in letters missed
* when user misses 7 he hangs. show Loss caption
* when user gets all right, show win caption.

# WHAT

1. create ui part
2. create a function submit handler
3. first check if letter has been used.
4. for each letter in the chosen word, check if the user typed letter is the same.
5. if letter found
6.     show dash and hyphes div
7.     validateNoDashesExist
8.     if no dashes exist, then game over. show user won
9. else
10.    show in list of missed letters
11.    validateWrongLetterArray less then 7
12. validateGameOver     
13. variable that store dash and right letters
14. create an array of wrong characters.
 


