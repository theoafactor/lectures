## import Numpy
import numpy as np

## import Counter
from collections import Counter

## import Matplotlib
from matplotlib import pyplot as plt

## import csv module
import csv


# 1. Load in the csv data
with open("students.csv") as csv_data:
    csv_dictionary_data = csv.DictReader(csv_data)

    ## load this into data_collections
    data_collections = []
    courses = []
    average_scores = []

    #print(next(csv_dictionary_data))
    for single_row in csv_dictionary_data:
        data_collections.append(single_row)
        courses.append(single_row['Courses'])
        average_scores.append(single_row['Average Score(%)'])

    
    # print(data_collections)
    # print(average_scores)
    # print(courses)


    plt.bar(average_scores, courses)

    plt.show()