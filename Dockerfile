# Stage 1: Build the frontend React app
FROM node:16-alpine as build-step-frontend

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build

# Stage 2: Build the backend Django app
FROM python:3.9 as build-step-backend 

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY backend/ ./

# Copy the React build from Stage 1 to the Django static files directory
COPY --from=build-step-frontend /app/frontend/build ./static

EXPOSE 8000

CMD ["gunicorn", "-b", "0.0.0.0:8000", "wwywthm.wsgi:application"]
