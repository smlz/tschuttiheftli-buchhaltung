from collections import defaultdict
import json

# Get data from https://www.stickermanager.com/en/collection/3570/tschuttiheftli-wm-2018
# grep -v ">" data.html  > data.txt

with open("data.txt") as f:
    lines = [line.strip() for line in f]

data = defaultdict(list)

while lines:
    number = int(lines.pop(0))
    name = lines.pop(0)
    category = lines.pop(0)
    lines.pop(0)   # value
    lines.pop(0)   # likes
    data[category].append({"number": number, "name": name})

print(json.dumps(data, indent=4, separators=(',', ': ')))