  function updateStats() {
            const total = tasks.length;
            const completed = tasks.filter(t => t.completed).length;
            const pending = total - completed;
            
            // Calculate percentage
            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
            
            // Update progress bar
            const progressFill = document.getElementById('progressFill');
            progressFill.style.setProperty('--progress', `${percent}%`);
            progressFill.style.animationPlayState = 'running';
            
            // Update display values
            document.getElementById('progressPercent').textContent = `${percent}%`;
            document.getElementById('completedCount').textContent = `${completed} completed`;
            document.getElementById('totalCount').textContent = total;
            document.getElementById('pendingCount').textContent = pending;
            
            // Update priority counts
            document.getElementById('highPriorityCount').textContent = 
                tasks.filter(t => t.priority === 'high').length;
            document.getElementById('mediumPriorityCount').textContent = 
                tasks.filter(t => t.priority === 'medium').length;
            document.getElementById('lowPriorityCount').textContent = 
                tasks.filter(t => t.priority === 'low').length;
        }

        // LocalStorage Management
        function loadTasks() {
            const savedTasks = localStorage.getItem('smartTasks');
            if (savedTasks) {
                tasks = JSON.parse(savedTasks);
            }
        }

        function saveTasks() {
            localStorage.setItem('smartTasks', JSON.stringify(tasks));
        }

        // Make functions globally available for onclick handlers
        window.toggleTaskCompletion = toggleTaskCompletion;
        window.editTask = editTask;
        window.deleteTask = deleteTask;