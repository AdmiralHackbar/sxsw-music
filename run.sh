#!/bin/sh
vagrant ssh -c 'cd /usr/local/sxswapp && python manage.py runserver 0.0.0.0:8080'