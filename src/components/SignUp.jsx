import '../App.css';
import React from 'react';

function SignUp() {
    return (
        <div className='page'>
            <div className='titleWrap'>회원가입</div>
            <div className='contentWrap'>
            <span class="inputTitle">이메일</span>
                <div className='inputWrap'>
                <input data-testid="email-input" /></div>
            <span class="inputTitle">비밀번호</span>
                <div className='inputWrap'>
                <input data-testid="password-input" /></div>
          
            <div><button className='bottomButton' data-testid="signin-button">가입하기</button></div>
            </div>
        </div>
    );
  }
  
  export default SignUp;
  