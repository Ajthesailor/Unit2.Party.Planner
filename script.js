// Function to create a new party object
function createParty(name, date, time, location, description) {
  return {
    name,
    date,
    time,
    location,
    description,
  };
}

// Function to add a party to the list
function addPartyToList(party) {
  const partyList = document.getElementById('party-list');
  const li = document.createElement('li');
  li.innerHTML = `
    <div>
      <strong>${party.name}</strong>
      <p>Date: ${party.date}</p>
      <p>Time: ${party.time}</p>
      <p>Location: ${party.location}</p>
      <p>Description: ${party.description}</p>
    </div>
    <button class="delete">Delete</button>
  `;
  partyList.appendChild(li);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form input values
  const partyName = document.getElementById('party-name').value;
  const partyDate = document.getElementById('party-date').value;
  const partyTime = document.getElementById('party-time').value;
  const partyLocation = document.getElementById('party-location').value;
  const partyDescription = document.getElementById('party-description').value;

  // Create a new party object
  const newParty = createParty(
    partyName,
    partyDate,
    partyTime,
    partyLocation,
    partyDescription
  );

  // Add the new party to the list
  addPartyToList(newParty);

  // Clear form inputs
  document.getElementById('party-form').reset();
}

// Attach event listener to the form for submission
const partyForm = document.getElementById('party-form');
partyForm.addEventListener('submit', handleFormSubmit);

// Function to delete a party
function deleteParty(event) {
  if (event.target.classList.contains('delete')) {
    // Find the parent <li> element of the clicked delete button
    const listItem = event.target.closest('li');

    // Remove the <li> element from the party list
    if (listItem) {
      listItem.remove();
    }
  }
}

// Attach event listener to the party list to handle delete button clicks
const partyList = document.getElementById('party-list');
partyList.addEventListener('click', deleteParty);
