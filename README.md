# yet-another-twitter-clone
Example of MEAN stack by building a simple Twitter clone application


## API part

The authentication is made by using a JWT(json web token). It also uses bcrypt for storing hashed passwords in the MongoDB database.

### Endpoints
```bash
POST /users/register
```

```bash
POST /users/authenticate   // Respond with a token
```

```bash
GET /users/profile         // Protected rout, it requires json web token to authorize
```
