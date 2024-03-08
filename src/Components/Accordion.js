import React from 'react'

export default function Accordion() {
    return (
        <div className='container-fluid bg-info py-3'>
            <div className="container-sm">
                <div className="row">
                <div className="col-12 p-3">
                        <h2 className="display-5 font-2 text text-center text-light">Customer Review</h2>
                    </div>
                    <div className="col-10 col-md-6 mx-auto">
                        <div className="accordion shadow shadow-dark shadow-3" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        John <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i> <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i> <i class="bi bi-star-fill mx-1"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='font1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil commodi sit repellendus, debitis exercitationem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Allen <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i> <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-half mx-1"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className='font1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quas ad sunt sit soluta vel expedita eligendi ea non veniam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Ronny <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i> <i class="bi bi-star-fill mx-1"></i><i class="bi bi-star-fill mx-1"></i><i class="bi bi-star mx-1"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="font1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt neque minus quisquam, nam nesciunt voluptates consectetur optio, totam maiores sequi autem labore ab maxime, tenetur a officia adipisci quam?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
