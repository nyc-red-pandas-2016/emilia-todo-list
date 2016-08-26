Rails.application.routes.draw do

  get 'lists/:id/tasks', to: 'tasks#show'
  post 'lists/:id/tasks', to: 'tasks#create'

  root to: 'list#index'

end
