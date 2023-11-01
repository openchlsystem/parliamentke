from django.urls import path
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

    path('categories/', CategoryListCreateView.as_view(), name='categories-list-create'),

    path('billtrackers/', BillTrackerListCreateView.as_view(), name='billtracker-list-create'),
    path('billtrackers/<int:pk>/', BillTrackerDetailView.as_view(), name='billtracker-detail'),

    path('billactivitytracker/', BillTrackerActivityListCreateView.as_view(), name='billactivitytracker-list-create'),
    path('billactivitytracker/<int:pk>/', BillTrackerActivityDetailView.as_view(), name='billactivitytracker-detail'),

    path('petitiontrackers/', PetitionTrackerListCreateView.as_view(), name='petitiontracker-list-create'),
    path('petitiontrackers/<int:pk>/', PetitionTrackerDetailView.as_view(), name='petitiontracker-detail'),

    path('petitionactivitytracker/', PetitionTrackerActivityListCreateView.as_view(), name='petitionactivitytracker-list-create'),
    path('petitionactivitytracker/<int:pk>/', PetitionTrackerActivityDetailView.as_view(), name='petitionactivitytracker-detail'),

    path('motiontrackers/', MotionTrackerListCreateView.as_view(), name='motiontracker-list-create'),
    path('motiontrackers/<int:pk>/', MotionTrackerDetailView.as_view(), name='motiontracker-detail'),

    path('DocumentIndex/', DocumentIndexListCreateView.as_view(), name='documentindex'),
    path('DocumentIndex/<int:pk>/', DocumentIndexDetailView.as_view(), name='documentindex-detail'),
   
]
