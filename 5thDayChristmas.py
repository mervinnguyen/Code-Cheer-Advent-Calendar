# December 5th - Python project 
# Engineer: Mervin Nguyen

#Steps
#1: Create a new directory for your project
#2: Inside the directory, create a python script
#3: Add to generate a greeting card with a festive ASCII border.

#testing version control on PC

def generateGreetingCard():
#create ASCII border
    border "*" * (len(message) + 4)
    print(border)
    print(f"* {message} *")
    print(border)

if __name__ == "__main__":
    message = "Happy holidays! Wishing you joy and peace."
    generateGreetingCard(message)