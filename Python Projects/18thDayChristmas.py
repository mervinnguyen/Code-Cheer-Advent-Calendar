def generateElfName(firstName, lastName):
    firstNamePart = ["Jolly", "Merry", "Sparkle", "Twinkle", "Snowy", "Frosty", "Candy", "Ginger"]
    lastNamePart = ["Bells", "Snowflake", "Icicle", "Twinkletoes", "Sugarplum", "Peppermint", "Jingle", "Holly"]
    
    firstInitial = firstName[0].upper()
    lastInitial = lastName[0].upper()

    firstIndex = (ord(firstInitial) - ord('A')) % len(firstNamePart)
    lastIndex = (ord(lastInitial) - ord('A')) % len(lastNamePart)