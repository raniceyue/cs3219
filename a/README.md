
## How To

Ensure that you are in the directory assignment_a containing the dockerfile

To build the docker image, run

`docker build -t ranice . `

To create a container running the image, run

`docker run -it --rm -d -p 8080:80 --name ranice_container ranice`

This builds the container and forwards the contianer's port 80 to your local port 8080 assuming it's not currently being used

Access the server through entering `http://localhost` on your address bar, it should direct you to the server through the reverse proxy
