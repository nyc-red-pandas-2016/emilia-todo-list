Rails.application.routes.draw do

  get 'lists/:id/tasks', to: 'tasks#show'
  post 'lists/:id/tasks', to: 'tasks#create'
  put 'lists/:list_id/tasks/:id', to: 'tasks#update'
  delete 'lists/:list_id/tasks/:id', to: 'tasks#destroy'

  root to: 'list#index'

end
