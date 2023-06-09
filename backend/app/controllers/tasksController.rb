class TasksController < ApplicationController
  get "/tasks" do
    tasks = Task.all
    tasks.to_json()
    
  end


  post '/addtasks' do 
    authorize

    title=params[:title]
    description=params[:description]
    due_date=params[:due_date]
   
    tasks = Task.create(title: title, description:description, due_date:due_date)
    if Task
    feedback = {:achievement=> "Task has been added successfully"}
    feedback.to_json()
    else
    feedback = {:failure=> "What are you doing? Try again"}
    feedback.to_json()
    end
  end

  # updating tasks
  patch "/updatetask/:id" do
    authorize

    title=params[:title]
    description=params[:description]
    due_date=params[:due_date]
   
    if(title.present? &&  description.present? && due_date.present?)
        task_find = Task.find_by(id: params[:id])
        task = task_find.update(title: title, description: description, due_date:due_date)
        if task
            message = {:success=> "task updated successfully"}
            message.to_json
        else
            status 406
            message = {:error=> "Error updating the task"}
            message.to_json
        end

    else
        status 406
        message = {:error=> "All field are required"}
        message.to_json
    end
  end



  # deleting tasks
  delete "/deletetasks/:id" do
    
    check_task = Task.exists?(id: params[:id] ) 
    if check_task
        task= Task.find(params[:id])
        task.destroy
        message= {:success=> "task has been deleted successfully"}
        message.to_json
    else
        status 406
        message = {:error=> "The task  does not exist"}
        message.to_json
    end

  end

  
end
  