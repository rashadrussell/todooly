from django.urls import path

from .views import (
    GetTodoListView,
    CreateTodoItemView,
    DeleteTodoItemView,
)

urlpatterns = [
    path('todolist/', GetTodoListView.as_view()),
    path('create_todo/', CreateTodoItemView.as_view()),
    path('delete_todo/<int:pk>/', DeleteTodoItemView.as_view()),
]
