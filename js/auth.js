// filepath: /galbooker/galbooker/js/auth.js

// Function to send verification code to the user's phone number
function sendVerificationCode(phoneNumber) {
    // Logic to send verification code using Firebase or any other service
}

// Function to verify the OTP entered by the user
function verifyOTP(verificationCode) {
    // Logic to verify the OTP using Firebase or any other service
}

// Function to handle autofill functionality for OTP input fields
function setupOTPInput() {
    const digitInputs = document.querySelectorAll('.otp-digit-input');
    digitInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.inputType === 'deleteContentBackward' && index > 0 && !input.value) {
                digitInputs[index - 1].focus(); // Move focus to previous input on backspace if empty
            } else if (input.value.length === 1 && index < digitInputs.length - 1) {
                digitInputs[index + 1].focus(); // Move focus to next input after entering a digit
            }
        });
        input.addEventListener('paste', (e) => {
            e.preventDefault(); // Prevent default paste behavior
            const pasteData = e.clipboardData.getData('text');
            if (/^\d{6}$/.test(pasteData)) { // Check if pasted data is 6 digits
                for (let i = 0; i < digitInputs.length; i++) {
                    digitInputs[i].value = pasteData[i] || ''; // Fill each input with pasted digits
                }
                digitInputs[digitInputs.length - 1].focus(); // Focus on the last input
            } else {
                showSnackbar("Please paste a 6-digit code.");
            }
        });
    });
}

// Call setupOTPInput when the document is ready
document.addEventListener('DOMContentLoaded', setupOTPInput);