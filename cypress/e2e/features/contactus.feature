Feature: Contact us

    Form used by a user for contact the company and left messages

    Scenario: Validate the mandatory field
    Given A user in the contact us page
    When A user click in the Submit
    Then The alert is displayed

    Scenario: Get in touch message 
    Given A user in the contact us page
    When A user add the info and click in Submit
    Then The webpage display an message to confimr