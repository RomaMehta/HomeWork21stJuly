$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/TrialCucumber/OrangeHRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "log in",
  "description": "",
  "id": "log-in",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6187451387,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a User, I should be able to log-in with valid credentials.",
  "description": "",
  "id": "log-in;as-a-user,-i-should-be-able-to-log-in-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be logged in and able to see welcome message.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 158045081,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 1853142977,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2489430822,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_logged_in_and_able_to_see_welcome_message()"
});
formatter.result({
  "duration": 722321374,
  "status": "passed"
});
formatter.after({
  "duration": 556247278,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "log-in;invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ],
      "line": 18,
      "id": "log-in;invalid-credentials.;;1"
    },
    {
      "cells": [
        "Test",
        "Test123",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "log-in;invalid-credentials.;;2"
    },
    {
      "cells": [
        "Test",
        "admin123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "log-in;invalid-credentials.;;3"
    },
    {
      "cells": [
        "Admin",
        "Test123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "log-in;invalid-credentials.;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "log-in;invalid-credentials.;;5"
    },
    {
      "cells": [
        "",
        "Test123",
        "Username cannot be empty"
      ],
      "line": 23,
      "id": "log-in;invalid-credentials.;;6"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 24,
      "id": "log-in;invalid-credentials.;;7"
    },
    {
      "cells": [
        "Test",
        "",
        "Password cannot be empty"
      ],
      "line": 25,
      "id": "log-in;invalid-credentials.;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2748234133,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 34133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1714810758,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 867610823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 236480955,
  "status": "passed"
});
formatter.after({
  "duration": 599184895,
  "status": "passed"
});
formatter.before({
  "duration": 2442712935,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 44374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "admin123",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1693847763,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 740882236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 224429323,
  "status": "passed"
});
formatter.after({
  "duration": 549005888,
  "status": "passed"
});
formatter.before({
  "duration": 2429741836,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Admin\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 41387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 37
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1693386963,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 1029512120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 221158921,
  "status": "passed"
});
formatter.after({
  "duration": 547462207,
  "status": "passed"
});
formatter.before({
  "duration": 2397900116,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 47787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1714874758,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 510402351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 223672415,
  "status": "passed"
});
formatter.after({
  "duration": 595594067,
  "status": "passed"
});
formatter.before({
  "duration": 2476576630,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 50347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 2153761346,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 601086977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 260144751,
  "status": "passed"
});
formatter.after({
  "duration": 548655168,
  "status": "passed"
});
formatter.before({
  "duration": 2448229738,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 41386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1616164103,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 485299407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 204067074,
  "status": "passed"
});
formatter.after({
  "duration": 542995005,
  "status": "passed"
});
formatter.before({
  "duration": 2446881471,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 40960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 1663515590,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 488453755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 206603181,
  "status": "passed"
});
formatter.after({
  "duration": 546011113,
  "status": "passed"
});
});