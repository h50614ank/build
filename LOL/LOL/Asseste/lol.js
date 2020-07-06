var loldata = '';

function fetchMaskJson(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            loldata = data
            console.log(loldata)
            addpicture(loldata);
            // addpicture(loldata);

        })
    // .catch(ex => {
    //     $g("body").innerHTML = ex;
    // })
}
window.onload = fetchMaskJson("https://raw.githubusercontent.com/h50614ank/build/master/HTML/lol.json")

function addpicture(loldata) {
    var row = document.getElementsByClassName("row")[0]
    // console.log(loldata.picture)
    loldata.forEach((item, index) => {
        // console.log(item.picture)
        console.log(item)
        let templatecard = document.getElementById("templatecard")
        let cloneContent = templatecard.content.cloneNode(true);
        let img = cloneContent.querySelector('.card-img-top');  //<h5 class="card-title"></h5>
        let name = cloneContent.querySelector('.card-title');
        let modalname = cloneContent.querySelector('.modal-title');
        let model_fade= cloneContent.querySelector('.modal');
        let cardbody=cloneContent.querySelector('.card-body');
        model_fade.setAttribute('id', `exampleModal${index}`);
        cardbody.setAttribute('data-target', `#exampleModal${index}`)
        modalname.innerHTML=item.name
        name.innerHTML=item.name
        img.setAttribute('src', `${item.picture}`);
        let p=cloneContent.querySelectorAll('p');
        console.log(p)
        p[0].innerHTML=`生命:${item.Life}`
        p[1].innerHTML=`生命回復:${item.Life_recovery}`
        p[2].innerHTML=`魔力:${item.Magic}`
        p[3].innerHTML=`魔力回復:${item.Magic_recovery}`
        p[4].innerHTML=`移動:${item.Moving_speed}`
        p[5].innerHTML=`物理攻擊:${item.Physical_attack}`
        p[6].innerHTML=`攻擊距離:${item.Attack_distance}`
        p[7].innerHTML=`物理防禦:${item.Physical_defense}`
        p[8].innerHTML=`物理防禦:${item.Magic_defense}`
        row.appendChild(cloneContent)
    });

}