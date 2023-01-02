Feature: Products page

    Validate the products functionality in the webpage

    Scenario: Display products page
    Given a user in the landing page
    When clicks in the Products menu in the top bar
    Then the products page is displayed

    Scenario Outline: Validate the search product <name> field
    Given a user in the product page
    When add a product "<name>" and click in search button
    Then a "<results>" is displayed
    Examples:
    | name   | results |
    | Tops   | exists  |
    | Tshirt | exists  |
    |   @    |   no    |

    Scenario Outline: Validate the <category> selection
    Given a user in the product page
    When filtering by "<category>" and "<product>"
    Then the products page is displayed
    Examples:
    | category | product |
    |  Women   |  Tops   |
    |  Men     |  Jeans  |
    |  Kids    |  Dress  |
