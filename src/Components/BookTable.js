import React from 'react'

export default function BookTable() {
    return (
        <>
            <div className="container-sm pt-2 pb-3">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 p-3">
                        <h2 className="display-5 font-2 text text-center">Book Table</h2>
                    </div>
                    <div className="col-10 col-md-6">
                        <div class="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="" />
                            <label for="floatingInput">Your Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingPassword" placeholder="" />
                            <label for="floatingPassword">Your Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="tel" className="form-control" id="floatingNumber" placeholder="" />
                            <label for="floatingNumber">Phone Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select class="form-select mb-3" aria-label="Default select example">
                                <option selected>Select Persons</option>
                                <option value="1">One Person</option>
                                <option value="2">Two Persons</option>
                                <option value="3">Three Persons</option>
                                <option value="4">Four Persons</option>
                                <option value="5">Five Persons</option>
                            </select>
                            <label for="floatingDate">How Many Persons</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="datetime-local" className="form-control" id="floatingDateTime" placeholder="" />
                            <label for="floatingDateTime">Date - Time</label>
                        </div>
                        <button type="button" className='btn btn-outline-info d-block mx-auto hover1' data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now<i class="bi bi-check-circle mx-1"></i></button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Table Booked <i class="bi bi-check2-all mx-1"></i></h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Your Table Reservation Has Been Done!
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
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
