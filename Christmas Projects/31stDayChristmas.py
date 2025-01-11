import random

def pairPeople(names):
    if len(names) < 2:
        raise ValueError("Need at least two people to pair up")
    
    givers = names[:]
    receivers = names[:]

    random.shuffle(givers)
    random.shuffle(receivers)

    #Ensure no one is paired with themselves
    for i in range(len(names)):
        if givers[i] == receivers[i]:
            return pairPeople(names)
        
    pairs = list(zip(givers, receivers))
    return pairs

if __name__ == "__main__":
    names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"]
    pairs = pairPeople(names)
    
    pairs = pair_people(names)

    print("Holiday Gift Exchange Pairs:")
    for giver, receiver in pairs:
        print(f"{giver} gives a gift to {receiver}")

#testing remote repository