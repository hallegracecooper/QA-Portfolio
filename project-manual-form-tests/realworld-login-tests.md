### TC-LG-001 – Successful login with valid email & password

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is redirected to their account dashboard.  
**Actual Result:**  
**Status:** 



### TC-LG-002 – Unsuccessful attempt with password field empty

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Leave the password field empty
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is missing.
**Actual Result:**  
**Status:** 



### TC-LG-003 – Unsuccessful attempt with email field empty

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Leave the email field empty
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is missing.
**Actual Result:**  
**Status:** 



### TC-LG-004 – Incorrect email

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecoop@gmail.com" instead of "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is not recognized or incorrect.
**Actual Result:**  
**Status:** 



### TC-LG-005 – Incorrect Password

**Precondition:** User has a valid Conduit account  
**Steps:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r!JW" in the password field instead of "3!@qWgB/y?r*!JW"
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is incorrect.
**Actual Result:**  
**Status:**
