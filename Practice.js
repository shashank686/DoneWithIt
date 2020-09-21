/*
    flex this property only apply for elements inside flex box 
    flex takes a number  ex 1 ,2  it is relative 

    default property of alignItems is stretched means it will cover  whole width or height given 

    flex-direction can also have row-reverse col-reverse name is the meaning 

    flex box is by default used by View and it's direction is col
    justifyContent: "flex-end", // it means in your working axes which for col is top to bottom and for row left to right
          // what you wanna do with multiple components which are in that axis

     
View ->UIView
The useState Hook provides us an array containing two values: The actual value of the state. 
A function to update that value.  

Regarding the answer, onChangeText is still a simple prop, that gives whatever is the value of the input field on every change.

->padding is the spacing between border and the content
-> margin is the spacing between border and surrounding content surrounding means other element  
->margin one thing that is not in css marginVertical it is present in react native 
->margin top bottom is also present in react native 

ScrollView vs FlatList

ScrollView should be used when you know how much data will be there and when we are working with less data 
because when 

using scrollview the part of the data that is being displayed on the screen will get render which is ok but 
which is not displayed will also first get rendered and then when every thing is rendered we gonna see our app
so time taken to load will increase for huge data 

Flatlist is good as it map the key by itself but we have to pass object {containg key or id property }and it acess it's key or id property
and set it to key 

flatlist have a function which render the component 

with help of key extractor we tell flatlist how to fetch key explicitly 

by default modal take full height and width of surroundings but not view it is by default
inside view of modal we used flex 1 to make sure that view take every height and width that is given by the parent com
ponent in this case it is modal is parent 



*/
