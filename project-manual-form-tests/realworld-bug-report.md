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
**Screenshot:** 



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
**Screenshot:** 



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
**Screenshot:** 



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
**Screenshot:** 