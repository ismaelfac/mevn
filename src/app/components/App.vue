<template>
    <div>
        <nav class="navbar navbar-light bg-light">
          <a href="/" class="navbar-brand">MEVN Stack</a>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="addTask">
                    <div class="form-group">
                      <input type="text" placeholder="Insert a task" class="form-control" v-model="task.title">
                    </div>
                    <div class="form-group">
                      <textarea cols="30" rows="10" class="form-control" placeholder="Insert A Description" v-model="task.description"></textarea>
                    </div>
                    <button class="btn btn-primary btn-block">SEND</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  class Task{
    constructor(title, description){
      this.title = title;
      this.description = description;
    }
  }
export default {
  name: 'App',
  data() {
    return {
      task: new Task()
    }
  },
  methods: {
    addTask() {
      fetch('/tasks', {
        method: 'POST',
        body: JSON.stringify(this.task),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  },
}
</script>
