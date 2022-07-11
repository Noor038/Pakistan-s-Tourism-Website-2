import React from 'react';

class HomeFooter extends React.Component {
    render() {
        return (
            <div className='Home'>
                <div className="fwall">
                    <div className='footer' id="contact">
                        <p>© Copyright 2022 Explorers</p>
                        <center>
                            <div className="logos">
                                <a href="https://www.facebook.com/n.razzaq.121"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/n_razzaq749/"><i className="fa fa-instagram"></i></a>
                                <a href="https://app.slack.com/client/T036463LYL9/C03646ELTJ5"><i className="fa fa-slack"></i></a>
                                <a href="https://github.com/Noor038"><i className="fa fa-github"></i></a>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFooter;