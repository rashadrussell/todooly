from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from todolist.models import TodoItem


# Create your views here.
class GetTodoListView(APIView):
    parser_classes = [JSONParser]
    renderer_classes = [JSONRenderer]
    parser_classes = [JSONParser]

    def get(self, request):
        todos_queryset = TodoItem.objects.all()
        todos = [
            {'id': todo.id, 'text': todo.text}
            for todo in todos_queryset
        ]

        return Response({'todos': todos})


class CreateTodoItemView(APIView):

    def post(self, request):
        todo_item = TodoItem.objects.create(
            text = request.data.get('text')
        )
        response_data = {
            'id': todo_item.id,
            'text': todo_item.text
        }

        return Response({'todo': response_data})


class DeleteTodoItemView(APIView):

    def delete(self, request, pk):
        todo_item = TodoItem.objects.get(id=pk)

        response_data = {
            'id': todo_item.id,
            'text': todo_item.text
        }

        todo_item.delete()

        return Response({'todo': response_data})
