import {Component} from 'react';
import MemberService from '../services/MemberService';

class ListMemberComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            members: []
        }
    }
    componentDidMount()
    {
        MemberService.getMembers()
        .then((res) => {
            console.log("API Response:", res);
            this.setState({
                members: res,
                loading: false,
            });
        })
        .catch((error) => {
            console.error(error);
            this.setState({ loading: false, error: true });
        });
    }
    render() {
        return (
         <div>
            <h2 className='text-center'> Members List</h2>
            <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Member First Name</th>
                            <th> Member Last Name</th>
                            <th> Member Email</th>
                            <th> Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.members.map(
                                member =>
                                <tr key={member.id}>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.email}</td>
                                </tr>
                                )
                        }
                    </tbody>

                </table>
            </div>

         </div>
        ) 
    }

}
export default ListMemberComponent;