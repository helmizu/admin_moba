import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div>
                <div className="row bg-title">
                    <div className="col-md-10">
                        <h4 className="page-title text-uppercase">{this.props.team}</h4>
                    </div>
                    <div className="col-md-2">
                    {
                        this.props.kondisi ? 
                        <button className="btn btn-block btn-danger" onClick={() => this.props.verifikasi(false)}>Batalkan</button>
                        :
                        <button className="btn btn-block btn-success" onClick={() => this.props.verifikasi(true)}>Verifikasi</button>
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
