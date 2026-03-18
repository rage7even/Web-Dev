system_ans, student_ans = int(input()), int(input())

if system_ans == 1:
    print("YES" if student_ans == 1 else "NO")
else:
    print("YES" if student_ans != 1 else "NO")
