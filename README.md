# futsalio_backend
futsalio for backend system

1. Schema`s
---

- **User**
    - `id`
    - `email`
    - `username`
    - `password`
    - `phone_number`
    - `full_name`
    - `point`
    - `id_role`
- **role**
    - `id`
    - `name`

2. Role List`s
    - SA 
        - Super Admin
    - AF
        - Admin Futsalio
    - OT 
        - Owner Tempat Futsal
    - AT 
        - Admin Tempat Futsal
    - Pengguna
        - Users Biasa ( pemain futsal yang ingin book lapangan )

3. Endpoint`s
---

- **user** /users/
    - `routes` 
        - post  : `/users/signup` | *user signup input data*
        - post  : `/users/signin` | *user signin by type email and password*
        - get   : `/users/:id_role` | *get all users by id_role*
        - delete   : `/users/:id` | *delete user by specific id*
        - put   : `/users/:id ` | *edit user by id*

- **role** /roles/
    - `routes`
        - post  : `/roles/` | *add new role for users auth*
        - get   : `/roles/` | *get all role*
        - get   : `/roles/:id_role` | *get role by id role need auth*
        - put   : `/roles/:id` | *edit role by id need auth*
        - delete    : `/roles/:id` | *delete by id role*

4. Example User Login Response

by inputing email and password on logging form you got respon token
```javascript
    email: youremail@email.com
    password: yourpassword
    {
    "token":         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbF9uYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTE3MDU4NjF9.jNgH6ZvrD2wDmd6bdpZ0vxRgcNgxNsU3UdLg2FRD4LA"
    }
```

if you want to authenticate this token place it in headers on your http request / AJAX.

5. API
```bash
ec2-52-221-217-60.ap-southeast-1.compute.amazonaws.com
```