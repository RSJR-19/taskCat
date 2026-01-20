def bubble(uns):
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(0, len(uns) - 1):
            if uns[i + 1] < uns[i]:
                uns[i + 1], uns[i] = uns[i], uns[i + 1]
                is_sorted = False

    return uns

def insertion(uns):
    for i in range(1, len(uns)):
        j = i
        while j > 0 and uns[j - 1] > uns[j]:
            uns[j], uns[j - 1] = uns[j - 1], uns[j]
            j -= 1

    return uns


def selection(uns):
    for i in range(0, len(uns)):
        min_val = i

        for j in range(i + 1, len(uns)):
            if uns[j] < uns[min_val]:
                min_val = j
            
            uns[i], uns[min_val] = uns[min_val], uns[i]

    return uns

arr = [2,3,4,1,23,5,6,3,4,5,8,2,9]
rex = [23,4,5,6,67,7,88,99,22,3,35,5,3]
hes = [234.4,2,3,34,2.2,1.4,566,7,78,9,23,4]

print(bubble(arr))
print(insertion(rex))
print(selection(hes))