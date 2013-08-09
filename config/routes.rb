Fortydays::Application.routes.draw do
  root "site#index"

  get "pieces/index"
end
