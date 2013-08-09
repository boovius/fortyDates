class PiecesController < ApplicationController
	def index 
		page = 'pieces/' + params[:term] 
	  
	  respond_to do |format|  
	    format.html { render partial: page } 
	  end
	end
end
