# webserviceapi

This is an express JS API web-service,it is connected with online database mongobatlas.
This api is tested using POSTMAN.

//steps to run
1-)Download or clone the repository
2-)run app using command- "node server.js"
3-)In the POSTMAN send a user data using POST method of url "http://localhost:5000/reports"

the data in body is in json format like-
  { 
"userID": "user-1",
 "marketID": "market-1",
 "marketName": "Vashi Navi Mumbai",
 "cmdtyID": "cmdty-1",
 "cmdtyName": "Potato",
 "priceUnit": "Quintal",
 "convFctr": 50,
 "price": 700
  }
  
  after sending this data using POST method it stores in a mongodb database.
  
  Now when again we doing the same but of different -user lets user-2 ,
  the user details is stored in an array format eg- [user-1,user-2..]
  and the price value will updated to the mean values of these two users (first connvert using conversing factor),and stored in database.
  
  We can read data using get method targeting id like "http://localhost:5000/reports/607f1b2402890b0ba478b92a"
  Its give data in json format ,and the same is stored in mongodbatlas.
  Thats 'how this API works.
  
  DEEPESH ARYA
  18085021
  
