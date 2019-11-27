
document.body.classList.add('homepage')

let footer = document.createElement('div');
footer.innerHTML = `
<div class = "footer-background">
         <div class="footer-bar">
            <div class="left-part">
                <a href = '/home'><img src = 'images/homeicon.svg'></a>
                <a href = ''><img src = 'images/requestsicon.svg'></a>
            </div>
            <div class="middle-part">
                <a href ='/user-requests'><div class = 'requestimage'><img src = 'images/button.svg' class = 'middle-button'></div></a> 
            </div>
            <div class="right-part">
                <a href = '/notifications'><img src = 'images/notificationsicon.svg'></a>
                <a href = '/profile'><img src = 'images/profileicon.svg'</a>
            </div>
        </div>
</div>
`
if(window.screen.width <=414) {
    document.body.appendChild(footer);
}
console.log(window.screen.width)

//FILTER WITH AXIOS
/*const typeOfPet = document.getElementsByClassName("category-content")
console.log(typeOfPet);

const filterResult = () => {
event.preventDefault()
console.log(event.target.classList[0]);
const typeToFilter = event.target.classList[0];

axios.get(`/request-page/${typeToFilter}`)
.then(requestList =>{
    console.log('je suis laaaaaaaa', requestList.data.requestList);
})
.catch( (err) => console.log(err));




}

for (let i = 0; i < typeOfPet.length; i++) {
    typeOfPet[i].addEventListener('click',  filterResult)
}*/
