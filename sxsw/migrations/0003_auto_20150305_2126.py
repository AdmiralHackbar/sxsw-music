# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sxsw', '0002_auto_20150224_0545'),
    ]

    operations = [
        migrations.CreateModel(
            name='Showcase',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField()),
                ('venue', models.ForeignKey(to='sxsw.Venue')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='event',
            name='showcase',
            field=models.ForeignKey(to='sxsw.Showcase', null=True),
            preserve_default=True,
        ),
    ]
