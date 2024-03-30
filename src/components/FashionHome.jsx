import React from 'react'
import FashionNav from './FashionNav'

const FashionHome = () => {
    return (
        <div>
<FashionNav/>            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-bg-dark">
                                    <img src="https://avaz.com/cdn/shop/files/shutterstock_1686853369_1000x.png?v=1620057948" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">CLASSY VIBES</h5>
                                        <p class="card-text">.</p>
                                        <p class="card-text"><small></small></p>
                                    </div>
                                </div>
                            </div>
                            <p>  </p>
                            <p class="text-center fs-3">New Trendy Season Fitting Exclusive Items</p>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-bg-dark">
                                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/TopHero/PC/genz-PC._CB580671423_.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">SUMMER FITS</h5>
                                        <p class="card-text"></p>
                                        <p class="card-text"><small></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/Top/Premiumstore/PC1/PCHEADER._SX3000_QL85_.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/TopHero/PC/cml-pc._CB580671423_.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FashionHome