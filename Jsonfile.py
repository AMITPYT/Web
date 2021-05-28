# import json
# data = '{"var1":"amit","var2":"aman","var3":"vippen"}'
# parsad = json.loads(data)
# print(parsad['var2'])



# import json
# data = {
# "var1":"amit",
# "var2":"aman",
# "var3":"vippen"
# }
# parsad = json.dumps(data)
# print(parsad)



import json
data = {
"var1":'amit',
"var2":'aman',
"var3":'vippen','amit'
"last":'kumar',
"class":"BCA",'computer science'
"city":"Ludhiana",
"Good college":False
}
print(json.dumps(data,indent=6))