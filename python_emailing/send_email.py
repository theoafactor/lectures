### sending emails with Python can be done with a simple library available in Python out of the box: 
## -> smtplib library
## you need to import this library first

import smtplib

## use the with construct
with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
    smtp.ehlo() ## this identifies us with the mail server we are using

    ## encrypt the traffic
    smtp.starttls()

    smtp.ehlo()  ## this resolves the FQDN

    smtp.login(user="testwitholu@gmail.com", password="qtndobzooihelkam")

    subject = "Important Message"

    body = "This is seriously an important message"

    message = f"Subject: {subject}\n\n{body}"

    try:
        result = smtp.sendmail("testwitholu@gmail.com", "theoafactor@gmail.com", message)
        print("Your email has been sent successfully!")
    except: 
        print("There was an error sending this message")