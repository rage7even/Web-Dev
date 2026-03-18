import re

def is_valid(card):

    pattern = r'^[4-6]\d{15}$|^[4-6]\d{3}(-\d{4}){3}$'
    if not re.match(pattern, card):
        return False

    digits = card.replace("-", "")

    if len(digits) != 16:
        return False

    if re.search(r'(\d)\1{3,}', digits):
        return False

    return True

n = int(input())
for _ in range(n):
    card = input().strip()
    print("Valid" if is_valid(card) else "Invalid")
