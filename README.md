## High-level Description:

'Connect the Dots' is an anonymous social web application that allow anonymous users to pour out those annoying issues (secrets, stress, trouble or persistence,etc) without any concerns and pass their love and warmth to others. After registering for an account and login, an user can create diaries entries that contain texts, videos, audios, pictures and store them in a safe place for later access and management. Data on the user's diaries entries are also calculated and showcased in the forms of beautiful pie charts. The user can also write anonymous messages and send them out to the world and receive back replies from other users as well as having instant text-based chat with a random stranger.

## Project Description: 
*Who is it for?*

The Application is intended for everyone, especially people with the needs for human communication and understanding, social interactions, self-expression, and sharing of thoughts. 

*What will it do? (What "human activity" will it support?)*

‘Connect the Dots’ will allow anonymous users to pour out those annoying issues (secrets, stress, trouble or persistence,etc) without any concerns and pass their love and warmth to others.

We are all one small dot in this vast universe, independent but could also be connected. Our application aims to gather those original anonymous ‘dots’ who seek for a tree hole or companionship and let them build up their own connections; know themselves better and in order to fully accept themselves through the pouring out; finally healing each other during the connections. Users can not only record their diary through text, image, audio and video here but also can form the communication with random strangers through the virtual message in the bottle or the tree hole posts which refers to the anonymous blogs, or instant messaging.

*What type of data will it store?*

We will store a lot of diary entries in the forms of texts, pictures, and videos. Users' information like name, date of birth, password, profile picture, and description will also be encrypted and stored. Additionally, we will also store chat logs and messages in the forms of texts, pictures, and videos. 

*What will users be able to do with this data?*

The users can see all data related to their accounts by accessing the Application’s graphical user interface.

*What is some additional functionality you can add/remove based on time constraints?*

We are aiming to allow users to play mini games as well as having video/audio calls with each other. Based on time constraints, we will either include or exclude it from the final deliverable.

## Project task requirements: 

*Minimal requirements (will definitely complete)*

1. Allow users to create accounts.✅
2. Allow users to modify their accounts (profile pictures, description, etc.)✅
3. Allow users to write and store diary entries in the form of pictures, text, videos and audios.✅
4. Allow users to send messages in the form of text, pictures, videos and audios to random strangers and get their responses.✅
5. Allow users to send messages in the form of text, pictures, videos and audios into a public space where all users can see and respond.✅

*Standard requirements (will most likely complete)*

1. Allow users to search for the diary entry by dates, key words and weather, emotion, activite tags that they added to their diaries.✅
2. Allow users to view the diary-related data in the form of pie chart and table which will display the distribution of different tags that assigned to each diary entry in a month.✅
3. Allow users to favorite their preferred diaries.✅
4. Allow users to edit their diary entries.✅
5. Allow users to delete their diary entries.✅

*Stretch requirements (plan to complete at least 1!)*
1. Allow users to connect to a random stranger and have a text-based chat.✅
2. Allow users to add friends through search or 'add' button beside user name.
3. Allow users to connect via video and/or audio call to a random stranger.


## Unit 1-5 Technique Usage:

#### HTML/CSS/Javascript:

Since our project is a web application HTML is an inevitable choice of technology to use since it is the building blocks for web pages. We chose to use pure CSS instead of its alternative superset like SASS due to the fact that we can still achieve optimal outcomes with CSS (highly responsive, and nice looking UI and effects) and SASS actually introduces more overhead compilation compared to the lightweightness that CSS possesses. Finally, we chose to use Javascript instead of some notable alternative like Typescript since if we are using Typescript we will need more resources to transpile the codes at runtime and any object orientedness or modulation required in our application is taken care of by React.

#### React:

React is the framework we chose for our front-end. It brings together HTML, CSS, Javascript seamlessly and enhances development efficiency thanks to features like reusable components, open source and rich toolset as well as its capabilities in producing high performance Dynamic Web Applications (our web application is very fast and efficient during runtime). Compared to other alternatives like Angular, React triumphs for its easier learning curve, support for HTML/CSS/Javascript, reusable components, and uses of third party libraries (Redux, etc.) that allow for deep customization.

#### Node & Express
Express as a NodeJS framework to create a REST API server to handle all of our requests coming from the front-end has an incredibly easy to use API, which reduces our ramp up time by a significant amount of time. It is also highly flexible and configurable, allowing us to use multiple middlewares, libraries to customize our server so that it can handle requests from many routes, ensuring the separation of concerns in our application, as well as parse, process, and store media files of multiple types on our server. Comparing Express to Django, another popular alternative, it is clear that Express is a much more suitable choice for our application for its speed, simplicity, scalability, full-stack support, third party libraries supports, as well as it being a Javascript framework helps reducing the range of our tech stack for better management and maintenance.

#### MongoDb:
Being a No-SQL database program, MongoDB allows our application to store data in highly flexible models with a multitude of structures that are suitable for many different features that our application has. Compared to other SQL database programs, MongoDB is clearly the better choice of tech for our application due its speed, horizontal scalability, low hardware costs, high availability and fault tolerance. Not only that, the existence of Mongoose as an ODM library available for NodeJS (the technology we use for our back-end server), which provides our Node/Express server with ease of access to MongoDB as well as a straight-forward, schema-based solution to model our application data in MongoDB, further validates our choice to use this technology in our project.

#### Heroku:
We deploy our application using Heroku, which offers both a CLI and a GUI and it allows us to deploy, manage, and scale our web application seamlessly. Additionally, it is highly customizable with third party add ons, provides free hosting, and last but not least, it works well in combination with Github Actions to set up a CI/CD workflow for our project from our Git repository to our live application. Compared with AWS Elastic Beanstalk, a similar technology, Heroku is much more beginner friendly with low ramp-up time and it does not require advanced DevOps knowledge to set up and maintain.

## Above and Beyond’ functionality

 - The major ‘Above and Beyond’ functionality in our project is the chatroom function inside the message page. The chat room function allows users to start a real-time chat with a random user. The chat room is private and all the messages are visible between two users in the conversation. The chat room is basically implemented by using socket.io. We learned from the TCP connection and used a similar idea to set up a connection between two clients. The server responses for transmitting the private message only to its target client (user). From our perspective, this functionality is beyond the initial requirement of our course since we use the external socket.io JS framework to construct the chatroom. The framework helps us to set up the real-time, bidirectional and event-based communication between users.
 -  Another ‘Above and Beyond’ functionality allows users to view the diary-related data in the form of pie charts and tables,  which will display the distribution of different tags that users assigned to each diary entry in a certain month. We implemented it through the chart.js framework. Chat.js is widely used when developers want to give users better data visualization. Firstly, we filtered out the diary for the selected month and then counted the number of tags for weather, emotion and activity. Setting the summary data and configuration allows us to implement wonderful dynamic pie charts as we want. Moreover, the data table allows users not only to have a better data visualization but also view the exact number of each tag directly. 
 -  Last but not the least, our application allows users to publish the post with all forms of media files, the upload and storage of these files is quite different from the simple text. Therefore, we utilized the firebase to store them and transfer it to an url and finally store the urls into our Mongodb. We created a customized hook to help us finish these transfer operations through firebase.


## Next Step Development:

As for our next step, first of all, we will encrypt our user’s password through connecting with the firebase authentication system which will help to improve the security of our application. Secondly, considering a user may store a large amount of diary entries or there will be many posts in the tree hole section, we will add the pagination component to restrict the post/entry numbers that will be shown on each page. Last but not the least, we decide to add a function that could allow users to add friends after they met a like-minded person through our message-related functions, in order to let them have further connections.

## Team contributions:

#### Eddy Dinh:

I developed and delivered both the front-end and the back-end of the Drift Bottle and the Tree Hole features, using React, HTML, CSS, Javascript in combination with the material/ui library to create a highly responsive and beautiful UI as well as using Express to create server endpoints, which, in combination with Mongoose and Node’s file system, facilitates users’ needs to create and send anonymous messages to the world as well as receiving some responses back. I also took on a leadership role to initiate the development process of our project by setting up the initial Git repository (setting up branch protection rules to facilitate code reviews, determining the Git workflows so that we can work in parallel without conflicts, etc.). In addition to that, I also set up the initial states of our front-end in React (installing React, coding up the skeleton of the app, designing the file structure and development practices, etc.), our back-end in Node/Express/Mongoose (setting up the initial Express server with Mongoose used to connect to Atlas MongoDB, setting up appropriate middleware, and multiple routes and endpoints used for different features of our application, etc.), and our MongoDB database (registering for an Atlas cluster and creating a connection to it from our server through Mongoose).

#### Yang Liu:

I was responsible for making all user relevant functionalities. For example, I designed the login page, create-account page and account information page. The user information is uploaded to mongodb and  is able to change in the account page. I also help to connect the user with other pages by passing the user information into pages, so that diaries and other data can be saved under a particular user. In this process of building user relevance functionalities, I have used mongodb,  material UI and firebase.
In addition, I developed the backend part of the chat room. The chat room allows users to chat with a random user online. The chat room is private and all the messages are visible between two users in the conversation. The chat room is basically implemented by using socket.io.

#### Jiapei Yu:

I was responsible for the data summary part in our project, which summarizes the number of each different tag user used for a selected month, using chart.js. For example, you can see the clear pie chart for August, which shows how many diary entries you are tagged with sunny day, touched emotion and dancing activity. And also implemented a table to show the exact number of each tag for a selected month, which can also be shown by hovering the pie chart.
Also implemented the frontend part of the chat room which allows users to chat with a random user online and diary record. Also, I draw the questionnaire and the book framework in diary records.

#### Wenxi Li:

I have developed both front-end and the back-end of all the  diary-related functions which includes recording the diary entry in the form of text, audio, picture and video, edit, delete and favorite diary entry, as well as search diary entry by keyword, data and related tags.
Moreover, I deployed our front-end and back-end and our chat room server on the heroku and also set up the github actions for auto-deploy.
As for other aspects, I worked as a scrum leader who set up the weekly plan and distributed the weekly works for our members; helped to resolve the merge conflicts, did the documents and code cleanliness check, set up the final presentation flow and powerpoint for our group.






## Lo-fi Prototype Sketches:

![Alt Text](./sketches/Function1.gif)
Allow users to write and edit and store diary entries in the form of pictures, text, videos, etc.

![Alt Text](./sketches/Function2.gif)
Drift bottle: Allow users to send messages, pictures, videos (anonymously or non-anonymously) to random strangers and get their responses.

![Alt Text](./sketches/Function3.JPG)
Tree hole post: Allow users to send messages, pictures, videos (anonymously or non-anonymously) into a public space where all users can see and respond.



