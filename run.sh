#!/bin/sh
vagrant ssh -c 'source /usr/local/sxswapp/extras/environment_variables.sh && cd /usr/local/sxswapp && python manage.py runserver 0.0.0.0:8080'