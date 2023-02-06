import '../App.css';
import React from 'react';

function SignIn() {
    return (
        <div>
            <h2>로그인</h2>
            <div class="input-box">
                <input data-testid="email-input" />
            </div>
            <div class="input-box">
                <input data-testid="password-input" />
            </div>
        
        <button data-testid="signin-button">로그인</button>
        </div>
    );
  }
  
  export default SignIn;