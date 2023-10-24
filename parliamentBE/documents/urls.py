# myapp/urls.py
from django.urls import path
# from .views import FileListCreateView, FileDetailView,AmendmentsListCreateView,FileActivitiesListCreateView,HouseDebateActivitiesListCreateView,HouseDebateListCreateView,LegistationDocumentsListCreateView,LegistationStagesListCreateView,ParliamentFunctionsListCreateView,RulesStagesListCreateView,CategoriesListCreateView,BillTrackerListCreateView, PetitionTrackerListCreateView, MotionTrackerListCreateView

from .views import *

urlpatterns = [
    path('files/', FileListCreateView.as_view(), name='file-list-create'),
    path('files/<int:pk>/', FileDetailView.as_view(), name='file-detail'),
    path('amendments/', AmendmentsListCreateView.as_view(), name='amendments-list-create'),
    path('file-activities/', FileActivitiesListCreateView.as_view(), name='file-activities-list-create'),
    path('house-debate-activities/', HouseDebateActivitiesListCreateView.as_view(), name='house-debate-activities-list-create'),
    path('house-debate/', HouseDebateListCreateView.as_view(), name='house-debate-list-create'),
    path('legistation-stages/', LegistationStagesListCreateView.as_view(), name='legistation-stages-list-create'),
    path('legistation-documents/', LegistationDocumentsListCreateView.as_view(), name='legistation-documents-list-create'),
    path('parliament-functions/', ParliamentFunctionsListCreateView.as_view(), name='parliament-functions-list-create'),
    path('rules-stages/', RulesStagesListCreateView.as_view(), name='rules-stages-list-create'),
    path('categories/', CategoriesListCreateView.as_view(),name='categories'),
    path('billtrackers/', BillTrackerListCreateView.as_view(), name='billtracker-list-create'),
    path('petitiontrackers/', PetitionTrackerListCreateView.as_view(), name='petitiontracker-list-create'),
    path('motiontrackers/', MotionTrackerListCreateView.as_view(), name='motiontracker-list-create'),
    path('DocumentIndex/', DocumentIndexListCreateView.as_view(), name='DocumentIndex-list-create'),
    path('DocumentIndex/<int:pk>/', DocumentIndexDetailView.as_view(), name='DocumentIndex-detail'),
]


