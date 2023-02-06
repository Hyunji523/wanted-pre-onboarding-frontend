import '../App.css';
import React from 'react';

function SignUp() {
    return (
        <div>
            <h2>회원가입</h2>
            <div class="input-box">
                <input 
                data-testid="email-input" 
                type="text"        />
            </div>
            <div class="input-box">
                <input data-testid="password-input" />
            </div>
        <button data-testid="signup-button">가입하기</button>
        </div>
    );
  }
  
  export default SignUp;
  