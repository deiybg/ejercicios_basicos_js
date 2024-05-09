const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']



function onlyCamiseta(list){


list.forEach(product => {
    
    if(product.includes("Camiseta")){
        console.log(product);
    }
    
});
}

onlyCamiseta(products);