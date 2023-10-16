# myapp/serializers.py
from rest_framework import serializers
from documents.models import Category, File,RulingStages,Amendments,FileActivities,HouseDebate,HouseDebateActivities,LegislationDocuments,LegistationStages,ParliamentFunctions

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'

class RulesStagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RulingStages
        fields = '__all__'
        
class AmendmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Amendments
        fields = '__all__'

class FileActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileActivities
        fields = '__all__'
        
class HouseDebateActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseDebateActivities
        fields = '__all__'
        
class HouseDebateSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseDebate
        fields = '__all__'
        
class LegistationStagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegistationStages
        fields = '__all__'
        

class LegistationDocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegislationDocuments
        fields = '__all__'
        
    
class ParliamentFunctionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParliamentFunctions
        fields = '__all__'
        



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


from rest_framework import serializers
from .models import BillTracker, PetitionTracker, MotionTracker

class BillTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillTracker
        fields = '__all__'

class PetitionTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetitionTracker
        fields = '__all__'

class MotionTrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotionTracker
        fields = '__all__'