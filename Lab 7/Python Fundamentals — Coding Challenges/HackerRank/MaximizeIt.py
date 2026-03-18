from itertools import product

def maximize_modulo(K, M, lists):
    max_value = 0
    for combination in product(*lists):
        total = sum(x**2 for x in combination) % M
        max_value = max(max_value, total)
    return max_value

K, M = map(int, input().split())
lists = []
for _ in range(K):
    data = list(map(int, input().split()))
    lists.append(data[1:])

print(maximize_modulo(K, M, lists))
