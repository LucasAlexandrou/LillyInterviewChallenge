# Lucas Alexandrou's Documentation

## Introduction
- Starting off this project, I had no experience with python and very limited experience with javascript. I had only looked at using javascript for some very basic animations as part of some university work. 
- So I started off very limited in my ability to complete this challenge and because of this I used many different resources, mostly youtube tutorials from some popular tech creators like Bro Code and Digital Fox and some forms/sites like W3Schools and StackOverflow. 

## Approach
- My approach was to start off with getting the full functionality of the page done first. After everything was working then I would start working on customising the page's design and making it look nice. I completed the objectives in this way as I feel like having a website that actually works is more important than having a site that looks good but does not work, and also having the functionality done first would allow me to have the actual content on the site so I can stylise it. Without any content on the page it would be much harder for me to style it.
- Before starting I researched a lot as previously mentioned, learning the basics of what I would have to do, like learning how to fetch api data, async and await, loops and event listeners. 
- After researching I started on the javascript and testing everything was working by using the console, then I adjusted the html to get the api's content on the page.
- From there I went to Lilly's website to get some inspiration for the page, and I noted that Lilly used rounded shapes/boxes, and used a mix of white red and a light beige.
- Then I started applying this theme to my own page until I had something I was happy with.
- After this I started on the optional objective. Python was something very new and different for me so I went to one of my lecturers in case I needed help.
- After getting the the optional task working, I added it with html and then changed up the css style to fit it in. 

## Objectives - Innovative Solutions
- I talk a lot about how I went through some of the objecgtives through out, however there are still some specific features I would like to talk about here
- For the javascript I used asynchronous methods. At first it was just because I leared fetching api data using asynchronous javascript so that was simply the way I was taught it, however I found that it is also beneficial for the page, as it makes sure that while getting the data from the backend, UI does not freeze, data is updated smoothly, so no outdated data is shown, and no other tasks are not being blocked. 
- There was a lot of smaller things that I was proud of, I believe I managed to get a very simplistic but clean look to the page, using shadows, alternating rows in the table, rounded shapes, resseting input fields and reloading the data after submitting a new medicine.
- There were definetely areas where I re-wrote sections or attempted things multiple times. One of these includes python which I go into more detail later on. CSS was a trial and error process until I managed to get what I wanted, trying out different styles. HTML was rewritten a few times to get the CSS working properly, and to make room for the optional challenge, displaying the average price.

## Problems Faced
- As I have mentioned a few times Python is new and different for me. I took a different approach to the one I took for the javascript. As I had a few examples to go off of already in the backend I started by looking through those. 
- I then copied the function to get all the medicines data. All I had to do from this was modify it to actually calculate an average and return that instead of all the data. 
- As previously mentioned I went to my lecturer for help, who also had limited experience with python. However we were quickly able to get something that looked like it would work.
- There was one issue which was the null values in the prices.
- To fix this issue we both looks online for anything and we found the filter method. We then tried applying this and it took us a few times but eventually we got it working. 
- Using the filter method I also made sure the average did not account for any medicines without a name as well. 

## Evaluation
- It was not too challenging overall, but it definitely took me longer than the time needed as I had to do a lot of research before hand and some trial and error with the optional challenge. However this was fine as I was ahead in all of my uni work and had time to spare anyway. 
- I believe the javascript definetely went the best, it was fairly straight forward after the research and compared to some of the other apsects like css which I had to do a lot of trial and error until I got a style that I thought was good, the javascript went well first try. 
- If I had more time I would expand on everything, add more content maybe such as more details about the medicines, add some more functionality, for example if you clicked on a medicine in the table, it would take you to a dynamic page that gives you more information about the medicine you specifically clicked on. Or I could actually implement some of the other backend functionality on the site like being able to update a particular medicines information, or delete a medicine straight from the page.
