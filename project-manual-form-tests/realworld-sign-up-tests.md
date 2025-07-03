### TC-SU-001 – Successful sign-up with valid credentials

**Precondition:** 
1. The user is not currently logged in.
2. The email address has not been used before
3. The username is unique to the system
4. The password meets the character, number, and symbol requirements

**Steps:**
1. Go to https://demo.realworld.io/#/register
2. Enter "Hallegracecooper" in the username field
3. Enter "Hallegracecooper@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is redirected to their new account dashboard.  
**Actual Result:**  User is left on the register page, all fields still have the information input.
**Status:**  FAILED



### TC-SU-002 – Sign-up fails when using an existing email address

**Precondition:** 
1. The user is not currently logged in.
2. The username is unique to the system
3. The user is using an email that is already linked to an account
4. The password meets the character, number, and symbol requirements

**Steps:**
1. Go to https://demo.realworld.io/#/register
2. Enter "JacobBlacktheWolf" in the username field
3. Enter "Hallegracecooper@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the email is already in use. 
**Actual Result:**  User is left on the register page, there is no apparent and clear notification of failed entry due to reused email address. 
**Status:** FAILED



### TC-SU-003 – Sign-up fails when using an existing username

**Precondition:** 
1. The user is not currently logged in.
2. The email address has not been used before
3. The user uses a username that is already linked to an account
4. The password meets the character, number, and symbol requirements

**Steps:**
1. Go to https://demo.realworld.io/#/register
2. Enter "Hallegracecooper" in the username field
3. Enter "JacobBlacktheWolf@gmail.com" in the email field
4. Enter "3!@qWgB/y?r*!JW" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the username is already in use. 
**Actual Result:**  User is left on the register page, there is no apparent and clear notification of failed entry due to reused username. 
**Status:** FAILED



### TC-SU-004 –  Sign-up fails when password lacks required complexity

**Precondition:** 
1. The user is not currently logged in.
2. The email address has not been used before
3. The username is unique to the system
4. The password does not have any characters

**Steps:**
1. Go to https://demo.realworld.io/#/register
2. Enter "JacobBlacktheWolf" in the username field
3. Enter "JacobBlacktheWolf@gmail.com" in the email field
4. Enter "1234556!" in the password field
5. Click the "Sign in" button

**Expected Result:** User is denied account with a notification that reads that the password does not meet complexity requirements.
**Actual Result:**   User is left on the register page, there is no apparent and clear notification of failed entry due to the password not following the guidelines.
**Status:** FAILED