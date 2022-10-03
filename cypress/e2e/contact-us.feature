Feature: Testing the “Talk to an expert” page

    Scenario: Checking the phone number in the “Talk to our product experts” section
        When I see “Talk to our product experts” section
        Then I should see the phone number
            | phonenumber       |
            | (888) 980 9750    |
    
    Scenario: Checking the phone numbers in the “Calling from overseas?” section
        When I scroll down to the “Calling from overseas?” section
        Then I should see the list of countries and corresponding phone numbers
            | country               | phonenumber       |
            | Estonia               | +372 699 1435     |
            | Finland               | +358 753 255 300  |
            | Ireland               | +353 818 123 457  |
            | Israel                | +972 772 2000 92  |
            | Mexico                | +52 558 897 4917  |
            | Netherlands           | +31 853 018 256   |
            | New Zealand           | +64 9 884 4134    |
            | Philippines           | +63 322 346 319   |
            | Poland                | +48 22 153 00 79  |
            | Singapore             | +65 3159 4436     |
            | United Kingdom        | +44 3301 900175   |
            | All other countries   | +1 312 945 7420   |
