#!/bin/sh
docker build --tag deno-docker-plain .
docker run -p 8080:8080 deno-docker-plain
