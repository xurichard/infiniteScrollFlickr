# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author_image',
            field=models.ImageField(default='hi', upload_to=b'blog'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='post',
            name='post_image',
            field=models.ImageField(default='', upload_to=b'blog'),
            preserve_default=False,
        ),
    ]
