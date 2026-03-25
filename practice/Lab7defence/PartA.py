def find_max(nums):
    if len(nums) == 0:
        return None
    
    maxNum = nums[0]
    for num in nums:
        if num > maxNum:
            maxNum = num
    return maxNum

def cnt_vowles(text):
    vowles = "aeiuoAEIUO"
    cnt = 0

    for ch in text:
        if ch in vowles:
            cnt += 1
    return cnt

print(find_max([2, 5, -3, 59, 60,]))

print(cnt_vowles("I ustal Boss"))