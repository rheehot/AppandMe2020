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
                // alert(data.msg);
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
    insertUser = (event,code,name, self, why, five) => {
        event.preventDefault();
        event.persist();
        var url = 'http://appandme2020.emirim.kr/add-user.php';
        // var url = 'http://localhost/php-react/add-user.php';

        Axios.post(
            url,
            { 
                code:code,
                name:name,
                self:self,
                why:why,
                five:five
            }
        )
        .then(function (response){
            if(response.data.success === 1){
                // this.setState({
                //     users:[
                //         {"id":response.data.id,"code":code,"name":name,"self":self,"why":why,"five":five},
                //         ...this.state.users
                //     ]
                // });
                event.target.reset();
                alert(response.data.msg);
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch(function (error) {
            alert("error : " + error);
        });

        // Axios.post('http://18.216.250.163/add-user.php', {
        // // Axios.post('http://localhost/php-react/add-user.php',{
        //     code:'1234',
        //     name:'name',
        //     self:'self',
        //     why:'why',
        //     five:'five'
        //   })
        //   .then(function (data) {
        //     alert('function insertUser2');
        //     if(data.data[20] === "1"){
        //         this.setState({
        //             users:[
        //                 {"id":data.id,"code":code,"name":name,"self":self,"why":why,"five":five},
        //                 ...this.state.users
        //             ]
        //         });
        //         event.target.reset();
        //         alert("앱앤미에 지원해주셔서 감사합니다:D\n제출 여부를 확인하고 싶다면 앱앤미 페이스북 페이지를 이용해주세요");
        //     else{

        //     }
        // }.bind(this))
        //   .catch(function (error) {
        //     alert(error);
        //   });


        // Axios.post('http://18.216.250.163/add-user.php',{

        // }).then(function (data) {
        //     
        //     }
        //     else{
        //         // alert(data.msg);
        //         alert("지원서 제출에 실패하였습니다.\n빠지거나 잘못 기입한 항목이 있는지 확인해주세요ㅜㅜ");
        //     }
        // }.bind(this))
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
}

export default Actions;