Feature: Automation Demo Site Regtsitration feature

    Scenario Outline: Enter User Details

        Given user navigates to automation demo site
        When user enters FirstName and LastName
            | FirstName | LastName |
            | TEST      | TEST     |
        And user enters Address
            | Address |
            | TEST    |
        And user enters Email Address
            | Email         |
            | test@test.com |
        And user enters Phone number
            | PhoneNumber |
            | 9820098200  |
        And user selects Gender
            | Gender |
            | Male   |
        And user selects hobbies
            | Cricket |
        # And user selects language
        #     | English |
        And user selects skills
            | Java |
        And user selects country
            | India |
        And user selects date of birth
            | Date | Month | Year |
            | 14  | May   | 1996 |
        And user enters "<Password>"
        And user enters confirm "<Password>"
        Then user clicks on submit button


    Examples:
            | Password |
            | 637@Test |