def staircase(n):
    # Write your code here
    space = n - 1
    for n in range(1, n+1):
        print(" "*space + "#"*n)
        space -= 1

if __name__ == '__main__':
    n = 6

    staircase(n)
