# Generated by Django 5.0.7 on 2024-08-21 23:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0002_rename_actor_book_autor'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='autor',
            new_name='author',
        ),
    ]
