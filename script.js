const menuItems = [
    {
        name: "Pizza Margherita",
        description: "Pizza com molho de tomate, mozzarella e manjericão.",
        price: "R$ 30,00",
        image: "https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167-900x600.jpg"
    },
    {
        name: "Churrasco Misto",
        description: "Carnes variadas assadas no ponto perfeito, acompanhadas de farofa e vinagrete.",
        price: "R$ 50,00",
        image: "https://i.pinimg.com/originals/66/9e/6c/669e6cd0d864545b7180cce29a3b65b3.jpg"
    },
    {
        name: "Prato Executivo",
        description: "Um prato completo com arroz, feijão, bife, batata frita e salada.",
        price: "R$ 25,00",
        image: "https://cdn.deliway.com.br/blog/base/1aa/c9c/a41/bife-bovino.jpg"
    },
    {
        name: "Feijoada Completa",
        description: "Feijoada tradicional servida com arroz, couve e laranja.",
        price: "R$ 45,00",
        image: "https://i.ytimg.com/vi/vkGRTvqvrkA/maxresdefault.jpg"
    },
    {
      name: "Salada Caesar",
      description: "Salada fresca com alface, frango grelhado, croutons e molho caesar.",
      price: "R$ 20,00",
      image: "https://static.itdg.com.br/images/1200-675/3f0787cb6db2f0db10269fc45bd8abee/shutterstock-1078415420.jpg"
    },
    {
      name: "Petit gâteau",
      description: "Deliciosa sobremesa de chocolate com sorvete de creme.",
      price: "R$ 25,00",
      image: "https://img.cybercook.com.br/receitas/434/petit-gateau.jpeg"
    },
    {
      name: "CheeseBurguer Clássico ",
      description: "Hambúrguer de carne bovina grelhada, queijo derretido, alface, tomate, picles e cebola no pão macio, com ketchup e maionese.",
      price: "R$ 28,00",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg"
    },
    {
      name: "Pudim",
      description: "Sobremesa clássica e cremosa, com calda de caramelo suave e textura delicada que derrete na boca.",
      price: "R$ 18,00",
      image: "https://www.minhareceita.com.br/app/uploads/2024/07/mobile-pudim-de-leite.png"
    }
   
  ];
  
  function displayMenuItems() {
    const menuContainer = document.getElementById("menuItems");
  
    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <img src="${item.image}" alt="${item.name}" class="menu-image">
        `;
        
        itemDiv.onclick = () => selectItem(item);
        menuContainer.appendChild(itemDiv);
    });
  }
  
  function selectItem(item) {
    
    localStorage.setItem("selectedItem", JSON.stringify(item));
   
    window.location.href = "pedido.html";
  }
  
 
  displayMenuItems();