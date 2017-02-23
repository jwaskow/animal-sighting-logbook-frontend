# Animal Sighting Log

Link to application: https://jwaskow.github.io/animal-sighting-logbook-frontend/

Link to back-end repository: https://github.com/jwaskow/animal-sighting-logbook-api

## Description

This is a single page application that keeps a log of animals that a user has seen.  A user first creates an account, which they will use to keep track of all of the entries they make to the logbook.  When the user sees an interesting animal somewhere (park, zoo, forest) they can create an entry to the logbook with the type of animal, location seen, date seen, and a description of the animal.  The user can view all of their entries, edit specific entries, and delete any of their entries.

I began building this application by constructing the back-end API.  I created a table for posts (entries to the logbook), which a user has many of.  So, I set up a one-to-many relationship between the users and posts tables.  Once I confirmed the back-end met my expectations through the use of curl requests, I began work on the front-end.  Once the authorization (sign-up/in/out) was working, I made a form for the user to enter data into the posts table.  The information from the forms was converted to JSON and sent to the API, where it was added to the table.  I started with the POST and GET requests, and once those were working through the browser I completed the DELETE and PATCH requests.  I then used jQuery to hide and show content based on the user's actions, so the application felt more responsive.  Finally, I used Bootstrap to make an image carousel and I added colors and fonts.  One feature that I wanted to implement but couldn't due to lack of time is the ability to optionally submit a picture of the animal when creating an entry.  This would give the user more of a personal attachment to the application.  Other features I would like to add are the ability to sort posts by animal type, or the ability to have a list of your favorite posts.

#### User Stories

- As a user, I want to create an account so that I can sign in and view all of my posts.
- As a user, I want to be able to make a post so that I can have a log of all the animals I've seen.
 -As a user, I want to be able to have a list of my favorite posts, so that I can quickly view my most memorable sightings.
- As a user, I want to be able to view posts by animal type, so I can organize my posts.
- As a user, if I don't like a post I made I want to be able to delete it.
- As a user, I want to be able to submit a picture of the animal with my post.
- As a user, I want to be able to change a post I made previously

#### Wireframes

Link to wireframe album:  http://imgur.com/a/YGwZh
