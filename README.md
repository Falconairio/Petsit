# Petsit

## App Description
This is an app used for having someone take care of and for taking care of pets. There will be multiple kinds of pets you can select for use in the features. You can register as a user and volunteer to take care of pets through requests. You can also register pets to you user and make requests for people to take care of your pet. On the main page there are all the requests filtered by date. There are buttons on the main page that filter the results by pet. Under the filter buttons there is a make request button where you can make a request for pet sitting, dog walking, fish feeding, whatever. 

---

## User Stories

* 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
* 

---

## Models 

User Model

```javascript 

{
    pictureUrl: {Type: String, required: true},
    email: {Type: String, required: true},
    password: {Type: String, required: true},
    name: {Type: String, required: true},
    age: {Type: Number, min: 18, required: true},
    description: {Type: String},
    location: {Type: String, required: true}
    pets: {Type: []},
}

```

Pet Model

```javascript

{
    name: {Type: String, required: true},
    age: {Type: Number, min: 18, required: true},
    description: {Type: String},
    breed: {Type: String},
    petType: {Type: String, required: true, enum: ['Dog','Cat','Bird','Fish','Rabbit','Reptile']},
    visible: {type: boolean, value: true}
    dietaryReq: {type: String}

}

```

Request Model 

```javascript

{
    requesterName: {Type: String, required: true},
    requestTitle: {Type: String, required: true},
    requestDesc: {Type: String, required: true},
    petPictureUrl: {Type: String, required: true},
    requestDate: {Type: Date, default: Date.now()}
}

```

---

## Views

---

## Routes 

| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Render `restaurant-details` view for the particular restaurant. |                                                          |


---