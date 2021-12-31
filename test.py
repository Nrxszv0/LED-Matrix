f = [[0]*10]*4
arr = [[0 for i in range(10)] for j in range(4)]
arr[3][9] = 1
print(arr)

st = str(arr)
st = st.replace("[", "{")
st = st.replace("]", "}")

print(st)

textfile = open("example2.txt", "w")
a = textfile.write(st)
textfile.close()