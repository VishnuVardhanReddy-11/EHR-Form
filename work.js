const form = document.getElementById('a');
const STORAGE_KEY = 'offlineEHRRecord';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const record = {
    name: form.querySelector('#name').value,
    age: form.querySelector('#age').value,
    symptoms: form.querySelector('#symptoms').value,
    diagnosis: form.querySelector('#diagnosis').value,
    prescription: form.querySelector('#prescription').value,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  alert('Record saved locally!');
  form.reset();
});

function loadData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    alert('No saved record found.');
    return;
  }

  const record = JSON.parse(savedData);
  form.querySelector('#name').value = record.name || '';
  form.querySelector('#age').value = record.age || '';
  form.querySelector('#symptoms').value = record.symptoms || '';
  form.querySelector('#diagnosis').value = record.diagnosis || '';
  form.querySelector('#prescription').value = record.prescription || '';
  alert('Record loaded from local storage!');
}
