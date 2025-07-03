### Bug ID: #SU-001 – Unsuccessful sign-up with valid credentials

**Severity:** High 
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/register
2. Enter "Hallegracecooper" in the username field
3. Enter "Hallegracecooper@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is redirected to their new account dashboard.  
**Actual Result:** User is stuck on the register page, all fields still have the information input.  
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_SU-001



### Bug ID: #SU-002 – Sign-up neither fails or passes when using an existing email address

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/register
2. Enter "JacobBlacktheWolf" in the username field
3. Enter "Hallegracecooper@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the email is already in use.  
**Actual Result:** User is stuck on the register page, there is no apparent and clear notification of failed entry due to reused email address.  
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_SU-002



### Bug ID: #SU-003 – Sign-up neither passes or fails when using an existing username

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/register
2. Enter "Hallegracecooper" in the username field
3. Enter "JacobBlacktheWolf@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the username is already in use. 
**Actual Result:** User is stuck on the register page, there is no apparent and clear notification of failed entry due to reused username.  
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_SU-003



### Bug ID: #SU-004 – Sign-up neither passes nor fails when password lacks required complexity

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/register
2. Enter "JacobBlacktheWolf" in the username field
3. Enter "JacobBlacktheWolf@gmail.com" in the email field
4. Enter "1234556!" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the password does not meet complexity requirements.
**Actual Result:** User is left on the register page, there is no apparent and clear notification of failed entry due to the password not following the guidelines.
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_SU-004



### Bug ID: #LG-001 – Login neither passes nor fails with valid email & password

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is redirected to their account dashboard, account username showing on the top of page confirming login.
**Actual Result:** User is not redirected to dashboard, left on the login page, appears that nothing has happened.
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_LG-001



### Bug ID: #LG-002 – No apparent notification of failure due to empty password field in the login page

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallegracecooper@gmail.com" in the email field
3. Leave the password field empty
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is missing.
**Actual Result:** User is left on the Login page, there is no indication or clear message of failing the login due to empty password field. 
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_LG-002



### Bug ID: #LG-003 – No apparent notification of failure due to empty email field in the login page

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/login
2. Leave the email field empty
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is missing.
**Actual Result:** User is left on the Login page, there is no indication or clear message of failing the login due to empty email field.
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_LG-003



### Bug ID: #LG-004 – No apparent notification of failure due to incorrect password field in the login page

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecoop@gmail.com" instead of "Hallegracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r*!JW" in the password field
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that email is not recognized or incorrect.
**Actual Result:** User is left on the Login page, there is no indication or clear message of failing the login due to incorrect email field.
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_LG-004



### Bug ID: #LG-005 – No apparent notification of failure due to incorrect password field in the login page

**Severity:** MEDIUM
**Steps to Reproduce:**
1. Go to https://demo.realworld.io/#/login
2. Enter "Hallgracecooper@gmail.com" in the email field
3. Enter "3!@qWgB/y?r!JW" in the password field instead of "3!@qWgB/y?r*!JW"
4. Click the "Sign in" button

**Expected Result:** User is denied login, notification reads that password is incorrect.
**Actual Result:** User is left on the Login page, there is no indication or clear message of failing the login due to incorrect password field.
**Environment:** Chrome 125 / Windows 11  
**Screenshot:** screenshots/bug_report_LG-005