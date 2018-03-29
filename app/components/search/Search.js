import React from 'react';

export default class Search extends React.Component {
  
  constructor () {
      super();
      this.state = {
          ssnError: false
      }
  }

  validate (event) {
      const ssnRegex = /^\d{4}$/;
      const ssnVal = event.target.value;
      console.log ('value- ', ssnVal);
      if (!ssnVal.test(ssnRegex)) {
        this.setState({ssnError: true});
      } else {
        this.setState({ssnError: false});
      }
  }
  
  constructSearchForm () {
    var searchComponent = [{name: "Last four numbers of SSN", id: "SSN"},{name: "Last Name", id: "lastName"}];
    searchComponent.map(comp => {
        return (
            <div className="form-group">
                <label htmlFor={comp.id} className="col-sm-2 control-label">{comp.name}</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id={comp.id} placeholder={"Enter your " + comp.name} />
                </div>
            </div>
        )
    })
  }
  
  render () {
    return (
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">Search with Seller's Information</div>
            <div className="panel-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Last four numbers of SSN</label>
                        <div className="col-sm-10">
                            <input id="inputEmail3"
                                   type="text" 
                                   className="form-control" 
                                   placeholder="Enter your last 4 digits of SSN" 
                                   pattern="[0-9]{4}" 
                                   title="Please Enter last 4 digits of SSN" 
                                   required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Enter your Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">House Number</label>
                        <div className="col-sm-10">
                            <input type="text" 
                                   className="form-control" 
                                   id="inputPassword3" 
                                   placeholder="Enter your House Number"
                                   pattern="[0-9]{5}" 
                                   title="Please Enter 5 digit house number" 
                                   required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">OR Search with Account Number</div>
            <div className="panel-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Account Number from TPU or LID statement</label>
                        <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               id="inputEmail3" 
                               placeholder="Enter your Account Number"
                               pattern="[0-9]{9}" 
                               title="Please Enter 9 digit account number" 
                               required />
                        </div>
                    </div>
                    <div className="form-group">
                    <h3 className="text-center">
                        <strong>And atleast one of the following</strong>
                    </h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Parcel Number</label>
                        <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               id="inputPassword3" 
                               placeholder="Enter your Parcel Number"
                               pattern="[0-9]{9}" 
                               title="Please Enter 9 digit parcel number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">House Number</label>
                        <div className="col-sm-10">
                        <input type="text" 
                               className="form-control" 
                               id="inputPassword3" 
                               placeholder="Enter your House Number"
                               pattern="[0-9]{5}" 
                               title="Please Enter 5 digit house number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Enter your Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  };
}
