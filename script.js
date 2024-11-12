// Function to validate registration form
function validateRegistrationForm() {
    const fullName = document.getElementById("fullName");
    const mobile = document.getElementById("mobile");
    const idProof = document.getElementById("idProof");
    const address = document.getElementById("address");
    const userId = document.getElementById("userId");
    const password = document.getElementById("password");
  
    if (fullName.value.trim() === "") {
      alert("Full Name is required.");
      fullName.focus();
      return false;
    }
  
    if (!/^\d{10}$/.test(mobile.value)) {
      alert("Please enter a valid 10-digit mobile number.");
      mobile.focus();
      return false;
    }
  
    if (idProof.files.length === 0) {
      alert("ID Proof is required.");
      idProof.focus();
      return false;
    }
  
    if (address.value.trim() === "") {
      alert("Address is required.");
      address.focus();
      return false;
    }
  
    if (userId.value.trim() === "") {
      alert("User ID is required.");
      userId.focus();
      return false;
    }
  
    if (password.value.length < 8) {
      alert("Password must be at least 8 characters long.");
      password.focus();
      return false;
    }
  
    return true;
  }
  
  // Function to validate login form
  function validateLoginForm() {
    const userId = document.getElementById("loginUserId");
    const password = document.getElementById("loginPassword");
  
    if (userId.value.trim() === "") {
      alert("User ID is required.");
      userId.focus();
      return false;
    }
  
    if (password.value.trim() === "") {
      alert("Password is required.");
      password.focus();
      return false;
    }
  
    return true;
  }
  
  // Function to validate appointment booking form
  function validateAppointmentForm() {
    const visitDate = document.getElementById("visitDate");
    const visitTime = document.getElementById("visitTime");
    const purpose = document.getElementById("purpose");
    const doctorSelect = document.getElementById("doctorSelect");
  
    if (visitDate.value === "") {
      alert("Please select a date for your visit.");
      visitDate.focus();
      return false;
    }
  
    if (visitTime.value === "") {
      alert("Please select a time for your visit.");
      visitTime.focus();
      return false;
    }
  
    if (purpose.value.trim() === "") {
      alert("Please provide a purpose for your visit.");
      purpose.focus();
      return false;
    }
  
    if (doctorSelect.value === "") {
      alert("Please select a doctor.");
      doctorSelect.focus();
      return false;
    }
  
    return true;
  }
  
  // Sample user data for validation (in a real application, use a secure method for login)
const validUser = {
    userId: "testuser",
    password: "p123"
  };
  
  // Handle login form submission
  function handleLogin() {
    const userId = document.getElementById("loginUserId").value;
    const password = document.getElementById("loginPassword").value;
  
    // Validate user credentials (replace this with actual authentication in production)
    if (userId === validUser.userId && password === validUser.password) {
      alert("Login successful!");
      window.location.href = 'appointment-details.html'; // Redirect to details page
      return true;
    } else {
      alert("Invalid User ID or Password.");
      return false;
    }
  }
  