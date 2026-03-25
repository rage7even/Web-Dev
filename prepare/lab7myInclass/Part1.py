def sum_even(nums):
    total = 0
    for num in nums:
        if num % 2 == 0:
            total += num
    return total

def cnt_words(sentence):
    words = sentence.split()
    return len(words)

print(sum_even([1, 2, 3, 4, 5, 6]))   # 12
print(sum_even([1, 3, 5]))            # 0

print(cnt_words("Hello world"))     # 2
print(cnt_words("Python is great")) # 3
