import numpy as np
from matplotlib import pyplot as plt

## plotting multiple bars are often not easy to make compared to regular ones
## - first you need a library called numpy
## - this library can be installed using -> pip install numpy

## sample ages of students
ages = [1, 2, 3, 4, 5]


## sample python scores
python_scores = [10, 45, 20, 30, 90]

## sample javascript scores
javascript_scores = [12, 33, 43, 78, 87]


## - What we want to do is plot the ages against python_scores and javascript_scores
'''
    If we do it this way, the plots will all be made as stacks over one another. Making the readings meaningless.
    see snippet "multiple_bars_wrong.py" for an example.

    STEPS TO PLOTTING MULTIPLE BARS
    1. Import Numpy library
    2. Create a numpy array based on the ages data
        -> numpy_indexes = np.arange(len(ages)) ------------------- (1)
    3. Set a width to enable the plots to arrange side by side
        -> subtract this width from the numpy indexes in the first plot and add to the last plot
    4. Plot the indexes 1 above against the data you have
        -> e.g. plt.bar(numpy_array - width, data1) and plt.bar(numpy_array, data2)
'''


## create the numpy indexes
ages_numpy_indexes = np.arange(len(ages)) ## ------> numpy array 


## set the custom width
custom_width = 0.2

## make the plots, remove the custom width from the first plot and add to the second plot
## set the width of the entire plot to the custom width
plt.bar(ages_numpy_indexes - (custom_width / 2), python_scores, width=custom_width)  # ----> for python scores
plt.bar(ages_numpy_indexes + (custom_width / 2), javascript_scores, width=custom_width) # ---> javascript scores





## show the plots
plt.show()



# plt.bar(ages_indexes - (custom_width/2), python_scores, width=custom_width, label='Python Scores') ##plot ages against python scores

# plt.bar(ages_indexes + (custom_width/2), javascript_scores, width=custom_width, label='Javascript Scores') ##plot ages against javascript scores

# plt.xticks(ticks=ages_indexes, labels=ages)

# plt.legend()






# plt.show()