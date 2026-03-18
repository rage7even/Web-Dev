from itertools import groupby

s = input().strip()

result = []
for digit, group in groupby(s):
    count = len(list(group))
    result.append(f"({count}, {digit})")

print(" ".join(result))
