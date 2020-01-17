# Note! build context is workspace root

# Use the small alpine image
FROM nginx:stable-alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy todos assets from build stage to nginx default www root
COPY ./dist/apps/todos /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
