const contacts = {
    phone: '0791166009',
    email: 'mwagahjoel14@gmail.com'

}
const button =document.querySelector('button');
button.addEventListener('click',function(){
    alert(`${contacts.phone} ${contacts.email}`)
})