Feature: Calculator API Testing

Scenario: Test addition
  Given url 'http://localhost:3000/add?a=10&b=5'
  When method get
  Then status 200
  And match response.result == 15

Scenario: Test multiplication
  Given url 'http://localhost:3000/multiply?a=10&b=5'
  When method get
  Then status 200
  And match response.result == 50