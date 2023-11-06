from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *

class FileListCreateView(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'title', 'description']
    
class FileUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer

class FileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    
class RulesStagesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RulingStages.objects.all()
    serializer_class = RulesStagesSerializer
    

class RulesStagesListCreateView(generics.ListCreateAPIView):
    queryset = RulingStages.objects.all()
    serializer_class = RulesStagesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'stage']
    
class AmendmentsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Amendments.objects.all()
    serializer_class = AmendmentsSerializer

class AmendmentsListCreateView(generics.ListCreateAPIView):
    queryset = Amendments.objects.all()
    serializer_class = AmendmentsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'title']
    
class FileActivitiesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FileActivities.objects.all()
    serializer_class = FileActivitiesSerializer
    

class FileActivitiesListCreateView(generics.ListCreateAPIView):
    queryset = FileActivities.objects.all()
    serializer_class = FileActivitiesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'title']
    
class HouseDebateDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HouseDebate.objects.all()
    serializer_class = HouseDebateSerializer

class HouseDebateActivitiesListCreateView(generics.ListCreateAPIView):
    queryset = HouseDebateActivities.objects.all()
    serializer_class = HouseDebateActivitiesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'title']
    
class HouseDebateActivitiesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HouseDebateActivities.objects.all()
    serializer_class = HouseDebateActivitiesSerializer

class HouseDebateListCreateView(generics.ListCreateAPIView):
    queryset = HouseDebate.objects.all()
    serializer_class = HouseDebateSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'title']
    
    
class LegistationStagesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LegistationStages.objects.all()
    serializer_class = LegistationStagesSerializer

class LegistationStagesListCreateView(generics.ListCreateAPIView):
    queryset = LegistationStages.objects.all()
    serializer_class = LegistationStagesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'stage']
    
class LegistationDocumentsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LegislationDocuments.objects.all()
    serializer_class = LegistationDocumentsSerializer

class LegistationDocumentsListCreateView(generics.ListCreateAPIView):
    queryset = LegislationDocuments.objects.all()
    serializer_class = LegistationDocumentsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'document_name']
    
class ParliamentFunctionsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ParliamentFunctions.objects.all()
    serializer_class = ParliamentFunctionsSerializer

class ParliamentFunctionsListCreateView(generics.ListCreateAPIView):
    queryset = ParliamentFunctions.objects.all()
    serializer_class = ParliamentFunctionsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'name']
    
class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'name']
    
class BillTrackerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BillTracker.objects.all()
    serializer_class = BillTrackerSerializer

class BillTrackerListCreateView(generics.ListCreateAPIView):
    queryset = BillTracker.objects.all()
    serializer_class = BillTrackerSerializer
    filter_backends = [DjangoFilterBackend] 
    filterset_fields = ['id', 'status', 'sponsor']
    


class BillTrackerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BillTracker.objects.all()
    serializer_class = BillTrackerSerializer

class BillTrackerActivityListCreateView(generics.ListCreateAPIView):
    queryset = BillTrackerActivity.objects.all()
    serializer_class = BillTrackerActivitySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'description']
    
class BillTrackerActivityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BillTrackerActivity.objects.all()
    serializer_class = BillTrackerActivitySerializer
    
class PetitionTrackerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PetitionTracker.objects.all()
    serializer_class = PetitionTrackerSerializer

class PetitionTrackerListCreateView(generics.ListCreateAPIView):
    queryset = PetitionTracker.objects.all()
    serializer_class = PetitionTrackerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'presenter', 'petitioner', 'status']
    

class PetitionTrackerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PetitionTracker.objects.all()
    serializer_class = PetitionTrackerSerializer

class PetitionTrackerActivityListCreateView(generics.ListCreateAPIView):
    queryset = PetitiontrackerActivity.objects.all()
    serializer_class = PetitionActivitySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'description']
    
class PetitionTrackerActivityDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PetitiontrackerActivity.objects.all()
    serializer_class = PetitionActivitySerializer

class MotionTrackerListCreateView(generics.ListCreateAPIView):
    queryset = MotionTracker.objects.all()
    serializer_class = MotionTrackerSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'subject', 'proposer', 'seconder', 'status']
    
class MotionTrackerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MotionTracker.objects.all()
    serializer_class = MotionTrackerSerializer

class DocumentIndexListCreateView(generics.ListCreateAPIView):
    queryset = DocumentIndex.objects.all()
    serializer_class = DocumentIndexSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['text_id', 'parent', 'document', 'heirarchy']
    
class DocumentIndexDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DocumentIndex.objects.all()
    serializer_class = DocumentIndexSerializer
