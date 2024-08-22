export const UserSummaryPage = {
    url: '',
    Name: "(//div[@class='card-body']//dd[@class='col-sm-9'])[1]",
    Username: "(//div[@class='card-body']//dd[@class='col-sm-9'])[2]",
    Contact: "(//div[@class='card-body']//dd[@class='col-sm-9'])[3]",
    Timezone: "(//div[@class='card-body']//dd[@class='col-sm-9'])[4]",
    Status: "(//div[@class='card-body']//dd[@class='col-sm-9'])[5]",
    Cart: "(//div[@class='card-body']//dd[@class='col-sm-9'])[6]",
    'User Profile Tab': "//a[@href='#profile']",
    'Confirm Button': '//a[contains(text(), "Confirm")]',
    'Alias Login': '//a[contains(@href,"alias")]',
    'Edit Button': '//a[contains(text(), "Edit")]',
    'Institution ID': '//dd',
    'API ID': '//dd',
    'Log in Dropdown': '#user-login-button',
    'Log in as Instructor':
        '//*[@id="content"]/div[2]/div[1]/div/h1/span/span/div/div/a[contains(text(),"Log in as Instructor")]',
    'Log in as Test-taker':
        '//*[@id="content"]/div[2]/div[1]/div/h1/span/span/div/div/a[2][contains(text(),"Log in as Test-taker")]',
    'Enrollments Tab': '//a[@href="#enrollments"]',
    // Multiple Enrollments selectors
    'ID 1111': '//dd[contains(text(),"1111")]',
    'ID 2222': '//dd[contains(text(),"2222")]',
    'ID 3333': '//dd[contains(text(),"3333")]',
    'ID 4444': '//dd[contains(text(),"4444")]',
    'ID 5555': '//dd[contains(text(),"5555")]',
    'ID 6666': '//dd[contains(text(),"6666")]',
};
