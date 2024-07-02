import React from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import "../App.css";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required."),
        postText: Yup.string().required("Title is required."),
        username: Yup.string().min(3).max(15).required("Your username must have min 3 and max 15 characters."),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            navigate("/");
          })
    }

    let navigate = useNavigate();
    return(
        <div className="App CreatePostPage">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className="FormDiv">
                        <label>Title:</label>
                        <ErrorMessage name="title" component="div" className="error-message-form"/>
                        <Field id="inputCreatePost" name="title" placeholder="(Ex. Title...)"/> 
                        <label>Post:</label>
                        <ErrorMessage name="postText" component="div" className="error-message-form"/>
                        <Field id="inputCreatePost" name="postText" placeholder="(Ex. Post...)"/> 
                        <label>Username:</label>
                        <ErrorMessage name="username" component="div" className="error-message-form"/>
                        <Field id="inputCreatePost" name="username" placeholder="(Ex. Nikola...)"/>

                        <button type="submit" id="subBut">Create Post</button>
                        
                    </Form>
                </Formik>
        </div>
    )
}

export default CreatePost;