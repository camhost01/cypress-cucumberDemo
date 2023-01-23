Feature: Products page

    Validate the products functionality in the webpage

    Scenario: Display products page
    Given a user in the landing page
    When clicks in the Products menu in the top bar
    Then the products are is displayed in the webpage

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
    Then the products are is displayed in the webpage
    Examples:
    | category | product |
    |  Women   |  Tops   |
    |  Men     |  Jeans  |
    |  Kids    |  Dress  |

    Scenario Outline: Validate the <brand> selection
    Given a user in the product page
    When filter by "<brand>" 
    Then product "<stock>" is displayed 
    Examples: 
    |   brand      | stock |
    |    Polo      |   6   |
    |    H&M       |   5   |
    |   Madame     |   5   |
    | Kookie Kids  |   3   |

    Scenario: Validate the review for a product
    Given a user in the review page
    When add a review for a product
    Then the success message of review is displayed