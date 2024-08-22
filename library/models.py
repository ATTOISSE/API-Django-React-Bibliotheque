from django.db import models
from django.utils import timezone

class Book(models.Model):
    title = models.CharField(max_length=50,unique=True,db_index=True)
    author = models.CharField(max_length=30,db_index=True)
    gender = models.CharField(max_length=20,db_index=True)
    isbn = models.CharField(max_length=13, unique=True, blank=True, editable=False)
    publication_date = models.DateField()
    disponibility = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.isbn:
            self.isbn = self.generate_isbn()
        super().save(*args, **kwargs)

    def generate_isbn(self):
        last_isbn = Book.objects.order_by('-isbn').first()
        if last_isbn:
            last_number = int(last_isbn.isbn.split('-')[1])
            new_number = last_number + 1
        else:
            new_number = 1
        return f"ISBN-{new_number:03d}"

class UserBook(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    email = models.EmailField(blank=True,unique=True)

class LoanBook(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(UserBook, on_delete=models.CASCADE)
    borrowing_date = models.DateTimeField(default=timezone.now)
    return_date = models.DateField()