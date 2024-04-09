import React, { useState } from 'react';
import { Box, Input, Button, List, ListItem, ListIcon, Checkbox } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function ToDoTab() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Max out on bench", isCompleted: false },
    { id: 2, text: "Hit forearms", isCompleted: false },
    { id: 3, text: "Gruesome calf workout", isCompleted: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Box textAlign="center" p={5}>
      <Input
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        size="md"
        mb={3}
      />
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={handleAddTask}>
        Add Task
      </Button>
      <List spacing={3} mt={3} textAlign="left">
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center">
            <Checkbox isChecked={task.isCompleted} onChange={() => toggleTaskCompletion(task.id)} mr={2} />
            {task.text}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ToDoTab;
