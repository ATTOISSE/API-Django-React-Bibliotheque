from .filter import LoanFilter
from .models import Book,UserBook,LoanBook
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from .pagination import BookPagination,UserBookPagination,LoanPagination
from .serializer import BookSerializer,UserBookSerializer,LoanSerializer

class BookAPIViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    pagination_class = BookPagination
    filterset_fields = ['title', 'author','gender','publication_date']
    filter_backends = [DjangoFilterBackend,OrderingFilter]
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class UserBookAPIViewSet(ModelViewSet):
    queryset = UserBook.objects.all()
    serializer_class = UserBookSerializer
    pagination_class = UserBookPagination
    filterset_fields = ['first_name', 'last_name','email']
    filter_backends = [DjangoFilterBackend,OrderingFilter]

class LoanBooKAPIViewSet(ModelViewSet):
    serializer_class = LoanSerializer
    queryset = LoanBook.objects.all()
    pagination_class = LoanPagination
    filterset_class = LoanFilter
    filter_backends = [DjangoFilterBackend,OrderingFilter]