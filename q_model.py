# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("text-classification", model="Wyona/message-classification-question-other-smalltalk-modified")

print(pipe('How are you'))