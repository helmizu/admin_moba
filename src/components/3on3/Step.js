import React, { Component } from 'react';

class Step extends Component {
    render() {
        const { pemain, verified } = this.props
        const stepOne = function(){
            if(pemain.length >= 3) {
                return (<li className="text-right sign"><i className="fas fa-check success"></i></li>)
            } else {
                return (<li className="text-right sign"><i className="fas fa-exclamation danger"></i></li>)
            }
        }
        const stepFour = function(){
            if(verified) {
                return (<li className="text-right sign"><i className="fas fa-check success"></i></li>)
            } else {
                return (<li className="text-right sign"><i className="fas fa-exclamation danger"></i></li>)
            }
        }
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">
                                Langkah 1
                            </h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Lengkapi Data Tim</span>
                                </li>
                                {stepOne()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 2</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Verifikasi Admin</span>
                                </li>
                                {stepFour()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step;
