import React from 'react'
import image from './Assets/images/hero-bg.jpg'
import image1 from "./Assets/images/o1.jpg"
import image2 from "./Assets/images/o2.jpg"

export default function Hero() {
    const style1 = {
        "maxWidth": "540px",
    }
    const style2 = {
        "maxWidth": "175px",
    }
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide w-100" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="Slider_Image" />
                </div>
                <div className="carousel-caption d-none d-md-block h-75 w-25 font1">
                    <h5 className='text text-start display-4'>First slide label</h5>
                    <p className='text text-start lead'>Some representative placeholder content for the first slide.</p>
                    <p className='btn btn-outline-primary'>Order Now</p>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className="container-fluid my-3 py-2 d-none d-md-block">
                <div className="row">
                    <div className="col-5 mx-auto my-1 py-2">
                        <div className="card mb-3 shadow shadow-black w-100 hover1" style={style1}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image1} className="img-fluid rounded-start" alt="Deal_1_Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title display-5">Tasty Thursday</h5>
                                        <p className="card-text lead">25% Off</p>
                                        <button className='btn btn-warning text text-white'>Order Now<i className="bi bi-cart-plus mx-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 mx-auto my-1 py-2">
                        <div className="card mb-3 shadow shadow-black hover1" style={style1}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title display-5">Pizza Days</h5>
                                        <p className="card-text lead">15% Off</p>
                                        <button className='btn btn-warning text text-white'>Order Now<i className="bi bi-cart-plus mx-1"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={image2} className="img-fluid rounded-end" alt="Deal_2_Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3 py-2 d-block d-md-none">
                <div className="row">
                    <div className="col-6 my-1 py-2 d-flex align-items-center justify-content-center">
                        <div className="card mb-3 shadow shadow-black w-100 hover1" style={style2}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image1} className="img-fluid rounded-top" alt="Deal_1_Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title h3">Tasty<br />Thursday</h5>
                                        <p className="card-text lead">25% Off</p>
                                        <button className='btn btn-warning text text-white'>Order Now<i className="bi bi-cart-plus mx-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 my-1 py-2 d-flex align-items-center justify-content-center">
                        <div className="card mb-3 shadow shadow-black hover1" style={style2}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image2} className="img-fluid rounded-top" alt="Deal_2_Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title h3">Pizza<br />Days</h5>
                                        <p className="card-text lead">15% Off</p>
                                        <button className='btn btn-warning text text-white'>Order Now<i className="bi bi-cart-plus mx-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
