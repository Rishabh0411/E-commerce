from django.urls import path
from . import views
import shop_app.views as v  
#
print("shop_app.urls.py loaded")
print("views module contents:", dir(v))
# 
urlpatterns = [
    path("products/", views.products, name="products"),
]