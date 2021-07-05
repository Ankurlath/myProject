User stories Description: 

A sample app to have a debit card details with the maximum limit details. As user enters the expense, the value of outstanding limit will go down. 
This app will have total 3 screens - Home screen , CardEntry Screen and Dashboard.
Create an api to get the data from the local stored in data folder

1- Home screen having the welcome note and a button which will take you to enter the debit card details page.

2- Debit card entry page will have following things:-
    1. Text Field to enter Card Number
    2. Text Field to enter Card Holder name.
    3. Text Field to enter Expiry date.
    4. Text Field to enter CVV
    5. Text Field to enter Maxium Limit.
    6. Button to save and cancel the details entered.

Validation for each filed is required. Along with this test cases for the entire page is also needed.
Api integration to check if entered card number is present in dummy data or not. If not then error according to that.

3- Dashboard will show the details entered in the debit card entry page. Along with this a field is required where a user can enter his total expenditure. After entering the value in expenditure column same amount entered will get deduct from the total limit . Different columns to show the total amount, remaining amount and total expenditure.
Along with this slider to show the graph.
A button to take back to home page.
Redux call to increase the expenditure amount dynamically.


Acceptance Crieteria : -

For success scenario, use the card number present in the src/data/dummydata.js
For Failur scenario, use random card number.



