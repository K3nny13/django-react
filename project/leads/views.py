from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer

# Create your views here.
class LeadListCreate(generics.ListCreateAPIView):
	queryset = Lead.objects.all()
	serializer_class = LeadSerializer