import smtplib

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    ## - there will be no need to use FQDN resolution
    ## hence, the ehlo() and starttls() methods are not needed

    subject = "Core Important Message"

    message = f"Subject:{subject}\n\n This is the content of the message"

    smtp.login("testwitholu@gmail.com", "qtndobzooihelkam")

    try:
        smtp.sendmail("testwitholu@gmail.com", "theoafactor@gmail.com", message)
        print("Message has been sent")
    except:
        print("Could not send an email")