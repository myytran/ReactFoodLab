import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


 class DislayData extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
      recipe_name: ' ' ,
      category: ' ',
      notes: ' ',
      startDate: new Date()

    };

  };

  delete() {
     axios.delete('/recipe/delete/' + this.props.obj._id)
     .then(response => {
       console.log(response)
     })
     .catch(err => console.log(err))
   }


render() {

  return (
    <tr>
        <td>
          {this.props.obj.recipe_name}
        </td>
          <td>
            {this.props.obj.category}
          </td>
          <td>
            {this.props.obj.notes}
          </td>
              <td>
                {moment(this.props.obj.startDate).format('LL')}
              </td>
                <td>
                  <Link to={"/edit/" +this.props.obj._id} className="btn btn-primary"> Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete}  className="btn btn-danger">Delete</button>
              </td>
          </tr>
        );
      }
    }

export default DislayData;