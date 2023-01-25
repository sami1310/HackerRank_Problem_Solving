def isBalanced(s):
    # Write your code here
    brackets = {'(':')','{':'}','[':']'}
    stack = []
    
    for char in s:
        if char in "({[":
            stack.append(char)
        else:
            if len(stack) == 0:
                return "NO"
            else:
                top = stack[-1]
                if char == brackets[top]:
                    stack.pop()
                else:
                    break

    if len(stack) == 0:
        return "YES"
    else:
        return "NO"
