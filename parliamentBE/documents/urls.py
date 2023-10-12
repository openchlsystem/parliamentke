# myapp/urls.py
from django.urls import path
from .views import FileListCreateView, FileDetailView

urlpatterns = [
    path('files/', FileListCreateView.as_view(), name='file-list-create'),
    path('files/<int:pk>/', FileDetailView.as_view(), name='file-detail'),
]
