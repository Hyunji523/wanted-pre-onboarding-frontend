import '../App.css';
import React from 'react';

function SignUp() {
    return (
        <div>
            <title>회원가입</title>
            <div className='box'>
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
        </div>
    );
  }
  
  export default SignUp;
  