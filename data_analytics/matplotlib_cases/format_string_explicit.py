from matplotlib import pyplot as plt


# lets setup our data

# Median Salaries for Office Assistants
median_salaries_for_assistants = [35000, 36000, 36600, 37000, 38000, 38030, 38037, 38420, 40000, 50000]

# Median Salaries for Truck Drivers
median_salaries_for_drivers = [25000, 26000, 26900, 29000, 30000, 32030, 31037, 32420, 35000, 36000]


median_ages = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34]


# Plot the graph

# 1. Plot the median ages against median salaries for assistants

## format strings are optional so you don't have to add them.

## if you want to add them, it should be before the label argument of the plot() method.
#'k' stands for black and '--' is the line format.
plt.plot(median_ages, median_salaries_for_assistants, color="k", marker="x", linestyle="--", label="Median Salaries for Office Assistants")


## set the format string for this second plot
# 2. Plot the median ages against median salaries for truck drivers
plt.plot(median_ages, median_salaries_for_drivers, color="g", marker="o", label="Median Salaries for Truck drivers")


plt.legend()  # <---- keep this method empty. This method must be declared!


# show the graph
plt.show()
