// Switch between Login and Signup forms
document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  });
  
  document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  });
  
  // Handle Login Form
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('auth').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('userDetails').textContent = 'Username: ' + document.getElementById('username').value;
    loadCharts();
  });
  
  // Handle Signup Form
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account created successfully! Please login.');
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  });
  
  // Handle Edit Profile
  document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('businessModel').disabled = false;
    document.getElementById('profit').disabled = false;
    document.getElementById('loss').disabled = false;
  });
  
  // Load Charts
  function loadCharts() {
    // Data for Bar Chart (Profit)
    var ctxProfit = document.getElementById('profitChart').getContext('2d');
    var profitChart = new Chart(ctxProfit, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Monthly Profit',
          data: [5000, 7000, 8000, 6000, 7500],  // Sample data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  