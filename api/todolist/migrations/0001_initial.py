# Generated by Django 2.2.5 on 2020-05-15 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoItem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('text', models.TextField(max_length=500)),
            ],
            options={
                'db_table': 'todo_item',
            },
        ),
    ]