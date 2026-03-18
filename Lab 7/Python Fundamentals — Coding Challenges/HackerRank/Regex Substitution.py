import re

n = int(input())
lines = [input() for _ in range(n)]

for line in lines:
    line = re.sub(r'(?<= )&&(?= )', 'and', line)
    line = re.sub(r'(?<= )\|\|(?= )', 'or', line)
    print(line)
