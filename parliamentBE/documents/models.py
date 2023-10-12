from django.db import models

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
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='uploads/')  # 'upload_to' specifies the subdirectory within 'MEDIA_ROOT'
    type = models.CharField(max_length=255)
    size = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return str(self.name)
