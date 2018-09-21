#!/bin/sh
DIR=/PATH/TO/DOCKERFILE

sudo docker build -t 10.0.0.0:5000/test_app $DIR
sudo docker push 10.0.0.0:5000/test_app
