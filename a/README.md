
## How To Run Containers

### Steps to run nodejs container

1. Ensure you are in the directory `/a/application`
2. Run `docker build -t application . ` to build image
3. Run `docker run -d -p 3000:3000 --name node-app application` to build container

Visit `http://localhost:3000` to ensure the nodejs application is working (it will serve a simple html file). 

### Steps to run nginx-proxy container

1. Ensure you are in the directory `/a/nginx`
2. Run `docker build -t nginx-proxy .` to build image
3. Run `docker run -d -p 80:80 --link node-app:server --name nginx-proxy nginx-proxy` to build container and link nginx-proxy container to the nodejs container

Visit `http://localhost` to see that the reverse proxy passes requests to `/` to the node application on port `3000`.  

