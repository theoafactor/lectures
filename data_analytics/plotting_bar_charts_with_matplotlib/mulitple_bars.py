import numpy as np
from matplotlib import pyplot as plt


custom_width=0.2

ages = [1,2,3,4,5]

python_scores = [10, 45, 20, 30, 90]

javascript_scores = [12, 33, 43, 78, 87]

ages_indexes = np.arange(len(ages))

print(ages_indexes)


plt.bar(ages_indexes - (custom_width/2), python_scores, width=custom_width, label='Python Scores') ##plot ages against python scores

plt.bar(ages_indexes + (custom_width/2), javascript_scores, width=custom_width, label='Javascript Scores') ##plot ages against javascript scores

plt.xticks(ticks=ages_indexes, labels=ages)

plt.legend()






plt.show()