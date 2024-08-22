from django import forms
from .models import LoanBook
from django_filters import rest_framework as filters

class LoanFilter(filters.FilterSet):
    borrowing_date = filters.DateFilter(widget=forms.DateInput(attrs={'type': 'date'}))
    return_date = filters.DateFilter(widget=forms.DateInput(attrs={'type': 'date'}))

    class Meta:
        model = LoanBook
        fields = ['borrowing_date', 'return_date']