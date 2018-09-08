import React, { Component } from 'react'

export default class List extends Component {
  render() {
      const { users, detailHandler } = this.props
      var no = 0;
      const dataUsers = users.map(user => {
          no++;
          return (
              <tr className="data-pemain" onClick={() => detailHandler(user.sekolah)}>
                  <th scope="row">{no}</th>
                  <td>{user.email}</td>
                  <td>{user.sekolah}</td>
                  <td>{user.phone}</td>
                  <td>{user.kategori}</td>
              </tr>
          )
      })
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="panel">
                <div className="sk-chat-widgets">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            DATA PENDAFTAR
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                            <table class="table table-hover table-bordered ">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Sekolah</th>
                                <th scope="col">Handphone</th>
                                <th scope="col">Kategori</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.length > 0 ? 
                                dataUsers
                                :
                                (
                                <tr className="data-pemain" onClick={() => {}}>
                                <th colSpan="5" scope="row" className="text-center bg-light text-muted text"><em>Data Kosong</em></th>
                                </tr>
                                )
                                }
                                
                            </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
  }
}
