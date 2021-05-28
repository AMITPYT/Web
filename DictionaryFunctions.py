d1={"amit":"burger",
"aman":"roti",
"vippen":"chicken",
"pooja":{"Breakfast":"aloo ka paratha","launch":"rice dal","dinner":"rice chicken"}}
d1["jiju"] = "biryani"
d1["soni di"] = "noodle"
del d1["jiju"]
name =input("enter the name  :")
print(d1[name])