
        const calendarTable = document.querySelector('.calendar-table tbody');
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        let selectedDate = null; // To store the selected date

        // Function to generate calendar for a given month and year
        function generateCalendar(month, year) {
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDay = new Date(year, month).getDay();

            // Clear existing calendar data
            calendarTable.innerHTML = '';

            // Add empty cells for days before the first day of the month
            let row = calendarTable.insertRow();
            for (let i = 0; i < firstDay; i++) {
                let cell = row.insertCell();
                cell.innerHTML = '';
            }

            // Add cells for days of the month
            for (let i = 1; i <= daysInMonth; i++) {
                let cell = row.insertCell();
                cell.innerHTML = i;
                cell.dataset.date = `${year}-${month + 1}-${i}`; // Store date in data attribute
                cell.addEventListener('click', selectDate);

                // Move to the next row after 7 days (Saturday)
                if ((firstDay + i) % 7 === 0 && i !== daysInMonth) {
                    row = calendarTable.insertRow();
                }
            }
        }

        // Function to select a date
        function selectDate(event) {
            const selectedCell = event.target;
            const date = selectedCell.dataset.date;
            selectedDate = new Date(date);

            // You can highlight the selected date or perform other actions here
            // For example, you could change the background color of the cell:
            selectedCell.style.backgroundColor = '#f0f0f0';

            // You can also update the prompt messages to include the selected date:
            document.getElementById('feelingPrompt').textContent = `¿Cómo te sientes hoy, ${selectedDate.toDateString()}?`;
            document.getElementById('notePrompt').textContent = `Agregar una nota para ${selectedDate.toDateString()}`;
        }

        // Function to navigate to the previous month
        function previousMonth() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        }

        // Function to navigate to the next month
        function nextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        }

        // Function to show the feeling prompt (example - you can customize this)
        function showFeelingPrompt() {
            if (selectedDate) {
                alert(`¿Cómo te sientes hoy, ${selectedDate.toDateString()}?`);
            } else {
                alert('Please select a date first.');
            }
        }

        // Function to show the note prompt (example - you can customize this)
        function showNotePrompt() {
            if (selectedDate) {
                alert(`Agregar una nota para ${selectedDate.toDateString()}`);
            } else {
                alert('Please select a date first.');
            }
        }
        function verNta() {
           var notita = document.getElementById('txtnotas').value;
           document.getElementById('contentp').innerText = notita;

        }

        function verdiv() {
            var elem = document.getElementById("txtnotes");
            if (elem.style.display = "none") {
                elem.style.display = "block";
            }else{
                elem.style.display = "none";
            }
        }
        // Generate the initial calendar
        generateCalendar(currentMonth, currentYear);