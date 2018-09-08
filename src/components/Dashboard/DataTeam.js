import React, { Component } from 'react';
import { baseUrl } from '../../config';

class DataTeam extends Component {
    render() {
        var no = 0;
        const { pelatih, manager, medis, guru, pemain } = this.props.data
        return (
            <div className="col-md-12 col-lg-8 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Data Tim</h3>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">
                            Pelatih
                            {pelatih ? (<span className="btn btn-oren" onClick={() => this.props.modalToggle('Pelatih', true)}>Update <i className="fas fa-plus"></i></span>) : (<span className="btn btn-default" onClick={() => this.props.modalToggle('Pelatih', false)}>Tambah <i className="fas fa-plus"></i></span>)}
                        </h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={pelatih.foto ? `${baseUrl}/images/${pelatih.foto}` : require('../../assets/img/2000px-Disc_Plain_grey.svg.png') } alt="pelatih"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={pelatih.ktp ? `${baseUrl}/images/${pelatih.ktp}` : require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="user-id sertifikat"> <img src={pelatih.lisensi ? `${baseUrl}/images/${pelatih.lisensi}` : require('../../assets/img/rectangle2.png')} alt="sertifikat" className="" />
                            </div>
                            <div className="mail-contnet text-capitalize txt-pelatih">
                                <h5>{pelatih.nama ?  pelatih.nama : (<em className="text-muted">Nama Pelatih</em>)}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Manajer 
                        {manager ? (<span className="btn btn-oren" onClick={() => this.props.modalToggle('Manajer', true)}>Update <i className="fas fa-plus"></i></span>) : (<span className="btn btn-default" onClick={() => this.props.modalToggle('Manajer', false)}>Tambah <i className="fas fa-plus"></i></span>)}
                        </h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={manager.foto ? `${baseUrl}/images/${manager.foto}` : require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="manajer"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={manager.ktp ? `${baseUrl}/images/${manager.ktp}` : require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet text-capitalize">
                                <h5>{manager.nama ? manager.nama : (<em className="text-muted">Nama Manajer</em>)}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Medis 
                        {medis ? (<span className="btn btn-oren" onClick={() => this.props.modalToggle('Medis', true)}>Update <i className="fas fa-plus"></i></span>) : (<span className="btn btn-default" onClick={() => this.props.modalToggle('Medis', false)}>Tambah <i className="fas fa-plus"></i></span>)}
                        </h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={medis.foto ? `${baseUrl}/images/${medis.foto}` : require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="medis"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={medis.ktp ? `${baseUrl}/images/${medis.ktp}` : require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet text-capitalize">
                                <h5>{medis.nama ? medis.nama : (<em className="text-muted">Nama Medis</em>)}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Guru Pendamping
                        {guru ? (<span className="btn btn-oren" onClick={() => this.props.modalToggle('Guru', true)}>Update <i className="fas fa-plus"></i></span>) : (<span className="btn btn-default" onClick={() => this.props.modalToggle('Guru', false)}>Tambah <i className="fas fa-plus"></i></span>)}
                        </h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={guru.foto ? `${baseUrl}/images/${guru.foto}` : require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="guru"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={guru.ktp ? `${baseUrl}/images/${guru.ktp}` : require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet text-capitalize">
                                <h5>{guru.nama ? guru.nama : (<em className="text-muted">Nama Guru</em>)}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Pemain 
                        {pemain.length >= 12 ? <span className="disabled btn btn-default" onClick={() => {}}>Tambah <i className="fas fa-plus"></i></span> : <span className="btn btn-default" onClick={() => this.props.modalToggle('Pemain', false)}>Tambah <i className="fas fa-plus"></i></span> }
                        </h3>
                        {   
                            pemain.length ? 
                            (
                                pemain.map(pem => { no++; return (
                                    <div className="comment-body data-pemain" onClick={() => this.props.modalToggle('Pemain', true, pem._id)} key={pem._id}>
                                        <div className="user-img"> <img src={pem.foto ? `${baseUrl}/images/${pem.foto}` : require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pemain"
                                            className="img-circle" />
                                        </div>
                                        <div className="user-id"> <img src={pem.ktp ? `${baseUrl}/images/${pem.ktp}` : require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                                        </div>
                                        <div className="mail-contnet text-capitalize">
                                            <h5>{pem.nama ? pem.nama : (<em className="text-muted">Nama Pelatih</em>)}</h5>
                                        </div>
                                            <span className="nomor display-4 text-muted">{no}</span>
                                    </div>
                                    )
                                })
                            ) 
                            : 
                            (
                                <div className="comment-body data-pemain" >
                                    <div className="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                        className="img-circle" />
                                    </div>
                                    <div className="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                                    </div>
                                    <div className="mail-contnet text-capitalize">
                                        <h5><em className="text-muted">Nama Pelatih</em></h5>
                                    </div>
                                </div>   
                            )
                            }
                    </div>
                </div>
            </div>

        );
    }
}

export default DataTeam;
