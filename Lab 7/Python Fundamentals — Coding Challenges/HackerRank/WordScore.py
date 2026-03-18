def score_words(words):
    vowels = "aeiouy"
    score = 0
    for word in words:
        count = sum(1 for letter in word if letter in vowels)
        if count % 2 == 0:
            score += 2
        else:
            score += 1
    return score
