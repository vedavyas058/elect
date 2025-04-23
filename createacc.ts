// Step 1: Send OTP to email
fetch('http://localhost:3000/send-otp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})
.then(res => res.json())
.then(data => {
  const enteredOtp = prompt("Enter the OTP sent to your email:");
  if (!enteredOtp) return alert("OTP is required.");

  // Step 2: Verify OTP
  fetch('http://localhost:3000/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp: enteredOtp }),
  })
  .then(res => res.json())
  .then(result => {
    if (result.success) {
      // Save to localStorage after OTP verification
      const account = { name, regNumber, branch, courses, email, password };
      localStorage.setItem("account_" + regNumber, JSON.stringify(account));
      alert("Account created and verified successfully!");
      showLogin();
    } else {
      alert("OTP verification failed.");
    }
  });
});
