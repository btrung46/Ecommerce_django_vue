from django.urls import path, include
from product import views

urlpatterns = [
    path('products/',views.ProductListView.as_view()),
]
