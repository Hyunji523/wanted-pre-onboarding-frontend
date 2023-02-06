import '../App.css';
import React from 'react';

function SignIn() {
    return (
        <div className='page'>
            <div className='titleWrap'>로그인</div>
            <div className='contentWrap'>
            <span class="inputTitle">이메일</span>
                <div className='inputWrap'>
                <input data-testid="email-input" /></div>
            <span class="inputTitle">비밀번호</span>
                <div className='inputWrap'>
                <input data-testid="password-input" /></div>
          
            <div><button className='bottomButton' data-testid="signin-button">로그인</button></div>
            </div>
        </div>
    );
  }
  
  export default SignIn;