import datetime
from django.db import models
from django.utils import timezone



class ParliamentFunctions(models.Model):
    """
    Represents a function in the system.
    """
    name = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self):
        return str(self.name)
    
class LegistationStages(models.Model):
    """
    Represents a legistation stage in the system.
    """
    stage = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self):
        return str(self.stage)
    


class LegislationDocuments(models.Model):
    document_name = models.CharField(max_length=255)
    description = models.TextField()
    

    def __str__(self):
        return str(self.document_name)
    




class File(models.Model):
    """
    Represents a file in the system.

    Attributes:
        name (str): The name of the file.
        file (FileField): The uploaded file.
        type (str): The type of the file.
        size (int): The size of the file in bytes.
        text (str): A text description of the file.
    """
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    stage = models.CharField(max_length=255, null=True, blank=True)
    function = models.CharField(max_length=255, null=True, blank=True)
    document = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='uploads/')  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    type = models.CharField(max_length=255)
    size = models.IntegerField()
    text = models.TextField()
    fibinary = models.BinaryField(null=True, blank=True)
    date = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField( editable=False,default=timezone.now)
    updated_at = models.DateTimeField( editable=False,default=timezone.now)
    refdocument = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)




class FileActivities(models.Model):
    """
    Represents a bill activity in the system.
    """
    title = models.CharField(max_length=255)
    description = models.TextField()
    document = models.CharField(max_length=255, null=True, blank=True)
    file = models.FileField(upload_to='uploads/')  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    size = models.IntegerField()
    text = models.TextField()
    filereference = models.ForeignKey(File, on_delete=models.CASCADE, null=True, blank=True)
    stage = models.CharField(max_length=255)
    

class Amendments(models.Model):
    """
    Represents an amendment in the system.
    """
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(upload_to='uploads/')  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    size = models.IntegerField()
    text = models.TextField()
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    


class RulingStages(models.Model):
    """
    Represents a ruling stage in the system.
    """
    stage = models.CharField(max_length=255)
    description = models.TextField()


class HouseDebate(models.Model):
    """
    Represents a house debate in the system.
    """
    title = models.CharField(max_length=255)
    description = models.TextField()
    

class HouseDebateActivities(models.Model):
    """
    Represents a house debate activity in the system.
    """
    title = models.CharField(max_length=255)
    description = models.TextField()
    debate = models.ForeignKey(HouseDebate, on_delete=models.CASCADE)
    ruilingstage = models.ForeignKey(RulingStages, on_delete=models.CASCADE)
    File = models.ForeignKey(File, on_delete=models.CASCADE)



from django.db import models

class Category(models.Model):
    id = models.CharField(max_length=50, unique=True, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name


class BillTracker(models.Model):
    date = models.DateField(null=True, blank=True)
    serialno = models.CharField(max_length=100)
    bill = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    sponsor = models.CharField(max_length=100)
    billnumber = models.CharField(max_length=100)
    maturity_date = models.DateField(null=True, blank=True)
    seconder = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=100, null=True, blank=True)
    gazette_no = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/', null=True, blank=True)  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    function = models.CharField(max_length=255, null=True, blank=True,default="Legislation")
    document = models.CharField(max_length=255, null=True, blank=True,default="Bills")

class BillTrackerActivity(models.Model):
    BillTracker = models.ForeignKey(BillTracker, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    description = models.CharField(max_length=5000)
    status = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/', null=True, blank=True)  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    
    

class PetitionTracker(models.Model):
    date = models.DateField(null=False, blank=False)
    presenter = models.CharField(max_length=100)
    petitioner = models.CharField(max_length=100)
    subject = models.CharField(max_length=5000)
    date_due = models.DateField(null=False, blank=False)
    status = models.CharField(max_length=100, default="new")
    
class PetitiontrackerActivity(models.Model):
    PetitionTracker = models.ForeignKey(PetitionTracker, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    description = models.CharField(max_length=5000)
    status = models.CharField(max_length=100)
    
    

class MotionTracker(models.Model):
    date = models.DateField(default=timezone.now)
    subject = models.TextField(max_length=5000)
    proposer = models.CharField(max_length=100)
    seconder = models.CharField(max_length=100)
    status = models.CharField(max_length=100,default="new")
    
    



class DocumentIndex(models.Model):
    text_id = models.AutoField(primary_key=True, editable=False, unique=True)
    date = models.DateTimeField(default=timezone.now)
    
    # Define choices for the 'document' field
    DOCUMENT_CHOICES = (
        ('Standing Orders', 'Standing Orders'),
        ('Constitution', 'Constitution'),
    )
    
    document = models.CharField(max_length=100, choices=DOCUMENT_CHOICES)
    
    # Define choices for the 'heirarchy' field
    HIERARCHY_CHOICES = (
        ('Document', 'Document'),
        ('Part', 'Part'),
        ('Header', 'Header'),
        ('Paragraph', 'Paragraph'),
    )
    
    heirarchy = models.CharField(max_length=100, choices=HIERARCHY_CHOICES)
    
    content = models.CharField(max_length=10000)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
