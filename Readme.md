# News

A simple news app getting data from third party api's

## Installation

- First install docker into you system
- Download / Clone this project
- Open terminal to this project  
- Then run these commands:

```bash
  docker-compose build
  docker-compose up
```
- For running migration open new terminal and run these commands:

```bash
    docker exec -it backend sh
    php artisan migrate
```

Open `localhost:3000`

This is it !!! Enjoy!
