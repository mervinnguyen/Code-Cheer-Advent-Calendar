def askQuestion(question, answer):
    user_answer = input(question + "\nYour answer: ")
    return user_answer.strip().lower() == answer.strip().lower()

def main():
    print("Welcome to the Holiday Quiz!")
    score = 0

    questions = [
    ("What is the name of the red-nosed reindeer?", "Rudolph"),
    ("Which holiday is celebrated on December 25th?", "Christmas"),
    ("What is the traditional drink served during Christmas?", "Eggnog"),
    ("What is the name of the Jewish holiday that lasts for eight days?", "Hanukkah"),
    ("Which holiday involves decorating a tree?", "Christmas"),
    ]

    for question, answer in question:
        if askQuestion(question, answer):
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer is '{answer}'.\n")

    print(f"Quiz over! Your final score is {score} out of {len(questions)}.")
    
if __name__ == '__main__':
    main()
