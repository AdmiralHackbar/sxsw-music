# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('name', models.CharField(max_length=255, serialize=False, primary_key=True)),
                ('genre', models.CharField(max_length=255)),
                ('url', models.CharField(max_length=255, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.CharField(max_length=16, serialize=False, primary_key=True)),
                ('time', models.DateTimeField(null=True)),
                ('artist', models.ForeignKey(to='sxsw.Artist')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Venue',
            fields=[
                ('name', models.CharField(max_length=255, serialize=False, primary_key=True)),
                ('address', models.CharField(max_length=255)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='event',
            name='venue',
            field=models.ForeignKey(to='sxsw.Venue', null=True),
            preserve_default=True,
        ),
    ]
