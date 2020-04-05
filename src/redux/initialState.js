const initialState = {
    settings: {
        confirmDelete: true,
        isDarkTheme: false
    },
    lists: [
        {
            id: 1,
            title: "My To-Do List",
            items: [
                {
                    id: 1,
                    text: "First task",
                    completed: false
                },
                {
                    id: 2,
                    text: "Second task",
                    completed: false
                },
                {
                    id: 3,
                    text: "Third task",
                    completed: false
                }
            ]
        }
    ]
};

export default initialState;