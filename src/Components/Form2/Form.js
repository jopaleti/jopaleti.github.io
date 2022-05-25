import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, FormGroup, Input, Label, FormFeedback, FormText, Button } from 'reactstrap'
import {css} from 'aphrodite'
import styles from './formStyle'
import { Password } from '@mui/icons-material';

let renderCount=0;

const Form2 = () => {
    renderCount++;

    const {register, watch, handleSubmit, formState: { errors }} = useForm();
    
    console.log(errors)
    console.log(watch());
    console.log(watch("firstName"))


    const [isSignUp, setIsSignUp] = useState(true);

    const switchMode = () => {
        setIsSignUp((isPrevState) => !isPrevState);
    }


    var url;
    isSignUp ? url = '/' : url = '/login';

    

  return (
    <div>
        {/* <Headers
            renderCount={renderCount}
            description='loremmmmmmmmmm'
        /> */}
        <div>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5} className=''>
                        <Form action='/' onSubmit={handleSubmit((e) => {console.log(e)})} method = 'post'  className={css(styles.formShadow)}>
                            <legend className={css(styles.heading)}>
                                {isSignUp ? 'SignUp Here': 'Login Here'}
                            </legend>
                            <FormGroup>
                                {isSignUp && 
                                    <>
                                        <Label for="exampleEmail">
                                            Name
                                        </Label>
                                        <input  
                                        type='text'
                                        className={css(styles.Inp)}
                                        placeholder='Your Name'
                                        {...register("firstName", {required: 'This is required'})} />
                                        {errors.firstName && <p>{errors.firstName.message}</p>}
                                    </>
                                }
                                
                                <Label for="Email">
                                    Email
                                </Label>
                                <input className={css(styles.Inp)}
                                    type='email'
                                    placeholder='Email'
                                    // onChange={handleChange}
                                    {...register('email', {required: 'Email is required!!!', maxLength: {value: 20, message: 'Maximum character is 5'}})}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                                
                                <Label for="exampleEmail">
                                    Password
                                </Label>
                                <input 
                                    className={css(styles.Inp)}
                                    type='password'
                                    placeholder='Password'
                                    // onChange={handleChange}
                                    {...register('password1')}
                                />
                                
                                {isSignUp &&
                                    <>
                                    <Label for="exampleEmail">
                                        Confirm Password
                                    </Label>
                                    <input 
                                        className={css(styles.Inp)}
                                        type='password'
                                        placeholder='Password'
                                        // value={values.password2}
                                        // onChange={handleChange}
                                        {...register('password2')}
                                    />
                                    {watch('password2') && <p>Yes</p>}
                                   </> 
                                }
                                <Row className='justify-content-left'>
                                    <Col xl={4}>
                                    <Input
                                        bsSize="sm"
                                        className="mt-3"
                                        type="select"
                                        name='gender'
                                        
                                    >
                                        <option selected disabled>
                                            Gender
                                        </option>
                                        <option value='male'>
                                           Male
                                        </option>
                                        <option value='female'>
                                           Female
                                        </option>
                                    </Input>
                                    </Col>
                                </Row>
                                <br/>
                                <Button type='submit'>
                                Submit
                                </Button>
                                <FormText style={{marginLeft: '10px'}}>
                                    {isSignUp ? <>Alredy have an account?<span onClick={() => switchMode()} style={{cursor: 'pointer', color: 'blue', marginLeft:'5px'}}>Login here</span></>: <>Don't have an account? <span onClick={() => switchMode()} style={{cursor: 'pointer', color:'blue', marginLeft:'5px'}}>SignUp</span></>}
                                </FormText>
                            </FormGroup>
                        </Form>
                    </Col>
                    {/* <Col lg={5} className='bg-primary'>
                        The man
                    </Col> */}
                </Row>
            </Container>
        </div>
    </div>
  )
};


export default Form2