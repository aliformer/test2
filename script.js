fetch('price.json',{method: 'GET'})
.then(response => response.json())
.then(data => {
    let bayi = data.bayi;
    let pelajar = data.pelajar;
    let personal =  data.personal;
    let bisnis = data.bisnis;

    setPackage('oldPriceBayi','newPriceBayiBig', 'newPriceBayiSmall', bayi);
    setPackage('oldPricePelajar','newPricePelajarBig', 'newPricePelajarSmall', pelajar);
    setPackage('oldPricePersonal','newPricePersonalBig', 'newPricePersonalSmall', personal);
    setPackage('oldPriceBisnis','newPriceBisnisBig', 'newPriceBisnisSmall', bisnis);
})
.catch(error=>console.log(error));

async function setPackage(oldPrice,newPriceBig,newPriceSmall, package){
    let oldPrices =  await document.getElementById(oldPrice);
    let newPricesBig = await document.getElementById(newPriceBig);
    let newPricesSmall= await document.getElementById(newPriceSmall);
    let priceSplit = await package.newPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.').split(".")
    console.log(priceSplit)
    oldPrices.innerHTML =await `<s>Rp. ${package.oldPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.') }</s>`
    newPricesBig.innerHTML =await `${priceSplit[0]}`
    newPricesSmall.innerHTML =await `.${priceSplit[1]}`

}
