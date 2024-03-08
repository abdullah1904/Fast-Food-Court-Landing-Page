import React from 'react'
import pizza1 from "./Assets/images/p1.png";
import pizza2 from "./Assets/images/p2.png";
import pizza3 from "./Assets/images/p3.png";

export default function Pizza() {
    const style1 = {
        "width": "14rem"
    }
    const style2 = {
        "width": "9rem"
    }
    return (
        <>
            <div className='container-md d-none d-md-block'>
                <div className="row my-3 py-3 ">
                    <div className="col-4 mx-auto">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style1}>
                            <img src={pizza2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Zinger Brust</h5>
                                <h6 className="card-subtitle">5$</h6>
                                <button class="btn btn-info my-1"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style1}>
                            <img src={pizza1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Beef Spice</h5>
                                <h6 className="card-subtitle">7$</h6>
                                <button class="btn btn-info my-1"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style1}>
                            <img src={pizza3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chicken Desi</h5>
                                <h6 className="card-subtitle">4$</h6>
                                <button class="btn btn-info my-1"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid d-block d-md-none'>
                <div className="row my-2 py-2 d-flex align-items-center justify-content-evenly">
                    <div className="col-5 my-2">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style2}>
                            <img src={pizza1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Zinger Brust</h5>
                                <h6 className="card-subtitle">5$</h6>
                                <button class="btn btn-info my-2"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 my-2">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style2}>
                            <img src={pizza3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Beef Spice</h5>
                                <h6 className="card-subtitle">7$</h6>
                                <button class="btn btn-info my-2"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 my-2">
                        <div class="card mx-auto bg-warning text-light p-1 hover1 font2" style={style2}>
                            <img src={pizza2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chicken Desi</h5>
                                <h6 className="card-subtitle">4$</h6>
                                <button class="btn btn-info my-2"><i class="bi bi-cart-plus mx-1"></i>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
