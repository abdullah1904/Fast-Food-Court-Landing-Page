import React from 'react'
import image from "./Assets/images/about-img.png";

export default function About() {
    const style = {
        "width": "18rem"
    }
    return (
        <div className='container-fluid py-5 bg-info text text-light'>
            <div className="container-md">

            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-10 col-md-6 mx-auto">
                    <img src={image} alt="" className="d-block mx-auto"style={style}/>
                </div>
                <div className="col-10 col-md-6 mx-auto py-4">
                    <h3 className="display-3 font2">About Us</h3>
                    <p className="font1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod alias voluptates! Qui debitis blanditiis mollitia iste, esse reprehenderit laudantium unde aspernatur voluptatem omnis! Quod deleniti aliquam neque omnis nostrum explicabo impedit ipsum, dolorem eos ad, consequatur ab vitae adipisci ipsa. Error impedit dicta perspiciatis vel ut velit ipsam ullam?</p>
                    <button className='d-block btn btn-outline-light hover1'>Contact Us<i class="bi bi-telephone mx-1"></i></button>
                </div>
            </div>
            </div>
        </div>
    )
}
