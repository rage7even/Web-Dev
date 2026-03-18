a, b = int(input()), int(input())
print(*[i for i in range(a, b + 1) if i % 2 == 0])