from matplotlib import pyplot as plt

"""
    This snippet demonstrates the wrong way of plotting multiple bar plots. 
    To plot multiple bars, the recommended approach is to use numpy library
"""

## sample ages of students
ages = [1, 2, 3, 4, 5]


## sample python scores
python_scores = [10, 45, 20, 30, 90]

## sample javascript scores
javascript_scores = [12, 33, 43, 78, 87]



plt.bar(ages, python_scores)

plt.bar(ages, javascript_scores)


plt.show()

