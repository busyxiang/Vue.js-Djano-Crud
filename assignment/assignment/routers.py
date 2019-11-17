from rest_framework import routers
from crud.viewsets import CrudViewSet

router = routers.DefaultRouter()

router.register(r'crud', CrudViewSet)