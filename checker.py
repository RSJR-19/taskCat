import os

answers = {
    "Array": "Array",
    "Prim": "Primitve",
    "Time": "Time",
    "Clar": "Clarity",
    "Link" : "Link",
    "Stack": "Stack",
    "Node": "Node",
    "Linear" : "Linear",
    "Algo" : "Algorithm",
    "Space": "Space",
    "Struc": "Structure",
    "Queue": "Queue",
    "Tree": " Tree",
    "False": "False",
    "Map": "Map",
    "True": "True",
    "Out": "Output",
    "Sort": "Sort",
    "Set": "Set",
    "Data": "Data",
    "Path": "Path"
}

chosen = []

while True:
    os.system('cls')
    for items in answers:
        if items not in chosen:
            print(f"{answers[items]}")
        else:
            continue
    
    choice = input('What to remove: ').title()
    if choice == "R":
        chosen = []
    elif choice == "C":
        os.system('cls')
    elif choice in chosen:
        print(f"{choice} is already answered.")
        input('confirm: ')
    elif choice not in answers:
        print(f"{choice} invalid.")
        input('confirm: ')

    else:
        chosen.append((choice))
