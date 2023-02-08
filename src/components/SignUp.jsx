import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function SignUp() {
    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');
    let [pass, setPass] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    useEffect(() => {
        if(emailValid && pwValid) {
          setPass(true);
          return;
        }
        setPass(false);
      }, [emailValid, pwValid]);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
          window.location.replace('/todo')
        }
    }, []);

    const checkEmail = (e) => {
        setEmail(e.target.value);
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i ;
        
        if (regExp.test(e.target.value)) {
            setEmailValid(true);
          } else {
            setEmailValid(false);
          }
        console.log('이메일 유효성 검사 ', regExp.test(e.target.value))
    }
    const checkPassword = (e) => {
        setPw(e.target.value);
        const regExp = /^(?=.*[a-zA-z0-9]).{8,20}$/;
        console.log(pw)
        if (regExp.test(e.target.value)) {
            setPwValid(true);
          } else {
            setPwValid(false);
          }
        console.log('비밀번호 유효성 검사 ', regExp.test(e.target.value))
    }

    const clickSingup = ()=>{
        //https://pre-onboarding-selection-task.shop/auth/signup 성공하면 /signin으로 이동
        axios.post('https://pre-onboarding-selection-task.shop/auth/signup', {
            email : email,
            password : pw
        })
        .then(function(res){
            console.log(res);
            if (res.status == 201){
                alert("회원가입 성공! 가입한 정보로 로그인 해주세요! ");
                location.href='/signin'

            }
        })
        .catch(function(err){
            console.log(err);
        })

    }

    return (
        <div className='page'>
            <div className='titleWrap'>회원가입</div>
            <div className='contentWrap'>
                <span className="inputTitle">이메일</span>
                    <div className='inputWrap'>
                        <input className='input' type="text" data-testid="email-input" placeholder='email@naver.com' onChange={checkEmail} />
                    </div>
                <span className="inputTitle">비밀번호</span>
                    <div className='inputWrap'>
                        <input className='input' type="password" data-testid="password-input" placeholder='영어, 숫자 포함 8자 이상' onChange={checkPassword} />
                    </div>
                
                <div className='titleWrap'>
                    <button className='bottomButton' data-testid="signup-button" disabled={!pass} onClick={clickSingup}>가입하기</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default SignUp;
  