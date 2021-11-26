import axios from 'axios'

const url = 'http://172.26.0.3:3001';

class PeopleRepository {

static get = () => new Promise(async(resolve, reject) => {
    let array = new Array;
    console.log(typeof array, 'Array depois da estancia')
    const {data} = await axios.get(url)
    data.rows.map((item) => {
        array.push(item)
    })
       return resolve(array)
}) 

static post = (nome) => new Promise(async(resolve, reject) =>{
    const {data} = await axios.post(url, { nome : nome })
    if (data != undefined){
        return resolve(data)
    }
    return reject(data)
})

static delete = (id) => new Promise(async(resolve, reject) => {
    const {data} = await axios.delete(`${url}/${id}`)
    if (data != undefined){
        return resolve(data)
    }
    reject(data)
}) 

}

export default PeopleRepository