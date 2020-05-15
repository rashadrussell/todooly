# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class TodoItem(models.Model):
    id = models.AutoField(
        primary_key=True,
    )
    text = models.TextField(
        max_length=500
    )

    class Meta:
        db_table='todo_item'
