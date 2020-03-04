import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[],
        posts:[]
    }

    // FETCH POSTS FROM DATABASE
    fetchPosts = () => {
        Axios.get('http://localhost/php-react/all-posts.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    posts:data.posts.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // INSERT POST
    insertPost = (event,writer,title,cont) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-post.php',{
            writer:writer,
            title:title,
            cont:cont
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    posts:[
                        {"id":data.id,"writer":writer,"title":title,"cont":cont},
                        ...this.state.posts
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    // FETCH USERS FROM DATABASE
    fetchUsers = () => {
        Axios.get('http://localhost/php-react/all-users.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:data.users.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // INSERT USER
    insertUser = (event,code,name, self, why, t1, t2, t3, t4, t5) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://13.124.20.126/add_user.php',{
        // Axios.post('http://localhost/php-react/add-user.php',{
            code:code,
            name:name,
            self:self,
            why:why,
            t1:t1,
            t2:t2,
            t3:t3,
            t4:t4,
            t5:t5
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    users:[
                        {"id":data.id,"code":code,"name":name,"self":self,"why":why,"t1":t1,"t2":t2,"t3":t3,"t4":t4,"t5":t5},
                        ...this.state.users
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;