import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    //const [newReview, setNewReview] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('review-form').innerHTML = '<h3 class="text-center text-success mt-5"><b>Thanks For Sharing Your Thoughts</b></h3>';
                }
            })
    }
    return (
        <div>
            <div className="make-admin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col">
                            <Sidebar />
                        </div>
                        <div className="col-md-8 col">
                            <div className="d-flex justify-content-between addservice-header mt-5">
                                <h1>Service Booking Information</h1>
                                <h3>Flex item 2</h3>
                            </div>
                            <div className="book-service-details">
                                <form id="review-form" className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col form-group mb-5">
                                        <input type="text" name="name" {...register('name', {
                                            required: "Name is required",
                                            pattern: { value: /[A-Z][a-z]/, message: "First text should be capitalized" },
                                        })}
                                            placeholder="Your Name" className="form-control book-form" />
                                        <span style={{ color: "red" }}>{errors.name && errors.name.message}</span>
                                    </div>
                                    <div className="col form-group mb-5">
                                        <input as="textarea" rows={6} name="message" type="text" placeholder="Description" className="reviewForm__focus"
                                            {...register('message', {
                                                required: "Description is required",
                                                pattern: { value: /[A-Z][a-z]/, message: "First text should be capitalized" }
                                            })} />
                                        <span style={{ color: "red" }}>
                                            {errors.message && errors.message.message}
                                        </span>
                                    </div>
                                    <div className="col form-group text-right">
                                        <button type="submit" className="btn">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;