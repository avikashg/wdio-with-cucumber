Feature: The homebazaar search functionality

  Scenario Outline: As a user, I can navigate to search page from landing page

    Given I am on the home page
    When I select <cityname> city in the search area
    And I click on search button
    Then I should be navigated to search page for <cityname> city

    Examples:
      | cityname  |
      | Mumbai    |
      # | Pune      |
      # | Bangalore |
      # | Chennai   |
      # | Noida     |
      # | Lonavala  |

