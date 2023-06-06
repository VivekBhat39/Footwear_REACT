import React from 'react'

export default function Form() {
    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                        <h1 className='my-auto text-light'>Add Category Form</h1>
                    </div>
                </div>
            </div>

            <section class="contact my-2 pt-2 w-100">

                <div class=" container-fluid">
                    <div class="row">
                        <div class="col-xxl-8 col-10 col-md-6 ms-5 ">
                            <form action="phpcode.php" method="post">
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Product Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Product Name" name="name" />
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Upload Image</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                </form>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn mb-5" style={{ backgroundColor: "#88c8bc" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
