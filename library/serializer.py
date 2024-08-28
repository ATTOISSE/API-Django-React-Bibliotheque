from rest_framework import serializers
from .models import Book,UserBook,LoanBook

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id','title', 'author', 'gender', 'isbn', 'publication_date', 'disponibility','picture']
        fields = ['id','title', 'author', 'gender', 'isbn', 'publication_date', 'disponibility','picture']
        fields = ['id','title', 'author', 'gender', 'isbn', 'publication_date', 'disponibility','picture']

class UserBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBook
        fields = ['first_name','last_name','email','password']

class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanBook
        fields = ['book','user','borrowing_date','return_date']