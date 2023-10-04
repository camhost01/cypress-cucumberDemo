Feature: Shopping Cart

    Test a different functional scenarios related to the shopping Cart

    Scenario: Message for empty cart
    Given a user in the webpage
    When clicks in the cart menu
    Then the message for empty cart is displayed

    Scenario: Add the <product> in the cart
    Given a user in the webpage
    When add the "<product>" in the page
    Then the product is added in the cart
    Examples:
        | product | 
        |  Jean   |
        |  Saree  | 
    
    Scenario: Delete products from cart
    Given a user in cart page with a products added
    When delete a products from cart
    Then the message for empty cart is displayed

    Scenario: User cannot complete the checkout if is not loged
    Given a user in cart page with a products added
    When click in checkout button
    Then a login form is displayed

    Scenario: Check the email suscription
    Given a user in the cart page
    When add a email in the subscription field
    Then the success message is displayed 