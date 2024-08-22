# ![ProckiLogo](src/logo.png) proctoru-test-automation

### Test automation framework

---

## **Quick Start**

### **System Dependencies**

-   [NodeJS](https://nodejs.org/)
-   [openjdk-13](https://jdk.java.net/13/)

### **Tech Used (and related documentation)**

-   [TypeScript](http://www.typescriptlang.org/)
-   [Cucumber](https://cucumber.io/)
-   [WebdriverIO](https://webdriver.io/)
-   [Allure Report Framework](https://docs.qameta.io/allure/)

### **Setup**

-   The webdriver requires access to the java runtime environment in order to execute. After installing the jdk (or other jre), set an environment variable named `JAVA_HOME` to the path where the jdk was installed, and add the path to the JAVA bin directory to the `PATH` environment variable. This will vary depending what OS you have. (see [Windows](https://confluence.atlassian.com/conf59/setting-the-java_home-variable-in-windows-792499849.html), [OSX](http://www.sajeconsultants.com/how-to-set-java_home-on-mac-os-x/), and [Ubuntu 18.04 LTS](https://vitux.com/how-to-setup-java_home-path-in-ubuntu/) )

```
npm install
```

#### **Environment Variables Required Prior to Execution:**

_Contact AQA team member for required values._

-   AQA_USER_DB_HOST
-   AQA_USER_DB_USER
-   AQA_USER_DB_PASSWORD

-   AQA_TESTRAIL_HOST
-   AQA_TESTRAIL_USER
-   AQA_TESTRAIL_PASSWORD

### **Executing Tests**

Default configuration

```
npm run test
```

Custom configuration

```
npm run test -- [options]
```

#### **Options:**

|                 option | alias | description                                                                                                                             |              type              | example                                                                                    |
| ---------------------: | :---: | :-------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------: | :----------------------------------------------------------------------------------------- |
|              --browser |  -b   | List of browsers on which to execute tests                                                                                              | String \| comma delimited list | `npm run test -- -b chrome`                                                                |
|           --chromeArgs |       | Additional options to pass to chrome at startup                                                                                         | String \| comma delimited list | `npm run test -- --chromeArgs headless,start-maximized`                                    |
|    --chromeDownloadDir |       | Base directory for downloaded files                                                                                                     |             String             | `npm run test -- --chromeDownloadDir "./tmp/downloads"`                                    |
|          --firefoxArgs |       | Additional options to pass to firefox at startup                                                                                        | String \| comma delimited list | `npm run test -- --firefoxArgs "-turbo"`                                                   |
|        --firefoxBinary |       | Location of the biinary executable for Firefox                                                                                          |             String             | `npm run test -- --firefoxBinary "C:/Program Files/Firefox Developer Edition/firefox.exe"` |
| --firefoxExtensionPath |       | Location of the Firefox Extension                                                                                                       |             String             | `npm run test -- --firefoxExtensionPath "C:/extensions/ffx.xpi"`                           |
|   --firefoxDownloadDir |       | Base directory for downloaded files                                                                                                     |             String             | `npm run test -- --firefoxDownloadDir "./tmp/downloads"`                                   |
|      --parallelThreads |       | Maximum number of parallel sessions                                                                                                     |             Number             | `npm run test -- --parallelThreads 10`                                                     |
|                  --tag |  -t   | Run all tests matching any tag passed in this option                                                                                    | String \| comma delimited list | `npm run test -- -t regression,SEVERITY\|critical,C5150`                                   |
|        --tagExpression |  -T   | Run tests matching the result of the tag expression. [Cucumber Tag Expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions) |             String             | `npm run test -- -T "(@SEVERITY\|critical or @SEVERITY\|blocker) and @regression"`         |
|                --specs |  -s   | List feature files to run                                                                                                               | String \| comma delimited list | `npm run test -- -s ./src/features/**/login.feature`                                       |
|               --runner |       | "local" or "remote"                                                                                                                     |             String             | `npm run test -- --runner local`                                                           |
|               --remote |  -r   | `false` if running locally, `true` if running on grid                                                                                   |            Boolean             | `npm run test -- -r true`                                                                  |
|           --remoteHost |  -h   | IP address of the remote host                                                                                                           |             String             | `npm run test -- -r true -h 18.205.6.81`                                                   |
|       --archimedesHome |       | Base url for Archimedes site                                                                                                            |             String             | `npm run test -- --archimedesHome https://staging.proctoru.com`                            |
|      --brightspaceHome |       | Base url for Brightspace                                                                                                                |             String             | `npm run test -- --brightspaceHome https://proctoru.brightspacedemo.com`                   |
|           --canvasHome |       | Base url for Canvas                                                                                                                     |             String             | `npm run test -- --brightspaceHome https://proctoru.instructure.com`                       |
|           --moodleHome |       | Base url for Moodle                                                                                                                     |             String             | `npm run test -- --brightspaceHome https://moodle-3-5.proctoru.com`                        |
|      --moodleroomsHome |       | Base url for Moodle Rooms                                                                                                               |             String             | `npm run test -- --moodleroomsHome https://proctoru-sandbox.mrooms.net`                    |
|        --fakeVideoPath |       | Path to the fake video source file                                                                                                      |             String             | `npm run test -- --fakeVideoPath "{{path to file}}"`                                       |
|        --fakeAudioPath |       | Path to the fake video source file                                                                                                      |             String             | `npm run test -- --fakeAudioPath "{{path to file}}"`                                       |
|                        |       |                                                                                                                                         |                                |                                                                                            |

---

## **Writing Test Cases**

#### Available steps:

-   See the [Steps class](src/stepDefinitions/steps.ts) for complete list. Examples below:

```TypeScript
@given(/^I am (a student|a superadmin|an admin|an institution admin|an institution instructor)( for "([^"]\*)"|\$)/)

@when(/^I navigate to "([^"]\*)"\$/)

@when(/^I open new window "([^"]\*)"\$/)

@when(/^I switch to window "([^"]\*)"\$/)

@when(/^I switch to frame "([^"]\*)"\$/)

@when(/^I am on the "([^"]\*)" page in "([^"]\*)" site\$/)

@when(/^I type "([^"]\*)" into the "([^"]\*)" field\$/)

@when(/^I add text "([^"]_)" to the "([^"]_)" field\$/)

@when(/^I click the "([^"]_)" element( with selector "([^"]_)"|\$)/)

@when(/^I click the "([^"]_)" element for "([^"]_)" in "([^"]\*)" list\$/)

@when(/^I hover over the "([^"]\*)" element\$/)

@when(/^I select "([^"]_)" option from the "([^"]_)" selector\$/)

@when(/^I log out of Archimedes\$/)

@when(/^I wait "([^"]\*)" seconds\$/)

@when(/^I send keys "([^"]\*)"\$/)

@when(/^I scroll by "([^"]\*)" pixels\$/)

@when(/^I click "([^"]_)" and then select "([^"]_)"\$/)

@when(/^I hover over "([^"]_)" and then click "([^"]_)"\$/)

@when(/^I (accept|dismiss) alert\$/)

@when(/^I refresh the page\$/)

@then(/^I (should|should not) see the "([^"]\*)" element\$/)

@then(/^"([^"]_)" element text should (contain|be) "([^"]_)"\$/)

@then(/^"([^"]\*)" element (should|should not) be (visible|hidden|selected|checked)\$/)

@then(/^I store "([^"]\*)" as "([^"]\*)"\$/)

@when(/^I send (multipart|special formatted) data:$/)
```

#### - **Methods Inside Steps**

A set of methods (prepended with "`_`") are available to be accessed from within the Gherkin steps in the `.feature` files. To access and call these methods, pass the name of the method followed by any applicable arguments into the step as a variable within the quotes on the step.

For Example, one of the available methods is "`_random`". This method generates a random value based on the type named in the arguments passed to it. To use this method to generate a fake phone number and input it into a text field named "Phone_1", the step might look like this:

```Feature
When I type "_random phone" into the "Phone_1" field
```

**_\* Available Methods \*_**
| method | arguments | returns| description | example |
| :--: | :--: | :--: | :--: | :--: |
| \_store | any | any | Retrieves a value stored using the step `Then I store "" as ""` | `When I type "_store My Stored Value" into the "Input" feild` |
| \_widowSize | _none_ | `Object { width: number; height: number; }` | Gets the size of the current browser widown in pixels | `Then I store "_windowSize " as "window_size"` ... `Then The value of "_windowSize " should be "_store window_size"` |
| \_my | `name \| email \| password \| id` | `String` | Retrieves the value present for the given argument on the current user | `When I type "_my email" intot he "Email Input" field` |
| \_random | `email \| firstName \| lastName \| number \| username \| phone \| sentence \| testdata \| editableTestName \| alphanumeric \| durationInMinutes \| address` | `String` | Genreates a random value based on the argument passed to it. See [`DataGeneration.ts`](src/lib/DataGeneration.ts). | `Then I store "_random email" as "Fake Email"` |
| \_textFromElement | `String`: _Element Name_ | `String` | Retrieves the text of an element | `Then I store "_textFromElement Username Input" as "My Username"` |
| \_attribute | `String`: _attribute name_ `of` _Element Name_ | `String` | Retrieves the value of a specific attribute of an element | `Then I store "_attribute selected of IsAllowed Checkbox" as "IsAllowed Checkbox Selected Status"` |
| \_getCurrentUrl | _none_ | `String` | Retrieves the URL of the current browser context | `Then I store "_getCurrentUrl" as "Base Context Url"` |
| \_allNonNumericals | _none_ | `String` | Returns a string of all characters from char code 32 thru 127, excluding `0123456789+=.` | `When I type "_allNonNumericals" into the "Doesn't Accept Numbers Input" field` |

#### - **Restricting tests by browser**

If a scenario can run with any available browser, no special action is needed.
Restrict a scenario to a specific browser by adding the `@BROWSER|<browserName>` at the top of the scenario and add `--browsers <browserName>` to the command line.
Example: `npm run test -- --browsers chrome`

#### - **Using variables in test cases:**

Variables can be set and stored within the tests by using the scenario's "store". Accessing the values saved in the reference provides a means of passing values from one step to another within the same scenario. Since a new "store" is created at the beginning of each scenario, it will not allow for passing information between two scenarios, even if within the same feature. See the example below.

```Feature
Then I store "_random email" as "User Email"
Then I store "pw123" as "User Password"
When I type "_store User Email" into the "Username Input" field
When I type "_store User Password" into the "Password Input" field
```

##### **How does it work?**

Consider the step "`Then I store "_random email" as "User Email"`" from the above example.

Passing the string `"_random email"` into this step creates a randomly generated email via a method called `_random` as defined within [stepDefinitions](./src/stepDefinitions/steps.ts). Step methods are defined with a preceding "`_`". If no method is defined, as in the step '`Then I store "pw123" as "User Password"`', the value passed will be stored verbatim. Then, the second argument `"User Email"` (or `"User Password"`) is set as a key on the scenario's reference where the value will be stored. Access the stored value by passing `"_store {key}"` as the value to type into the desired field, as in the step:

```Feature
When I type "_store User Email" into the "Username Input" field
```

or

```Feature
When I type "_store User Password" into the "Password Input" field
```

---

### - **Sending Special Formatted Data or Multi-Part data into fields in the Browser**

Step: `@when(/^I send (multipart|special formatted) data:$/)`

#### **How to use it?**

The text should be offset by delimiters consisting of three double-quote marks on lines of their own, one at the beginning of the blob, and one at the end. The indentation of the quotes will auto format but the data in between may not, depending on if you have special characters in there. So, inside the triple quotes, Each line of the blurb will be indented according to the opening `"""`. Indentation beyond the column of the opening `"""` will therefore be preserved, as you can see with the SQL statement in the example. This is a useful step if you have to send double quotes in your string instead of just single quotes as the "`When I send keys`" step will only allow you to send single quotes.

Examples:

```
When I send special formatted data:
        """
        "QA Is great"
        this is awesoome
        123
        @@#$()
        Lots of symbols +~<,?+
        """
```

```
When I send multipart data:
        """
        ""Bill is the Best""
        sheet {
            aggregateBy(username) {
                column {
                    label "Total"
                    key total
                    do { count(user_exam_id) }
                }
                table {
                    display(username, total)
                }
            }
        }
        """
```

---

## **AWS Integration**

This test framework relies on integrations with AWS in order to access certain features such as accessing the AWS Secrets Store Manager, accessing the User DB, storing and retrieving test results from s3, and publishing results to Testrail.
It is recommended to utilize the [aws-cli](https://aws.amazon.com/cli/) tool to configure your local machine to access these features.

### **AWS Secrets Mangager**

Any sensitive data required to access various components of the ProctorU Test Automation Framework should be stored in the AWS Secrets Manager -- including but not limited to:

-   Secret Access Keys
-   API Keys
-   Database access credentials
-   Database encryption keys

\*\* See `config\env.ts` for implementation

### **CodeBuild**

Remote tests for regression are executed via [AWS CodeBuld](https://docs.aws.amazon.com/codebuild/).
See our [arch-ui-tests](https://console.aws.amazon.com/codesuite/codebuild/373442825633/projects/arch-ui-test/details?region=us-east-1) build project for configuration details.

### **Code Pipeline**

\- _Coming soon_

### **S3**

Generated results and the report history are stored in [AWS S3](https://docs.aws.amazon.com/s3/) in the [qa-proctoru-testresults](https://s3.console.aws.amazon.com/s3/buckets/qa-procotoru-testresults?region=us-east-1&tab=objects) bucket.

---

## **User Management**

User management within this framework is split into three primary areas.

1. The User Database
2. The User Provider
3. The User Helper

The User Hepler is a set of methods to expose user management to the Steps class for utilizing the User Provider to access and manage the users in the User Database.

The User Provider connects to the User Database and manages actions such as retrieving user data, setting user availability, and encrypting/decrypting user data.

The User Database serves as a central data table where all parallel running test sessions can access and set the availability of users within the table to minimize the possiblity of overlap between test sessions where a user cannot be included in two sessions at the same time.

**For Example:**
Within ProctorU's application, a Test-Taker cannot be connected to two Test Sessions at the same time (i.e. they can't take two exams at once.). So if two separate, parallel scenarios attempt to book a user for a test, the first to start it's execution will set the availability of the user in the User Database to "busy", preventing the parallel session from using that same user for it's test. This causes the second scenario to look in the User Database for the next user marked as "free" that matches any requisite criteria.

### \- **Implementation** \-

The User Management apparatus is accessed within the steps via a call to the `setUser` method on the [Steps class](src/stepDefinitions/steps.ts).
The basic format for use is `Given I am (\<userType>) for "(\<identifier>)"`.

Example:

```Feature
Given I am a student for "blackboard_lmi"
```

This calls the `setUser` method and passes the `<userType>` and "`<identifier>`" as arguments.
_Note: There are multiple actions this method may take given different arguments -- see the [Steps class methods](src/stepDefinitions/steps.ts)._

The `setUser` method decides on which action to take based in the `userType` that's passed to it.
In the case of the example above, `setUser` makes a call to the `getUser` method in the [User Helper](src/lib/UserHelper.ts), which then initializes the [User Provider](src/lib/UserProvider.ts) and passes the `userType` and `identifier` argements along to the `bookUser` method.
The `bookUser` method then sends a SQL query to the User Database with parameters built from the `userType` and `identifier` arguments and decrypts the returned user's data (if one is found).
The returned user is then stored within the current context and added to a list of all users utilized during the current session. One the session is finished, the `freeAllUsersThisScenario` method is called and all of the users that were added to the users list for the session are marked as "free" in the databse.

---

## **Testrail Integration**

Scenarios within this test framework can be "tagged" with the Case IDs of cases present in our [TestRail Project](https://proctoru.testrail.io/index.php?/projects/overview/2) to autmatically create a [Test Run](https://www.tutorialspoint.com/testrail/testrail_test_runs.htm) and add the results of the tests to that run by leveraging integration with the [TestRail API](https://www.gurock.com/testrail/docs/api).

### **Generating the Test Run**

_Creating a test run in TestRail and adding results from an automated test execution_

```
npm run reportToTestRail
```

Test results are output to a set of JSON files in the `proctoru-test-automation/tmp/json_results` directory. The above command reads and uses the data to configure requests to be sent to the [TestRail API](https://www.gurock.com/testrail/docs/api) as described in the [TestRail Integration Script](reporting/testrailIntegration.ts).

\* **_Access to AWS Secrets Manager is required in order to retrieve login credentials for the TestRail API_** \*

### \- **Implementation** \-

The JSON results are output by webdriver as configured in the [reporters](config/wdio/lib/reporters.ts) config file. The location of the output files is controlled by the value set to `jsonFolder` in the config options object for the [`cucumberjs-json`](https://v6.webdriver.io/docs/wdio-cucumberjs-json-reporter.html) reporter. All tags preceded with `@` are added to the `tags` array on the associated feature or scenario in the output files.

Example:

```Feature
~ src/features/example.feature

@Feature-tag1
Feature: example feature

    @Scenario-tag1
    @Scenario-tag2
    @C0000
    Scenario: example scenario
        # Steps

```

```JSON
~ tmp/json_results/example_feature.json

[
    {
        "keyword":"Feature",
        "type":"feature",
        "description":"",
        "line":1,
        "name":"example feature",
        "uri":"",
        "tags":[
            {
                "name":"@Feature-tag1",
            }
        ],
        "elements":[
            {
                "keyword":"Scenario",
                "type":"scenario",
                "description":"",
                "name":"example scenario",
                "tags":[
                    {
                        "name":"@Scenario-tag1"
                    },
                    {
                        "name":"@Scenario-tag2"
                    },
                    {
                        "name":"@C0000"
                    }
                ],
                "id":"",
                "steps":[
                    ...Steps Array
                ]
            }
        ],
        "id":"",
        "metadata":{}
    }
]
```

In the above example, there is a tag present on the example scenario with the name `@C0000`. Since this tag starts with "@C" the TestRail Inegration script will find this tag along with any others with the "@C" predicate, associate the related scenario(s), and parse through the steps and their respective statuses to generate a list of test case IDs with their associated scenarios and statuses.

_Order-of-operations:_

1. All JSON files contained within the `tmp/json_results` directory are read and are aggregated into a formatted data set in preparation to send the requests to the TestRail API.
2. A request is sent to TestRail's API to retrive a list of IDs of all cases present in the current suite.
3. The aggregated data from step 1 is then compared with the response from step 2 and a list of any case IDs that are present in the scenario tags but not in the list from TestRail are added to an "Invalid Cases" array and filtered out of the aggregated data.
4. A request to TestRail's API is sent create a new test run.
5. The filtered data from step 3 is then formatted for TestRail and added to the test run created in step 4 via calls to TestRail's API.
6. A final call to TestRail's API confirms the successful creation of the test run and retrieves the direct link to the new run.
7. The URL where the generated run can be found, along with a list of any invalid case IDs is output to the console:

```JSON
{
    RunUrl: "https://proctoru.testrail.io/index.php?/runs/view/{{runID}}",
    InvalidCaseIds: [ "C0000" ]
}
```

**\* _KEY NOTE: ALL TEST CASES TAGGED ON A SCENARIO WILL BE MARKED AS FAILED IF THE SCENARIO DOES NOT PASS._ \***

---

## **Allure**

### **Generating the Report**

_Viewing the report generated from a test execution on the host machine_

    npm run allure-report

Test results are output to a folder in the `proctoru-test-automation` directory named `allure-results`. Running the above command will build the report from those results and start a small http server on your machine to host the results page. See the [Allure Docs](https://docs.qameta.io/allure/) for more information on the Allure report framework.

### **\- Implementation \-**

During test execution but prior to generating sessions, the [reporters configuration file](config/wdio/lib/reporters.ts) is loaded into wdio and used as the basis for the reporting formats used. (See [webdriver.io reporters configuration documentation](http://v6.webdriver.io/docs/options.html#reporters) and [webdriver.io Allure reporter documentation](http://v6.webdriver.io/docs/allure-reporter.html) for configuration options details)

Each feature, scenario, and step are automatically recorded and added to each report with the pass/fail/broken status added to the step once _either_ all commands with the step complete _or_ if an error is encountered in one of the commands.

-   **Pass:** A status of "passed" is given to a step that completes all related commands without presenting an error AND meets the conditions for ALL assertions. _If an error occurs without presenting to the wdio framework as an error, the step will be marked "passed" despite the unhandled error._
-   **Fail:** A status of "failed" is given to a step where an assertion within an `expect` clause is not met. A stack trace for the failed assertion is added to the step in the report if a failure occurs.
-   **Broken:** If any command, _including assertions_, within a step does not complete, or presents an error, the step is marked by the reporter as "broken". A stack trace for the error encountered is added to the report if a step breaks.

### **Remote Execution Reporting**

The results for a run are created on the host machine controlling the tests regardless of where the test sessions are hosted. In short, if you run the command `npm run test` from your local machine, the results will be generateed on your local machine.

The same applies to executions within our implementation of CodeBuild.

Since a temporary virtual machine is created by CodeBuild to execute the `npm run test` command, the results from the test execution are created on that machine and must be stored in a permanent external location to be accessible outside of the CodeBuild run itself.

In order to acheive this, our current implementation compresses the contents of the `allure-results` folder into a `results.zip` file, then uploads the resulting compressed file to the [qa-proctoru-testresults](https://s3.console.aws.amazon.com/s3/buckets/qa-procotoru-testresults?region=us-east-1&tab=objects) bucket under a "folder" named `Reports`.

The results can then be pulled from the bucket and used to generate the report, along with the history that is created during report generation and stored in the same `Reports` folder in S3.

The complete order-of-operations looks like this:

1. (On CodeBuild VM) - Results are generated by the test runner and stored on the temporary virtual machine in [CodeBuild](https://console.aws.amazon.com/codesuite/CodeBuild/373442825633/projects/arch-ui-test/history?region=us-east-1&builds-meta=eyJmIjp7InRleHQiOiIifSwicyI6e30sIm4iOjIwLCJpIjowfQ) during test execution to a folder named `allure-results` as set by the `outputDir` in the [reporters config file](config/wdio/lib/reporters.ts).
2. (On CodeBuild VM) - The `allure-results` folder is then compressed via a call to the [zipDir](reporting/zipResults.ts) method and output as `results.zip`.
3. (On CodeBuild VM) - The `results.zip` file is then output as a [build artifact](https://console.aws.amazon.com/codesuite/CodeBuild/373442825633/projects/arch-ui-test/details?region=us-east-1) and stored in the [qa-proctoru-testresults](https://s3.console.aws.amazon.com/s3/buckets/qa-procotoru-testresults?region=us-east-1&tab=objects) bucket under a "folder" named `Reports`.
4. The `results.zip` folder is then retrived from the S3 bucket via a call to the [getFromS3](reporting/getResultsFromS3.ts) method and subsequently unzipped via a call to the [unzip](reporting/unZipResults.ts) method. The `allure-results` folder that was created during test execution is then available in the base directory where the calls to the aforementioned methods are made. _(Note: If an `allure-results` folder already exists in the base directory on the host machine, it will be renamed automatically to preserve the ability to view previous results)_
5. The history (if present) is then downloaded from S3 via a call to the [getFromS3](reporting/getHistory.ts) method and subsequently unzipped via a call to the [unzip](reporting/unzipHistory.ts) method and added to the `allure-results` folder to be used during generation of the report.
6. The [test categorization script](reporting/categorizeTests.ts) is then executed and a `categories.json` file is added to the `allure-results` folder to be used during generation of the report.
7. Allure is then used to generate the report by running the [allure-generate](https://docs.qameta.io/allure/#_generate_the_report) command. This creates all necessary files for hosting the report and creates a new `history` containing the history downloaded in step 5 along with the results from the current report.
8. The history is then uploaded to S3 using [the upload history script](reporting/sendHistoryToS3.ts), overwriting the `history.zip` file if already present in the bucket.
9. The report is then hosted on a small server created on the host machine via one of two methods: Method 1) By utilizing Allure's built-in report hosting via running `allure open` commmand. -or- Method 2) By utilizing the [http-server](https://www.npmjs.com/package/http-server) package to serve the report files.

The Allure report will then be available to view at the address printed to the console from step 9:

```
~ Server started at <http://{{ip_address}}:{{port#}}>. Press <Ctrl+C> to exit
```

See [Allure Docs](https://docs.qameta.io/allure) for a description of the report and its available features.
