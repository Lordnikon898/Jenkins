$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint5"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Error message validation while invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reporting"
    }
  ]
});
formatter.step({
  "name": "user enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin123",
        "Invalid Credentials"
      ]
    },
    {
      "cells": [
        "Hello",
        "Syntax123!",
        "Invalid Credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Syntax123!",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Error message validation while invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint5"
    },
    {
      "name": "@login"
    },
    {
      "name": "@reporting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Admin\" and \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Invalid Credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not correct error message is displayed expected:\u003cInvalid [C]redentials\u003e but was:\u003cInvalid [c]redentials\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.hrms.steps.LoginSteps.user_see(LoginSteps.java:76)\n\tat ✽.user see \"Invalid Credentials\"(file:///Users/lordn/eclipse-workspace/CucumberHRMS_Batch7/src/test/resources/features/Login.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Error message validation while invalid login");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message validation while invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint5"
    },
    {
      "name": "@login"
    },
    {
      "name": "@reporting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Hello\" and \"Syntax123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Invalid Credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not correct error message is displayed expected:\u003cInvalid [C]redentials\u003e but was:\u003cInvalid [c]redentials\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.hrms.steps.LoginSteps.user_see(LoginSteps.java:76)\n\tat ✽.user see \"Invalid Credentials\"(file:///Users/lordn/eclipse-workspace/CucumberHRMS_Batch7/src/test/resources/features/Login.feature:20)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "Error message validation while invalid login");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message validation while invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint5"
    },
    {
      "name": "@login"
    },
    {
      "name": "@reporting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Admin\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Error message validation while invalid login");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message validation while invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint5"
    },
    {
      "name": "@login"
    },
    {
      "name": "@reporting"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"\" and \"Syntax123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Error message validation while invalid login");
formatter.after({
  "status": "passed"
});
});