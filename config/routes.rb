Spine::Application.routes.draw do

  resources :vouchers

  root :to => "home#index"

end
