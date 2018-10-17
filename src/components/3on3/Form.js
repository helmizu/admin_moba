import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData, insertPelatih, insertPemain, updatePelatih, updatePemain } from '../../actions/dataAction';

export class Form extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        global: PropTypes.object.isRequired,
        loadData : PropTypes.func.isRequired,
        insertPelatih : PropTypes.func.isRequired,
        insertPemain : PropTypes.func.isRequired,
        updatePelatih : PropTypes.func.isRequired,
        updatePemain : PropTypes.func.isRequired,
    }
    
    constructor(){
        super()
        this.state = {
            nama : '',
            foto : {},
            ktp : {},
            lisensi : {},
            uFoto : '',
            uKTP : '',
            uLisensi : '',
        }
        this.onChange = this.onChange.bind(this)
        this.fileSelect = this.fileSelect.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    fileSelect(e) {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }
    
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('sekolah', this.props.sekolah)
        if(!this.props.update) {
            if (this.props.namaForm === "Pelatih"){
                formData.append('nama', this.state.nama)
                formData.append('foto', this.state.foto, this.state.foto.name)
                formData.append('ktp', this.state.ktp, this.state.ktp.name)
                formData.append('lisensi', this.state.lisensi, this.state.lisensi.name)
                
                return this.props.insertPelatih(formData)
            }
            if (this.props.namaForm === "Pemain"){
                formData.append('nama', this.state.nama)
                formData.append('foto', this.state.foto, this.state.foto.name)
                formData.append('ktp', this.state.ktp, this.state.ktp.name)
                
                return this.props.insertPemain(formData)
            }
        } else {
            if (this.props.namaForm === "Pelatih"){
                formData.append('nama', this.state.nama)
                if(this.state.foto.name){
                    formData.append('foto', this.state.foto, this.state.foto.name)
                } else {
                    formData.append('foto', this.state.uFoto)
                }
                if(this.state.ktp.name){
                    formData.append('ktp', this.state.ktp, this.state.ktp.name)
                } else {
                    formData.append('ktp', this.state.uKTP)
                }
                if(this.state.lisensi.name){
                    formData.append('lisensi', this.state.lisensi, this.state.lisensi.name)
                } else {
                    formData.append('lisensi', this.state.uLisensi)
                }
                
                return this.props.updatePelatih(this.props.data.update._id, formData)
            } else {
                formData.append('nama', this.state.nama)
                if(this.state.foto.name){
                    formData.append('foto', this.state.foto, this.state.foto.name)
                } else {
                    formData.append('foto', this.state.uFoto)
                }
                if(this.state.ktp.name){
                    formData.append('ktp', this.state.ktp, this.state.ktp.name)
                } else {
                    formData.append('ktp', this.state.uKTP)
                }
                if (this.props.namaForm === "Pemain"){
                    return this.props.updatePemain(this.props.data.update._id, formData)
                }
            }
        }
        window.alert('error');
    }
    
    componentWillReceiveProps = (nextProps) => {
        if(nextProps.namaForm !== this.props.namaForm) {
            this.setState({
                nama : '',
                foto : {},
                ktp : {},
                lisensi : {},
                uFoto : '',
                uKTP : '',
                uLisensi : '',
            })
        }
        if(nextProps.update !== this.props.update) {
            if(nextProps.update === false) {
                this.setState({
                    nama : '',
                    foto : {},
                    ktp : {},
                    lisensi : {},
                    uFoto : '',
                    uKTP : '',
                    uLisensi : '',
                })
            }
        }
        if(nextProps.data.update !== this.props.data.update) {
            this.setState({
                nama : nextProps.data.update.nama,
                uFoto : nextProps.data.update.foto,
                uKTP : nextProps.data.update.ktp,
                uLisensi : nextProps.data.update.lisensi
            })
        }
        if (nextProps.data.success !== this.props.data.success) {
            this.setState({
                nama : '',
                foto : {},
                ktp : {},
                lisensi : {},
                uFoto : '',
                uKTP : '',
                uLisensi : '',
            })
            this.props.modalToggle()
            this.props.loadData(this.props.sekolah)
        }
        if (nextProps.data.error !== this.props.data.error) {
            window.alert(nextProps.data.error.err)
        }
    }
    
    render() {
        const { nama, foto, ktp, lisensi, uFoto, uKTP, uLisensi } = this.state
        return (
            <div id="myModal" className={this.props.modalOpen === true ? 'modal fade in block' : 'modal fade'}>
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
            <button onClick={this.props.modalToggle} type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Data {this.props.namaForm}</h4>
            </div>
            <form className="form-horizontal form-material" onSubmit={this.onSubmit}>
            <div className="modal-body">
            
            <div className="white-box">
            <div className="form-group row">
            <label className="col-md-3">Nama Lengkap <span className="required">*</span> </label>
            <div className="col-md-9">
            <input type="text" placeholder="Johnathan Doe" className="form-control form-control-line" name="nama" value={nama} onChange={this.onChange} required />
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-3 col-form-label">Foto <span className="required">*</span></label>
            <div className="col-sm-9">
            <div className="custom-file">
            <input value="" type="file" className="custom-file-input" name="foto" onChange={this.fileSelect} />
            <label className="custom-file-label">{foto.name ? foto.name : (uFoto ? uFoto.slice(0, 50) : "Pilih Gambar")}</label>
            </div>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-3 col-form-label">{this.props.namaForm === 'Pemain' ? `Kartu Pelajar` : 'KTP'} <span className="required">*</span></label>
            <div className="col-sm-9">
            <div className="custom-file">
            <input value="" type="file" className="custom-file-input" name="ktp" onChange={this.fileSelect} />
            <label className="custom-file-label">{ktp.name ? ktp.name : (uKTP ? uKTP.slice(0, 50) : "Pilih Gambar")}</label>
            </div>
            </div>
            </div>
            {this.props.namaForm === 'Pelatih'
            ? <div className="form-group row">
            <label className="col-sm-3 col-form-label">Lisensi <span className="required">*</span></label>
            <div className="col-sm-9">
            <div className="custom-file">
            <input value="" type="file" className="custom-file-input" name="lisensi" onChange={this.fileSelect} />
            <label className="custom-file-label">{lisensi.name ? lisensi.name : (uLisensi ? uLisensi.slice(0, 50) : "Pilih Gambar")}</label>
            </div>
            </div>
            </div>
            : null
        }
        </div>
        
        </div>
        <div className="modal-footer">
        <div className="form-group">
        <div className="col-sm-12">
        <input type="submit" className="btn btn-success right left-8" value="Submit Data" />
        <button type="button" onClick={this.props.modalToggle} className="btn btn-default right">Close</button>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data,
    global : state.global
})

const mapDispatchToProps = {
    loadData,
    insertPelatih,
    insertPemain,
    updatePelatih,
    updatePemain,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
