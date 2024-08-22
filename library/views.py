from .models import Book,UserBook,LoanBook
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from .serializer import BookSerializer,UserBookSerializer,LoanSerializer

class BookAPIViewSet(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'author','gender']

class UserBookAPIViewSet(ModelViewSet):
    serializer_class = UserBookSerializer
    queryset = UserBook.objects.all()

class LoanBooKAPIViewSet(ModelViewSet):
    serializer_class = LoanSerializer
    queryset = LoanBook.objects.all()