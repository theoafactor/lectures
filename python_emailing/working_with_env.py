## the module of choice is here: python-dotenv

from dotenv import load_dotenv, dotenv_values
import os


##load the .env files
load_dotenv(override=True)

## dotenv_values() can also be used here 
## when dotenv_values() is used, the file to use as the .env file is passed
## e.g config = dotenv_values(.env)
## then the variable is used to retrieve data
## e.g username = config["EMAIL_USERNAME"]



username = os.getenv("EMAIL_USERNAME")


print(username)