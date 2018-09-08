import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { insertSyarat, loadData } from '../../actions/dataAction';
import { baseUrl } from '../../config';
export class Syarat extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        insertSyarat : PropTypes.func.isRequired,
        loadData : PropTypes.func.isRequired,
    }

    constructor(){
        super()
        this.state = {
            rekomendasi : {},
            bukti_transfer : {}
        }
        this.fileSelect = this.fileSelect.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    fileSelect(e) {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    componentWillReceiveProps = (nextProps) => {
      if(nextProps.data.success !== this.props.data.success) {
          this.props.loadData(this.props.sekolah);
      }
    }
    
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('sekolah', this.props.sekolah)
        if (this.state.rekomendasi.name) {
            formData.append('rekomendasi', this.state.rekomendasi, this.state.rekomendasi.name)
        }
        if (this.state.bukti_transfer.name) {
            formData.append('bukti_transfer', this.state.bukti_transfer, this.state.bukti_transfer.name)
        }
        console.log(this.state)
        this.props.insertSyarat(formData)
    }
    render() {
        const { rekomendasi, bukti_transfer } = this.state
        const { syarat } = this.props.data
        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="panel">
                    <div className="sk-chat-widgets">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                SURAT REKOMENDASI
                            </div>
                            <div className="panel-body text-center">
                                <div className="wrapper-syarat">
                                { syarat.rekomendasi ? 
                                (<div>
                                    <img src={`${baseUrl}/images/${syarat.rekomendasi}`} alt="" className="img-fluid p-10"/>
                                </div>)
                                : (
                                <form onSubmit={this.onSubmit}>
                                <div className="custom-file">
                                <input value="" type="file" className={rekomendasi.name ? "custom-file-add-after" : "custom-file-add"} name="rekomendasi" onChange={this.fileSelect} />
                                {rekomendasi.name ? 
                                (
                                <label className="custom-add-file-title">
                                {rekomendasi.name} 
                                <br/>
                                <input type="submit" value="Submit Data" className="btn btn-success m-t-30 btn-submit"/>
                                </label>
                                )
                                : 
                                (   
                                    <label className="custom-add-file">
                                    <img src={require('../../assets/img/plus.png')} alt="" className="img-fluid"/>
                                    </label>
                                )}
                                </div>
                                </form>
                                )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="sk-chat-widgets">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                BUKTI TRANSFER
                            </div>
                            <div className="panel-body text-center">
                                <div className="wrapper-syarat">
                                {syarat.bukti_transfer ? (
                                    <div>
                                    <img src={`${baseUrl}/images/${syarat.bukti_transfer}`} alt="" className="img-fluid p-10"/>
                                    </div>
                                ) : (

                                    <form onSubmit={this.onSubmit}>
                                    <div className="custom-file">
                                    <input value="" type="file" className={bukti_transfer.name ? "custom-file-add-after" : "custom-file-add"} name="bukti_transfer" onChange={this.fileSelect} />
                                    {bukti_transfer.name ? 
                                    (
                                        <label className="custom-add-file-title">
                                    {bukti_transfer.name} 
                                    <br/>
                                    <input type="submit" value="Submit Data" className="btn btn-success m-t-30 btn-submit"/>
                                    </label>
                                    )
                                    : 
                                    (   
                                        <label className="custom-add-file">
                                        <img src={require('../../assets/img/plus.png')} alt="" className="img-fluid"/>
                                        </label>
                                    )}
                                    </div>
                                    </form>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    global : state.global,
    data : state.data
})

const mapDispatchToProps = {
    insertSyarat, 
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(Syarat)
