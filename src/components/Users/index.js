import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import Loader from '../Common/Loader'
import Head from './Head'
import List from './List'
import { getUsers } from '../../actions/dataAction'

export class Pendaftar extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    getUsers : PropTypes.func.isRequired,
  }
  constructor() {
    super()

    this.detailHandler = this.detailHandler.bind(this)
  }
  
  detailHandler(sekolah) {
    this.props.history.push(`/detail/${sekolah}`)
  }

  componentDidMount = () => {
    this.props.getUsers()  
  }
  
  render() {
    const { users, loading } = this.props.data
    return (
        <div id="wrapper">
        {loading ? < Loader /> : ""}
        <Navbar />
        <div className="page-wrapper">
        <div className="container-fluid">
        <Head />
        <div className="row">
        <List users={users} detailHandler={this.detailHandler}/>
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
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pendaftar))
