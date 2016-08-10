from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import *

def index(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    # context = {'latest_question_list': latest_question_list}
    
    context = {}
    return render(request, 'mainPage/index.html', context)

