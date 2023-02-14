import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignIn() {
    //로컬스트리지에 토큰 있으면 todo로 
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
          window.location.replace('/todo')
        }
      }, []);

    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');

    const clickSignin = ()=>{
        //https://pre-onboarding-selection-task.shop/auth/signup 성공하면 /signin으로 이동
        axios.post('https://pre-onboarding-selection-task.shop/auth/signin', {
            email : email,
            password : pw
        })
        .then(res=>{
            localStorage.clear();
            if (res.status == 200){
                alert("로그인 성공");
                localStorage.setItem('email', email)
                let token = res.data.access_token;
                localStorage.setItem("access_token", token);
                location.href='/todo'
            }
            if (res.status == 401){
                alert("가입되지 않은 사용자입니다. ")
            }
            if (res.status == 404){
                alert("비밀번호가 일치하지 않습니다.")
            }
            
        })
        .catch(function(err){
            console.log(err.response)
            if (err.response.data.statusCode == 401){
                alert(err.response.data.message);
            }
            if (err.response.data.statusCode == 404){
                alert(err.response.data.message);    
            }
        })

    }

    return (
        <div className='page'>
            <div className='titleWrap'>로그인</div>
            <div className='contentWrap'>
            <span className="inputTitle">이메일</span>
                <div className='inputWrap'>
                <input className='input' type="text" data-testid="email-input" placeholder='email@naver.com' onChange={(e)=>{setEmail(e.target.value);}}/></div>
            <span className="inputTitle">비밀번호</span>
                <div className='inputWrap'>
                <input className='input' type="password" data-testid="password-input" placeholder='비밀번호 입력' onChange={(e)=>{setPw(e.target.value);}}/></div>
          
            <div className='titleWrap'><button className='bottomButton' data-testid="signin-button" onClick={clickSignin}>로그인</button></div>
            </div>
        </div>
    );
  }
  
  export default SignIn;
