# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sxsw', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='time',
            new_name='start_time',
        ),
        migrations.AddField(
            model_name='event',
            name='end_time',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
    ]
