from django.urls import path
from . import views

urlpatterns = [
    #path('', views.HelloApiView.as_view(), name='index'),
    #path('', views.myhello_api, name='index'),
    #path('add', views.add_post, name='add_post'),
    #path('list', views.list_post, name='list_post'),
    path('register/', views.Register,name='Register'),
    path('profile/', views.List,name='List'),

    
]