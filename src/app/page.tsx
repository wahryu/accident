import React from 'react'

const Home = () => {
  return (
    <>
        <div className="preloader">
            <div className="loading">
                <h2>
                    Loading...
                </h2>
                <span className="progress"></span>
            </div>
        </div>

        <div className="wrapper">
            <ul className="scene unselectable" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15" id="scene">
                <li className="layer" data-depth="0.00">
                </li>
                

                <li className="layer" data-depth="0.10">
                    <div className="background">
                    </div>
                </li>

                

                <li className="layer" data-depth="0.20">
                    <div className="title">
                        <h2>
                            IMMINENT
                        </h2>
                        <span className="line"></span>
                    </div>
                </li>

                <li className="layer" data-depth="0.25">
                    <div className="sphere">
                        <img alt="sphere" src="images/sphere.png" />
                    </div>
                </li>

                <li className="layer" data-depth="0.30">
                    <div className="hero">
                        <h1 id="countdown">
                            The most spectacular coming soon template!
                        </h1>

                        <p className="sub-title">
                            The most spectacular coming soon template!
                        </p>
                    </div>
                </li>

                <li className="layer" data-depth="0.40">
                    <div className="depth-1 flake1">
                        <img alt="flake" src="images/flakes/depth1/flakes1.png" />
                    </div>

                    <div className="depth-1 flake2">
                        <img alt="flake" src="images/flakes/depth1/flakes2.png" />
                    </div>

                    <div className="depth-1 flake3">
                        <img alt="flake" src="images/flakes/depth1/flakes3.png" />
                    </div>

                    <div className="depth-1 flake4">
                        <img alt="flake" src="images/flakes/depth1/flakes4.png" />
                    </div>
                </li>

                <li className="layer" data-depth="0.50">
                    <div className="depth-2 flake1">
                        <img alt="flake" src="images/flakes/depth2/flakes1.png" />
                    </div>

                    <div className="depth-2 flake2">
                        <img alt="flake" src="images/flakes/depth2/flakes2.png" />
                    </div>
                </li>

                <li className="layer" data-depth="0.60">
                    <div className="depth-3 flake1">
                        <img alt="flake" src="images/flakes/depth3/flakes1.png" />
                    </div>

                    <div className="depth-3 flake2">
                        <img alt="flake" src="images/flakes/depth3/flakes2.png" />
                    </div>

                    <div className="depth-3 flake3">
                        <img alt="flake" src="images/flakes/depth3/flakes3.png" />
                    </div>

                    <div className="depth-3 flake4">
                        <img alt="flake" src="images/flakes/depth3/flakes4.png" />
                    </div>
                </li>

                <li className="layer" data-depth="0.80">
                    <div className="depth-4">
                        <img alt="flake" src="images/flakes/depth4/flakes.png" />
                    </div>
                </li>

                <li className="layer" data-depth="1.00">
                    <div className="depth-5">
                        <img alt="flake" src="images/flakes/depth5/flakes.png" />
                    </div>
                </li>

                <li className="layer" data-depth="0.20">
                    <div className="contact">
                        <ul className="icons">
                            <li>
                                <a className="behance" href="#"><i className="fa fa-behance"></i></a>
                            </li>

                            <li>
                                <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                            </li>

                            <li>
                                <a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a>
                            </li>
                        </ul>
                        Theme by <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                        <a className="mail" href="mailto:info@example.com?subject=Hi%20ThemeWagon!">info@example.com</a>
                    </div>
                </li>
            </ul>
        </div>

        <script src="js/plugins.js"></script> 
        <script src="js/jquery.countdown.min.js"></script> 
        <script src="js/main.js"></script>
    </>
  )
}

export default Home
