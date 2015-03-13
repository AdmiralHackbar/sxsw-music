# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sxsw', '0003_auto_20150305_2126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='genre',
            field=models.CharField(max_length=255, null=True),
            preserve_default=True,
        ),
    ]
