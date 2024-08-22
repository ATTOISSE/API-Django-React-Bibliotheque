from rest_framework.routers import DefaultRouter
from .views import BookAPIViewSet,UserBookAPIViewSet,LoanBooKAPIViewSet


router = DefaultRouter()
router.register(r'books',BookAPIViewSet,basename='books')
router.register(r'users',UserBookAPIViewSet,basename='users')
router.register(r'loans',LoanBooKAPIViewSet,basename='loans')
urlpatterns = router.urls
