def generateElfName(firstName, lastName):
    firstNamePart = ["Jolly", "Merry", "Sparkle", "Twinkle", "Snowy", "Frosty", "Candy", "Ginger"]
    lastNamePart = ["Bells", "Snowflake", "Icicle", "Twinkletoes", "Sugarplum", "Peppermint", "Jingle", "Holly"]
    
    firstInitial = firstName[0].upper()
    lastInitial = lastName[0].upper()

    firstIndex = (ord(firstInitial) - ord('A')) % len(firstNamePart)
    lastIndex = (ord(lastInitial) - ord('A')) % len(lastNamePart)

    elfFirstname = firstNamePart[firstIndex]
    elfLastname = lastNamePart[lastIndex]

    return f"{elfFirstName} {elfLastName}"

if __name__ == "__main__":
    firstName = input("Enter your first name: ")
    lastName = input("Enter your last name: ")
    elfName = generateElfName(firstName, lastName)
    print(f"Your elf name is: {elfName}")