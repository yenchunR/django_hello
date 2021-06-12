from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .serializers import *
from .models import UserComment

logger = logging.getLogger('django')              

@api_view(['GET'])
def AddComment(request):
    name = request.GET.get('name', '')
    comment = request.GET.get('comment', '')

    new_post = UserComment()

    new_post.name = name
    new_post.comment = comment

    new_post.save()

    if name and comment:
        return Response({"data": name + " Successful!"}, status=status.HTTP_200_OK)

    else:
        return Response(
            {"res": "Parameter: name is none!"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def ListComment(request):
    
    comments = UserComment.objects.all()
    if comments:
        serializer = UserSerializer(comments, many=True)
        return Response(serializer.data)
    else:
        return Response(
            {"res": "Parameter: name is none!"},
            status=status.HTTP_400_BAD_REQUEST
        )

'''
@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)

    else:
        return Response(
            {"res": "Parameter: name is none!"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_post(request):
    posts = Post.objects.get(id=2)
    if posts:
        serializer = PostSerializer(posts)
        return Response(serializer.data)
    else:
        return Response(
            {"res": "Parameter: name is none!"},
            status=status.HTTP_400_BAD_REQUEST
        )


def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe=False)


def myhello_api(request):
    my_name = request.GET.get('name', None)
    #logger.debug('*********** myhello_api: ' + my_name)
    if my_name:
        retValue = {}
        retValue['data'] = "Hello " + my_name
        return Response(retValue, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "Parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )



from django.http import HttpResponse

# Create your views here.
def myIndex(request):
    my_name = request.GET.get('name', "CGU")
    return HttpResponse("Hello " + my_name )
'''