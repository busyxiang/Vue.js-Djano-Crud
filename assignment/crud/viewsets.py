from rest_framework import viewsets
from .models import Crud
from .serializers import CrudSerializer

class CrudViewSet(viewsets.ModelViewSet):
    queryset = Crud.objects.all()
    serializer_class = CrudSerializer