let logo = ['acba.jpg', 'yuni.jpg', 'abb.jpg', 'aeb.jpg', 'ameria.jpg', 'ararat.jpg', 'arcax.jpg', 'ardshin.jpg', 'armsvis.jpg', 'aydi.jpg', 'byblos.jpg', 'convers.jpg', 'evoca.jpg', 'eych.jpg', 'ineco.jpg', 'mellat.jpg', 'vtb.jpg', ]
let nameB = ['Ակբա բանկ ', 'Յունի բանկ', 'ՀԱՅԲԻԶՆԵՍԲԱՆԿ', 'ՀԱՅԷԿՈՆՈՄ ԲԱՆԿ', 'Ամերիաբանկ', 'Արարատ Բանկ', 'Արցախ բանկ', 'Արդշին բանկ', 'Արմսվիս բանկ', 'ԱյԴի Բանկ', 'Բիբլոս Բանկ Արմենիա', 'Կոնվերս Բանկ', 'Կոնվերս Բանկ', 'Էյչ-Էս-Բի-Սի Բանկ', 'Ինեկո_բանկ', 'Մելլաթ բանկ', 'ՎՏԲ-Հայաստան Բանկ']

let data = new Date

let day = data.getDate()
let mounth = data.getMonth()
let year = data.getFullYear()

function banks(){
    for(let i = 0; i < logo.length; i++){
        table.innerHTML += `
            <tbody>
                <tr>
                    <td class="bank" colspan='2'><div><img src='./img/bankLogo/${logo[i]}'>${nameB[i]}</div></td>
                    <td colspan='2' class='amsativ'>${day}.${mounth}.${year}</td>
                    <td class='arj' id='u${i}'></td>
                    <td class='arj' id ='us${i}'></td>
                    <td class='arj' id ='d${i}'></td>
                    <td class='arj' id ='do${i}'></td>
                    <td class='arj' id ='r${i}'></td>
                    <td class='arj' id ='ru${i}'></td>
                    <td class='arj' id ='g${i}'></td>
                    <td class='arj' id ='gb${i}'></td>
                </tr>
            </tbody>
        `
    }
}
banks()

let acba = '../python/json/acba.json'

fetch(acba)
    .then(res => res.json())
    .then(data => {
        u0.innerText = data.EUR[0]
        us0.innerText = data.EUR[1]
        d0.innerText = data.USD[0]
        do0.innerText = data.USD[1]
        r0.innerText = data.RUB[0]
        ru0.innerText = data.RUB[1]
        g0.innerText = data.GBP[0]
        gb0.innerText = data.GBP[1]
        
    })