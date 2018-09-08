import React, { Component } from 'react';

class Step extends Component {
    render() {
        const { pelatih, manager, pemain, surat_rekomendasi, bukti_transfer, verified } = this.props
        const stepOne = function(){
            if(pelatih && manager && pemain.length >= 5) {
                return (<li className="text-right sign"><i className="fas fa-check success"></i></li>)
            } else {
                return (<li className="text-right sign"><i className="fas fa-exclamation danger"></i></li>)
            }
        }
        const stepTwo = function(){
            if(surat_rekomendasi) {
                return (<li className="text-right sign"><i className="fas fa-check success"></i></li>)
            } else {
                return (<li className="text-right sign"><i className="fas fa-exclamation danger"></i></li>)
            }
        }
        const stepThree = function(){
            if(bukti_transfer) {
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
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">
                                Langkah 1 &nbsp;
                            </h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Lengkapi Data Tim</span>
                                </li>
                                {stepOne()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 2</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Surat Rekomendasi</span>
                                </li>
                                {stepTwo()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 3</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Upload Bukti Transfer</span>
                                </li>
                                {stepThree()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 4</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Menunggu Verifikasi</span>
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
