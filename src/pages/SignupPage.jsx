import {Container,Col,Row,Form,FormGroup} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState,useRef, useEffect } from 'react';
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'; 
import {auth,storage,db} from '../firebaseconfig';
import {setDoc,doc} from 'firebase/firestore';
import {toast} from 'react-toastify';



function SignupPage() {

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [file,setFile] = useState(null);
  const [loading,setLoading] = useState(false)

 

  async function handleSubmit (e){
    e.preventDefault();
    if(!emailRef.current.value && !passwordRef.current.value) return;
    setLoading(true)


    // console.log(emailRef.current.value,passwordRef.current.value);
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user

      const storageRef = ref(storage,`images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef,file)
      uploadTask.on((error)=>{
        toast.error('profile picture not uploaded');
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{

          // update user profile
          await updateProfile(user,{
            displayName:username,
            photoURL: downloadURL, 
          }),
          await setDoc(doc(db,'users',user.uid),{
            uid:user.uid,
            displayName:username,
            email:email,
            photoURL:downloadURL,
          });
        });

        //store user data in firestore database

      })
      setLoading(false);
      console.log(user);
      toast.success('Account created successfully');
      navigate('/login')
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error('something went wrong')
    }
    
    //   .then((userCredential) => {
      //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  // console.log(user);
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  }

  

  return (
    <Helmet title='Signup'>
      {/* <CommonSection title='Signup'/> */}

      <section className='tablet:!py-[20px]'>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center rounded-[5px] py-[2rem] !bg-primary'>
              <h3 className="fw-bold fs-4 text-[white] !mb-[9px]">Signup</h3>
              <Form onSubmit={handleSubmit}  className="auth__form">
                <FormGroup className=''>
                  <input type="text" required placeholder='username' ref={usernameRef} className='focus:outline-none py-[3px] px-[7px] rounded-[3px] small:w-[90%] w-[70%]'/>
                </FormGroup>
                <FormGroup className=''>
                  <input type="text" required placeholder='email' ref={emailRef} className='focus:outline-none py-[3px] px-[7px] rounded-[3px] small:w-[90%] w-[70%]'/>
                </FormGroup>
                <FormGroup>
                  <input type="password" required ref={passwordRef} placeholder='password' className='py-[3px] focus:outline-none px-[7px] rounded-[3px] small:w-[90%] w-[70%]' />
                </FormGroup>
                <FormGroup>
                  <input type="file"  onChange={(e)=>setFile(e.target.files[0])} required className='text-white py-[3px] focus:outline-none px-[7px] rounded-[3px] small:w-[90%] w-[70%]' />
                </FormGroup>
                <motion.button whileTap={{scale:1.1}} disabled={loading} className='rounded-[5px] cursor-pointer mb-[8px] text-[.8rem] !text-[#999] font-medium bg-white py-[5px] px-[18px]'>{loading ? 'Loading..' : 'Create an Account'}</motion.button>
                <p>Already have an account? <Link to='/login' className='link'>Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default SignupPage;