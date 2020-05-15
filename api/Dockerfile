# Pull the base image
FROM python:3

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /todooly
WORKDIR /todooly
RUN mkdir api
WORKDIR api
COPY requirements.txt /todooly/api
RUN pip install -r requirements.txt
