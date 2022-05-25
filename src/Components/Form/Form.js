import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, FormFeedback, FormText, Button } from 'reactstrap'
import {css} from 'aphrodite'
import styles from './formStyle'
import validate from './validateInfo';

const Formed = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSignUp, setIsSignUp] = useState(true);

    const switchMode = () => {
        setIsSignUp((isPrevState) => !isPrevState);
    }

    const handleChange  = (e)  => {
        setValues({
            ...values,
           [e.target.name]: [e.target.value.trim()]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));

        if (url == '/login'){
            console.log(values.email)
        }
        console.log(values);
    }
    var url;
    isSignUp ? url = '/' : url = '/login';

    

  return (
    <div>
        <div>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5} className=''>
                        <Form action={url} method = 'post' onSubmit={handleSubmit} className={css(styles.formShadow)}>
                            <legend className={css(styles.heading)}>
                                {isSignUp ? 'SignUp Here': 'Login Here'}
                            </legend>
                            <FormGroup>
                                {isSignUp && 
                                    <>
                                        <Label for="exampleEmail">
                                            Name
                                        </Label>
                                        <Input 
                                            name='username'
                                            type='text'
                                            placeholder='Your name'
                                            value={values.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && <FormText className={css(styles.validateForm)}>{errors.username}</FormText>}
                                    </>
                                }
                                
                                <Label for="Email">
                                    Email
                                </Label>
                                <Input 
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <FormText className={css(styles.validateForm)}>{errors.email}</FormText>}
                                <Label for="exampleEmail">
                                    Password
                                </Label>
                                <Input 
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <FormText className={css(styles.validateForm)}>{errors.password}</FormText>}
                                {isSignUp &&
                                    <>
                                    <Label for="exampleEmail">
                                        Confirm Password
                                    </Label>
                                    <Input 
                                        name='password2'
                                        type='password'
                                        placeholder='Password'
                                        value={values.password2}
                                        onChange={handleChange}
                                    />
                                    {errors.password2 && <FormText className={css(styles.validateForm)}>{errors.password2}</FormText>}</> 
                                }
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

export default Formed