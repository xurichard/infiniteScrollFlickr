from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse

from django.template.loader import get_template
from django.core.mail import EmailMessage, send_mail
from django.template import Context

from .models import *
from .forms import ContactForm

def index(request):
	form_class = ContactForm
	context = {'form':form_class}

	if request.method == 'POST':
		form = form_class(data=request.POST)

		if form.is_valid():
			contact_name = request.POST.get('contact_name', '')
			contact_email = request.POST.get('contact_email', '')
			form_content = request.POST.get('content', '')

			print contact_name, contact_email, form_content

			send_mail(
				'Email from website, from '+ contact_name,  #subject
				contact_email + " \n" + form_content,   #message
				'richardxupersonal@gmail.com',   #from
				['richardxu@berkeley.edu', 'richardxupersonal@gmail.com'],    #to
				fail_silently=False,
			)
            # Email the profile with the 
            # contact information
            # template = get_template('contact_template.txt')
            # context = Context({
            #     'contact_name': contact_name,
            #     'contact_email': contact_email,
            #     'form_content': form_content,
            # })
            # content = template.render(context)

            # email = EmailMessage(
            #     "New contact form submission",
            #     content,
            #     "Your website" +'',
            #     ['kocepudim@stexsy.com'],
            #     headers = {'Reply-To': contact_email }
            # )
            # email.send()
			# msg = EmailMessage('Request Callback', 'Here is the message.', to=['kocepudim@stexsy.com'])
			# msg.send()
			return redirect('mainPage:index')


	return render(request, 'mainPage/index.html', context)

