### TC-LG-001 – Successful login with valid email & password

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is redirected to their account dashboard, account username showing on the top of page confirming login.   
**Actual Result:**  User is not redirected to dashboard, left on the login page, appears that nothing has happened. 
**Status:** FAILED



### TC-LG-002 – Unsuccessful attempt with password field empty

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Leave the password field empty
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is missing.
**Actual Result:**  User is left on the Login page, there is no indication or clear message of failing the login due to empty password field. 

**Status:** FAILED



### TC-LG-003 – Unsuccessful attempt with email field empty

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Leave the email field empty
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is missing.
**Actual Result:**  User is left on the Login page, there is no indication or clear message of failing the login due to empty email field.
**Status:** FAILED



### TC-LG-004 – Incorrect email

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecoop@gmail.com" instead of "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is not recognized or incorrect.
**Actual Result:**  User is left on the Login page, there is no indication or clear message of failing the login due to incorrect email field.
**Status:** FAILED



### TC-LG-005 – Incorrect Password

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r!JW" in the password field instead of "3!@qWgB/y?r*!JW"
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is incorrect.
**Actual Result:**  User is left on the Login page, there is no indication or clear message of failing the login due to incorrect password field.
**Status:** FAILED
