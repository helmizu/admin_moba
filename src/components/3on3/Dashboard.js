import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Common/Navbar';
import Loader from '../Common/Loader';
import Team from './Team';
import Step from './Step';
import DataTeam from './DataTeam';
import Form from './Form';
import { withRouter } from 'react-router-dom';
import { loadData, loadDetail, loadPemain, verifikasi } from '../../actions/dataAction';

export class Dashboard extends Component {
    constructor(){
        super()
        
        this.state={
            modalOpen : false,
            namaForm: '',
            update : false
        }
        this.modalToggle = this.modalToggle.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.verifikasi = this.verifikasi.bind(this)
    }
    
    modalToggle = (namaForm, update, id_pemain) => {
        this.setState({modalOpen : true, namaForm, update : update})
        if (update) {
            if (namaForm !== "Pemain") {
                this.props.loadDetail(namaForm, this.props.match.params.sekolah)
            } else {
                this.props.loadPemain(id_pemain)
            }
        }
    }

    closeModal = () => {
        this.setState({modalOpen : false, update : false})
    }
    
    verifikasi = (condition) => {
        const data = {
            sekolah : this.props.match.params.sekolah,
            verified : condition,
        }
        this.props.verifikasi(data)
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        loadData: PropTypes.func.isRequired,
        loadDetail: PropTypes.func.isRequired,
        loadPemain: PropTypes.func.isRequired,
        verifikasi: PropTypes.func.isRequired,
    }
    
    componentDidMount = () => {
      this.props.loadData(this.props.match.params.sekolah)
      if (!this.props.match.params.sekolah.includes("3 x 3")) this.props.history.push(`/detail/${this.props.match.params.sekolah}`)
    }
    
    render() {
        const { sekolah } = this.props.match.params
        const { pelatih, manager, pemain, syarat } = this.props.data
        return (
            <div id="wrapper">
            {this.props.data.loading ? < Loader /> : ""}
            <Navbar />
            <div className="page-wrapper">
            <div className="container-fluid">
            <Team kondisi={this.props.data.syarat.verified} team={sekolah} verifikasi={this.verifikasi}/>
            <Step pelatih={pelatih} manager={manager} pemain={pemain} surat_rekomendasi={syarat.rekomendasi} bukti_transfer={syarat.bukti_transfer} verified={syarat.verified} />
            <div className="row">
            <DataTeam data={this.props.data} modalToggle={this.modalToggle} sekolah={this.props.match.params.sekolah}/>
            <Form sekolah={this.props.match.params.sekolah} modalToggle={this.closeModal} namaForm={this.state.namaForm} modalOpen={this.state.modalOpen} update={this.state.update} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

const mapDispatchToProps = {
    loadData,
    loadDetail,
    loadPemain,
    verifikasi,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
