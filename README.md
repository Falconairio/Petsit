# Petsit

![Petsit](https://user-images.githubusercontent.com/52801554/69431232-9b6a0380-0d37-11ea-8007-d48c551b3475.png)

---

## App Description
This is an app used for having someone take care of and for taking care of pets. There will be multiple kinds of pets you can select for use in the features. You can register as a user and volunteer to take care of pets through requests. You can also register pets to you user and make requests for people to take care of your pet. On the main page there are all the requests filtered by date. There are buttons on the main page that filter the results by pet. Under the filter buttons there is a make request button where you can make a request for pet sitting, dog walking, fish feeding, whatever. 

---

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **homepage** - As a user I want to be able to view all the information for the service 

- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **signup** - As a user I want to be able to sign up to use the features of the website
- **pet** - As a user I want to be able to see the pets registered to my account
- **pet/add** - As a user I want to be able to add pets to my account for use in our services.
- **pet/id** - As a user I want to be able to see the information for a sepecfic pet 
- **pet/delete** - As a user I want to be able to delete a pet from my account
- **request/id** - As a user I want to be able to view the information for a specific request
- **request/add** - As a user I want to be able to add a request to the site
- **request/delete** - As a user I want to be able to delete a specific request
- **user** - As a user I want to be able to see the information for my account 
- **user/edit-profile** - As a user I want to be able to edit the information for my account 

---

## Models 

User Model 

```javascript

{
    email: {Type: String, required: true},
    password: {Type: String, required: true},
    userId: {Type: Schema.Types.ObjectId, ref: 'User'},
    pictureUrl: {Type: String, required: true},
    name: {Type: String, required: true},
    age: {Type: Number, min: 18, required: true},
    description: {Type: String},
    location: {Type: String, required: true},
    pets: {Type: Schema.Types.ObjectId, ref: 'Pet'},
}

```

Pet Model

```javascript

{
    name: {Type: String, required: true},
    age: {Type: Number, required: true},
    petPictureUrl: {Type: String, required: true},
    description: {Type: String},
    breed: {Type: String},
    petType: {Type: String, required: true, enum: ['Dog','Cat','Bird','Fish','Rabbit','Reptile']},
    request: {Type: Schema.Types.ObjectId, ref: 'User'}
    visible: {Type: boolean, value: true},
    dietaryReq: {type: String}
}

```

Request Model 

```javascript

{
    requesterName: {Type: String, required: true},
    requestTitle: {Type: String, required: true},
    requestDesc: {Type: String, required: true},
    pet: {Type: Schema.Types.ObjectId, ref: 'Request', required: true},
    requestDate: {Type: Date, default: Date.now()}
}

```

---

## Views

---

## Routes 

## Routes 

| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/private`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password, userName,  }                                    |
| `GET`      | `/private/user`            | Private route. Renders `user` form view.             |                                                          |
| `PUT`      | `/private/user/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [userName], [imageUrl], [age], [description], [location], [pet]} |
| `GET`      | `/private/pet`               | Private route. Render the `pet-page` view.                  |                                                          |
| `GET`      | `/private/pet/:id`               | Private route. Render the `selected pet` view.                  |                                                          |
| `POST`     | `/private/pet/add`              | Private route. Adds a new pet for the current user.     | { name, age, breed, description, species, type, dietary_request, picture }                                 |
| `DELETE`   | `/private/pet` | Private route. Deletes the existing selected pet from the current user. |                                                          |
| `GET`      | `/private/request`               | Private route. Render the `request` view.                  |                                                          |
| `GET`      | `/private/request/:id`               | Private route. Render the `selected request` view.                  |                                                          |
| `POST`     | `/private/request/add`              | Private route. Adds a new request for the current user.     | { date, title, description, image }                                 |
| `DELETE`   | `/private/request` | Private route. Deletes the existing request from the current user. |                                                          |


---