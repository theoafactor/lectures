from matplotlib import pyplot as plt


## lets setup our data
median_salaries = [35000, 36000, 36600, 37000, 38000, 38030, 38037, 38420, 40000, 50000]
median_ages = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34]


## Plot the graph
plt.plot(median_ages, median_salaries)

## show the graph
plt.show()