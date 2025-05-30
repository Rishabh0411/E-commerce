from django.urls import path
#from . import views
from views import products  
urlpatterns = [
    path("products/", views.products, name="products")
]