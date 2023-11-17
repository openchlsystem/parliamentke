from rest_framework import serializers
from documents.models import *

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

class BillTrackerSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y', 'iso-8601'])
    maturity_date = serializers.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y', 'iso-8601'])

    class Meta:
        model = BillTracker
        fields = '__all__'

class BillTrackerActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = BillTrackerActivity
        fields = '__all__'

class PetitionTrackerSerializer(serializers.ModelSerializer):
    # date = serializers.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y', 'iso-8601'])

    class Meta:
        model = PetitionTracker
        fields = '__all__'

class PetitionActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = PetitiontrackerActivity
        fields = '__all__'

class MotionTrackerSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y', 'iso-8601'])

    class Meta:
        model = MotionTracker
        fields = '__all__'
        
class MotionTrackerActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = MotionTrackerActivity
        fields = '__all__'

class DocumentIndexSerializer(serializers.ModelSerializer):
    # date = serializers.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y', 'iso-8601'])

    class Meta:
        model = DocumentIndex
        fields = '__all__'


class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = '__all__'
        
        

        
        
class CommitteesSerializer(serializers.ModelSerializer):
    class Meta:
        model = committees
        fields = '__all__'


class CommitteeMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommitteeMembers
        fields = '__all__'
        

class EventsTrackerSerializer(serializers.ModelSerializer):


    class Meta:
        model = Eventstracker
        fields = '__all__'
        
class EventsTrackerActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventstrackerActivity
        fields = '__all__'
        

class OrderPaperSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderPaper
        fields = '__all__'
        

class OrderPaperDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderPaperDetails
        fields = '__all__'