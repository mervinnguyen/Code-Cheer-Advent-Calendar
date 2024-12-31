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