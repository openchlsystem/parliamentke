# myapp/views.py
from rest_framework import generics
from .models import Category, File,RulingStages,Amendments,FileActivities,HouseDebate,HouseDebateActivities,LegislationDocuments,LegistationStages,ParliamentFunctions
from .serializers import CategorySerializer, FileSerializer,AmendmentsSerializer,FileActivitiesSerializer,HouseDebateSerializer,RulesStagesSerializer,HouseDebateActivitiesSerializer,LegistationStagesSerializer,LegistationDocumentsSerializer,ParliamentFunctionsSerializer
# import django filters 
from django_filters import rest_framework as filters


class FileListCreateView(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('id','function',)

class FileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    

class AmendmentsListCreateView(generics.ListCreateAPIView):
    queryset = Amendments.objects.all()
    serializer_class = AmendmentsSerializer

class FileActivitiesListCreateView(generics.ListCreateAPIView):
    queryset = FileActivities.objects.all()
    serializer_class = FileActivitiesSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('id','filereference',)
    
class HouseDebateActivitiesListCreateView(generics.ListCreateAPIView):
    queryset = HouseDebateActivities.objects.all()
    serializer_class = HouseDebateActivitiesSerializer
    
class HouseDebateListCreateView(generics.ListCreateAPIView):
    queryset = HouseDebate.objects.all()
    serializer_class = HouseDebateSerializer
    
class LegistationStagesListCreateView(generics.ListCreateAPIView):
    queryset = LegistationStages.objects.all()
    serializer_class = LegistationStagesSerializer
    

class LegistationDocumentsListCreateView(generics.ListCreateAPIView):
    queryset = LegislationDocuments.objects.all()
    serializer_class = LegistationDocumentsSerializer
    

class ParliamentFunctionsListCreateView(generics.ListCreateAPIView):
    queryset = ParliamentFunctions.objects.all()
    serializer_class = ParliamentFunctionsSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('id')
    
class RulesStagesListCreateView(generics.ListCreateAPIView):
    queryset = RulingStages.objects.all()
    serializer_class = RulesStagesSerializer
    
    




class CategoriesListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    

from rest_framework import generics
from .models import BillTracker, PetitionTracker, MotionTracker
from .serializers import BillTrackerSerializer, PetitionTrackerSerializer, MotionTrackerSerializer

class BillTrackerListCreateView(generics.ListCreateAPIView):
    queryset = BillTracker.objects.all()
    serializer_class = BillTrackerSerializer

class PetitionTrackerListCreateView(generics.ListCreateAPIView):
    queryset = PetitionTracker.objects.all()
    serializer_class = PetitionTrackerSerializer

class MotionTrackerListCreateView(generics.ListCreateAPIView):
    queryset = MotionTracker.objects.all()
    serializer_class = MotionTrackerSerializer