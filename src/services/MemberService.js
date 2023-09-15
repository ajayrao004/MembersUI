import axios from 'axios';

const MEMBER_URL="http://localhost:3030/api/members/allmembers"

class MemberService {
    async getMembers(){
        try {
            const response = await axios.get(MEMBER_URL);
            console.log(response.data);
            return response.data;
        } catch (error) {
            // Handle error if necessary
            throw error;
        }
        
    }
}
const memInst=new MemberService()
export default memInst;