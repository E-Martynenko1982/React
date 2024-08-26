const baseUrl = 'https://6698d3872069c438cd7036bb.mockapi.io/api/V1/tasks';

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  })
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(tasksList => tasksList)
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
    })
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  })

}