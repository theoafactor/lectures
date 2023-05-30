import smtplib
from email.message import EmailMessage


# create the email object
email = EmailMessage()

email["Subject"] = "Work with Developers AgainZz"
email["From"] = "testwitholu@gmail.com"

email["To"] = "theoafactor@gmail.com"

email.set_content("This is the content of the message")


with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    ##login
    smtp.login("testwitholu@gmail.com", "qtndobzooihelkam")

    try:
        smtp.send_message(email)
        print("Email was sent successfully!")
    except:
        print("Something went wrong, could not send email")
    
