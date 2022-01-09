Feature: Angulatr JS Website,Banking project - Bank Manager Login


  Scenario Outline: Bank Manager adds the customer

    Given user is on the Manager Home page
    When user clicks on "Add Customer" Tab
    And user enters customer "First Name" "<FirstName>"
    And user enters customer "Last Name" "<LastName>"
    And user enters customer "Post Code" "<PostCode>"
    Then user clicks on "Add Customer" Button and verifies the Customer ID generated

    Examples:
      | FirstName | LastName | PostCode |
      | Suraj     | Mishra   | 400604   |


  Scenario Outline: Bank Manager Opens account of added customer

    Given user is on the Manager Home page
    When user clicks on "Open Account" Tab
    And user selects the added customer name "<CustomerName>" from the dropdown
    And user selects the currency type "<Currency>"
    Then user clicks on "Process" Button and verifies the Account number generated

    Examples:
      | CustomerName | Currency |
      | Suraj Mishra | Rupee    |


  Scenario Outline: Bank Manager verifies the list of cuustomers and their details

    Given user is on the Manager Home page
    When user clicks on "Customers" Tab
    And user enters the added customer name "<CustomerFirstName>" in the search field
    Then user validates the customer details displayed

    Examples:
      | CustomerFirstName |
      | Suraj             |