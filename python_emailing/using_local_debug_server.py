"""
    You can use your local server to debug sending emails. 
    To do this, run the following commands: 
        > python3 -m smtpd -c DebuggingServer -n localhost:1234
"""

import smtplib

with smtplib.SMTP("localhost", 1234) as smtp:
    # smtp.ehlo()
    # smtp.starttls()
    # smtp.ehlo()

    # smtp.login()

    try:
        smtp.sendmail("testwitholu@gmail.com", "theoafactor@gmail.com", "This is a message")
        print("Email sent")
    except:
        print("AN error occured")

        