Feature: Login and delete account
Evaluate through test cases the login and delete feature in the webpage

Scenario: Register user
Given a user in the sign up page
When fill the data and click in the create user button
Then the user is created in the website

Scenario Outline: validate if a <user> is registered in the website
Given a "<user>" who add the data in the login page
When click in the button login
Then the website "<evaluate>" if its registered or not

Examples:
| user | evaluate |
| example1@test.com | access |
| otrouser@test.com | no_access |

Scenario: Delete Account
Given a person logued in the website
When click in delete Account
Then message is displayed confirmed the Account was delete