# Use a lightweight web server image
FROM nginx:alpine

# Copy all files into nginx's public folder
COPY . /usr/share/nginx/html

# Expose the default port used by nginx
EXPOSE 80
